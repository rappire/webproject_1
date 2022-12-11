<template>
    <div>
      <PageHeader></PageHeader>
      <Demovideo></Demovideo>
    </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader.vue';
import Demovideo from '@/components/DemovidPage/DemoPageVid.vue';

export default {
    components: {
        PageHeader,
        Demovideo,
    },
}
</script>

<style scoped>

</style>