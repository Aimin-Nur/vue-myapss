<script setup>
const isLoading = true
let name = "Start"
const ButtonAttr = {
    disabled: true,
    class: 'text-3xl bg-black',
    id : 1
}

const renderIsLoading = () => {
    if (isLoading) {
        return "loading"
    } else {
        return 'Submit'
    }
}
</script>

<template>
    <div>
       <button v-bind="ButtonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button>
       <button v-bind="ButtonAttr">{{ renderIsLoading() }}</button>
    </div>
</template>

<style scoped></style>