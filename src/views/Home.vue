<template>
  <div>
      asd
  </div>
</template>

<script>
import { getLocaInfo } from '../fetch/api'
export default {
    mounted() {
        const params = {
            type: 'guess'
        }
        getLocaInfo(params).then(res => {
            console.log(res)
        })
    }
}
</script>

<style>

</style>