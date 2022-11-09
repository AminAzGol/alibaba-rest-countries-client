import { getAllCountries } from "~/services/api"

export const state = () => ({
    theme: 'light-theme',
    countries: [],
    errors: {
        countries: null
    }
})

export const getters = {
    getTheme(state) {
        return state.theme
    },
    getCountries(state) {
        return state.countries
    },
    getErrors(state){
        return state.errors
    }
}

export const mutations = {
    toggleTheme(state) {
        if(state.theme == "light-theme"){
            state.theme = "dark-theme"
        } else {
            state.theme = "light-theme"
        }
        console.log("Toggle theme called: ", state.theme)
    },
    setCountries(state, countries){
        state.countries = countries
    },
    setCountryError(state, error){
        state.errors.countries = error
    }
}

export const actions = {
    async updateCountries(context){
        try{
            const countries = await getAllCountries(this.$axios)
            context.commit('setCountries', countries)
            context.commit('setCountryError', null)
        } catch(e){
            context.commit('setCountryError', e)
        }
    }
}