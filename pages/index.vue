<template>
  <div>
    <div class="row p-0 m-0">
      <div class="search">
        <span>
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>
        <input type="text" placeholder="Search for a country..." v-model="searchVal" />
      </div>
      <div class="filter">
        <div
          class="dropdown"
          @click="regionDropdownActive = !regionDropdownActive"
        >
          {{ regionFilter || "Filter by Region" }}
          <div class="dropdown-icon">
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </div>
        </div>
        <div class="list" v-if="regionDropdownActive">
          <p
            v-for="region of regions"
            :key="region"
            @click="selectRegion(region)"
          >
            {{ region }}
          </p>
        </div>
      </div>
    </div>
    <error-box class="mt-5" v-if="fetchError"></error-box>
    <div class="row countries" v-else>
      <div  v-for="country of filteredCountries" class="col-xl-3 col-lg-4 col-md-6 col-sm-12 pb-5" :key="country.name">
        <div class="card" >
          <NuxtLink :to="'/detail/'+country.alpha2Code">          
          <template>
            <div
              class="flag"
              :style="{ backgroundImage: 'url(' + country.flag + ')' }"
            ></div>
            <div class="info">
              <div class="country-name">{{ country.name }}</div>
              <div class="attribute mt-2">
                <div class="attr-name">Population:</div>
                <div class="attr-value">{{ withCommas(country.population) }}</div>
              </div>
              <div class="attribute">
                <div class="attr-name">Region:</div>
                <div class="attr-value">{{ country.region }}</div>
              </div>
              <div class="attribute">
                <div class="attr-name">Capital:</div>
                <div class="attr-value">
                  {{ country.capital || "Unknown" }}
                </div>
              </div>
            </div>
          </template>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorBox from '~/components/ErrorBox.vue';
import { numberWithCommas } from '~/utils/utils';
import { getAllCountries } from "/services/api";

export default {
  components:{
    ErrorBox
  },
  data() {
    return {
      countries: [],
      filteredCountries: [],
      lastUpdate: null,
      searchVal: null,
      searchTimeout: null,
      regionFilter: null,
      regions: ["America", "Europe", "Australia"],
      regionDropdownActive: false,
      fetchError: false,
    };
  },
  methods: {
    withCommas(number){
      return numberWithCommas(number)
    },
    filterCountries(){
      console.log("filter countries called")
      var filtered = this.countries.filter(c =>{
        var hasName, hasRegion = false
        if(!this.regionFilter || c.region == this.regionFilter){
          hasRegion = true
        }
        if(!this.searchVal || c.name.toLowerCase().includes(this.searchVal.toLowerCase())){
          hasName = true
        }
        return hasName && hasRegion
      })

      this.filteredCountries = filtered
    },
    selectRegion(region) {
      if(region == 'All'){
        this.regionFilter = null
      } else{
        this.regionFilter = region;
      }
      console.log(this.regionFilter)
      this.regionDropdownActive = false;
      this.filterCountries()
    },
    updateRegions(){
      var regions = ['All']
      for(var c of this.countries){
        if(regions.indexOf(c.region) < 0){
          regions.push(c.region)
        }
      }
      this.regions = regions
    }
  },
  async fetch() {
    console.log("fetch called", this.searchVal, this.regionFilter)

    /* if countries are updated recently, do not update */
    if(process.client) {
      this.lastUpdate  = window.localStorage.getItem('lastUpdate')
    }
    if(!this.lastUpdate && Date.now() - this.lastUpdate > 60*1000){
      console.log("updating countries")
      await this.$store.dispatch('updateCountries')
    }


    /* if error happend while fetching the data, show error message */
    const errs = this.$store.state.errors
    console.log("Counrty Errors:", errs.countries)
    if(errs.countries){
      this.fetchError = true
      return
    }

    /* update countries */
    this.countries = this.$store.state.countries
    this.filterCountries()
    this.updateRegions()
    this.lastUpdate = Date.now()
    if(process.client) {
      localStorage.setItem('lastUpdate', this.lastUpdate)
    }
  },
  watch:{
    searchVal: function(newVal, oldVal){
      if(this.searchTimeout){
        clearTimeout(this.searchTimeout)
      }
      var self = this
      this.searchTimeout = setTimeout(()=>{
        self.filterCountries()
      }, 500)
    }
  }
};
</script>


<style lang="scss">
.search {
  margin: 2.5rem 3rem;
  box-shadow: 0 0 3px rgb(245, 236, 236);
  background-color: var(--elements-primary);
  border-radius: 5px;
  color: #777;
  span {
    padding-left: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    padding: 15px;
    border: none;
    background-color: transparent;
    color: var(--text-primary);
    &:focus {
      outline: none;
    }
  }
}

.filter {
  margin: 2.5rem 3rem 2.5rem auto;
  border-radius: 5px;
  color: var(--text-primary);
  position: relative;
  z-index: 10;
  .dropdown {
    background-color: var(--elements-primary);
    box-shadow: 0 0 3px rgb(245, 236, 236);
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
    min-width: 11rem;
    display: flex;
    .dropdown-icon {
      margin-left: auto;
    }
  }
  .list {
    padding: 15px;
    background-color: var(--elements-primary);
    border-radius: 5px;
    box-shadow: 0 0 3px #aaa;
    position: absolute;
    margin-top: 10px;
    width: 100%;
    p {
      padding: 8px 0;
      margin: 0;
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 675px) {
  .filter{
    margin: 0 3rem 3rem 3rem;
  }
}
.countries {
  padding: 0 3rem;
  .card {
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    background-color: var(--elements-primary);
    a {
      color: var(--text-primary);
      text-decoration: none;
    }
    &:hover{
      cursor: pointer;
    }
    .flag {
      background-color: var(--elements-primary);
      padding-top: 75%;
      background-size: cover;
      background-position: center;
    }
    .info {
      padding: 2rem;
      .country-name {
        font-weight: 800;
        font-size: 1.2rem;
      }
      .attribute {
        display: flex;
        .attr-name {
          font-weight: 600;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
