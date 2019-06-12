<template>
    <div id="app">
        <router-view></router-view>
        <FooteGuide v-if="$route.meta.showFoot"></FooteGuide>
    </div>
</template>
<script>
import FooteGuide from './components/FooterGuide/FooterGuide'
export default {
    components:{
        FooteGuide
    }
}
</script>
<style lang="stylus" scoped>
#app
    width 100%
    height 100%
    position relative
    background #f5f5f5
</style>
