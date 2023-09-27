<template>
    <button type="button" ref="modalize" data-mdb-toggle="modal" data-mdb-target="targetModal" class="btn btn-sm float-end btn-primary shadow-0">
        {{ buttonTitle }}
    </button>
</template>

<script>
    export default {
        name: 'ToggleModalEdit',
        props: { target: String || Number },
        data(){
            return {
                buttonTitle: 'Edit User',
                targetModal: this.$props.target
            }
        }
    }
</script>