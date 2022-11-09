<template>
  <div>
    <div class="row m-0 navigation">
      <div class="back" @click="$router.go(-1)">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          Back
      </div>
    </div>
    <error-box v-if="acitvateError"></error-box>
    <div v-else class="row details">
      <div class="col-sm-12 col-md-6">
        <div class="image"
        :style="{ backgroundImage: 'url(' + country.flag + ')' }"
        ></div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row m-0 country-name">{{country.name}}</div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 mt-5">
            <div class="attribute">
                <div class="attr-name">Native Name:</div>
                <div class="attr-value">{{ (country.nativeName) }}</div>
            </div>
            <div class="attribute">
                  <div class="attr-name">Population:</div>
                  <div class="attr-value">{{ withCommas(country.population) }}</div>
            </div>
            <div class="attribute">
                  <div class="attr-name">Region:</div>
                  <div class="attr-value">{{ (country.region) }}</div>
            </div>
            <div class="attribute">
                  <div class="attr-name">Sub Region:</div>
                  <div class="attr-value">{{ (country.subregion) }}</div>
            </div>
            <div class="attribute">
                  <div class="attr-name">Capital:</div>
                  <div class="attr-value">{{ (country.capital) || "Unkown" }}</div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 mt-5">
            <div class="attribute">
                <div class="attr-name">Top Level Domain:</div>
                <div class="attr-value">{{ country.topLevelDomain.join(", ") }}</div>
            </div>
            <div class="attribute">
                  <div class="attr-name">Currencies:</div>
                  <div class="attr-value">{{ country.currencies.map(c=>c.code).join(', ') }}</div>
            </div>
            <div class="attribute">
                  <div class="attr-name">Languages:</div>
                  <div class="attr-value">{{country.languages.map(l=>l.name).join(', ') }}</div>
            </div>
          </div>
          </div>
          <div class="row attribute border-countries" v-if="borderCounries.length > 0">
                  <div class="col-sm-12 p-0 col-md-12 col-lg-4 col-xl-3 ">
                      <div class="attr-name">
                        Border Countries:
                      </div>
                    </div>
                  <div class="col-sm-12 p-0 col-md-12 col-lg-8 col-xl-9 attr-box-list" >
                    <NuxtLink  class="attr-box" v-for="(bc) of borderCounries" :key="bc.name" :to="'/detail/'+bc.alpha2Code">
                      {{bc.name}}
                    </NuxtLink>
                  </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCountriesByCodes, getCountryByCode } from "~/services/api";
import { numberWithCommas } from "~/utils/utils";
import ErrorBox from '~/components/ErrorBox.vue';

export default {
  components:{
    ErrorBox
  },
  data() {
    return {
      country: null,
      borderCounries: [],
      acitvateError: false
    };
  },
  async fetch() {
    // this.country = await getCountryByCode(tag)
  },
  async asyncData({ params, $axios }) {
    const tag = params.tag;
    try{

      var country = await getCountryByCode($axios,tag);
      if (!country.borders || country.borders.length == 0 ) {
        borderCounries = []
      } else {
        var borderCounries = await getCountriesByCodes($axios, country.borders)
      }
      var acitvateError = false
    } catch(e){
      acitvateError = true
      console.error(e)
    }
    return { tag, country, borderCounries, acitvateError};
  },
  methods: {
    withCommas(number) {
      return numberWithCommas(number);
    }
  },
};
</script>

<style lang="scss">
.navigation, .details {
  padding: 3rem;
}
.row.navigation {
  a {
    color: var(--text-primary);
    text-decoration: none;
  }
  .back {
    border-radius: 5px;
    color: var(--text-primary);
    background-color: var(--elements-primary);
    box-shadow: 0 0 3px #aaa;
    padding: 10px 15px;
    cursor: pointer;
    min-width: 8rem;
    text-align: center;
  }
}

.image {
  padding-top: 75%;
  background-size: cover;
  background-position: center;
}
.country-name{
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
}
.attribute {
  display: flex;
  color: var(--text-primary);
  .attr-name {
    font-weight: 600;
    margin-right: 5px;
  }
}
.border-countries{
  margin: 0;
  margin-top: 3rem;
  .attr-box {
    background-color: var(--elements-primary);
    color: var(--text-primary);
    box-shadow: 0 0 3px #aaa;
    padding: 10px 15px;
    margin: 5px;
    border-radius:5px;
    display: inline-block;
    text-decoration: none;
  }
}

</style>