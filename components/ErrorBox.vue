<template>
  <div class="error-message">
    <h3>{{primaryText}}</h3>
    <h4>{{secondaryText}}</h4>
  </div>
</template>

<script>
export default {
    props:{
        primaryText: {
            type: String,
            default: "Sorry, we couldn't connect to the server."
        },
        secondaryText: {
            type: String,
            default: "Please try in few mintues."
        }
    }
};
</script>

<style>
.error-message {
  color: var(--text-primary);
  text-align: center;
}
</style>