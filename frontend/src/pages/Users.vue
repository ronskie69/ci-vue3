<template>
    <div class="container p-4">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Users</li>
            </ol>
        </nav>
        <div class="table-wrapper my-5">
            <ToggleModalAdd />
            <div class="clearfix"></div>
            <Table :users="sortedUsers" @deleteUsers="deleteUsers" />
        </div>
        <ModalAdd @submitUsers="addUsers"/>
    </div>
</template>

<script>
    import ToggleModalAdd from '../components/ToggleModalAdd.vue';
    import ModalAdd from '../components/modals/ModalAdd.vue'
    import Table from '../components/Table.vue';

    export default {
        name: 'Users',
        components: { ToggleModalAdd, ModalAdd, Table },
        computed: {
            sortedUsers(){
                return this.$store.getters.getUsers.sort((a,b) => a.username.localeCompare(b.username))
            }
        },
        methods: {
            deleteUsers(id){
                this.$store.dispatch('deleteUsers', id)
            },
            addUsers(Users){
                this.$store.dispatch('addUsers', users)
            }
        }
    }
</script>