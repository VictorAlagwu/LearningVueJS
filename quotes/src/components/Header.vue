<template>
    <div class="row">
        <h3>Quote Added</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                :style="{width: (quotesCount / maxQuotes) * 100 + '%'}"
            >
                {{ quotesCount }} / {{ maxQuotes }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['quotesCount', 'maxQuotes']
}
</script>
<style>

</style>
