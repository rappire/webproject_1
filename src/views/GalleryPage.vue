<template>
    <div>
        <PageHeader></PageHeader>
        <GalleryPage></GalleryPage>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import GalleryPage from '@/components/GalleryPage/GalleryImage.vue';

export default {
    components: {
        PageHeader,
        GalleryPage,
    },
}
</script>

<style scoped>

</style>