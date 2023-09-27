<template>
    <table class="table table-hover table-responsive">
        <thead>
            <tr>
                <th>No.</th>
                <th>ID #</th>
                <th>Department</th>
                <th></th>
            </tr>
        </thead>
        <tbody v-if="users.length" v-for="(user, i) in users">
            <tr>
                <td>{{ i+=1 }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.department }}</td>
                <td>
                    <button type="button" class="btn btn-sm shadow-0 btn-primary me-2" @click="pusher(user.username)">
                        <i class="fas fa-edit me-2"></i>Edit
                    </button>
                    <button type="button" class="btn btn-sm shadow-0 btn-danger" @click="handleDelete(user.username)">
                        <i class="fas fa-times me-2"></i>Delete
                    </button>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="5" class="text-center">No data available</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: 'Table',
        props: { users: Array },
        methods: {
            pusher(id){
                this.$router.push({ path: '/users/:id', name: 'ViewUser', params: { id }})
            },
            handleDelete(id){
                this.$emit('deleteUser', id)
            }
        }
    }
</script>