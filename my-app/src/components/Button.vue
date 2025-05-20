<script setup>
const isLoading = false
let name = "Start"
const ButtonAttr = {
    type: 'button',
    disabled: isLoading,
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

const url = {
    attr: 'href',
    link: '/home'
}
</script>

<template>
    <div>
        <a :[url.attr]="url.link">
            <button v-bind="ButtonAttr" :id="`id-${1}`">{{ isLoading ? 'Loading' : 'Submit' }}</button>
        </a>
       <button v-bind="ButtonAttr">{{ renderIsLoading() }}</button>
    </div>
</template>

<style scoped></style>