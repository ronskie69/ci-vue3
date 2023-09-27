<template>
    <div class="container p-4">
        <h3>
            <a href="/users">
                <i class="fas fa-chevron-left me-2"></i>
            </a>
            {{ id }}
        </h3>
        <div class="card shadow-0 border mt-4">
            <div class="card-body">
                <h6 class="line-before">Update Records</h6>
                <div class="form-wrapper mt-4">
                    <form class="form" @submit.prevent="handleOnSubmit">
                        <div class="form-group mb-4">
                            <label>ID #:</label>
                            <input type="text" name="username" id="username" v-model="username" class="form-control">
                        </div>
                        <div class="form-group mb-4">
                            <label>Department:</label>
                            <input type="text" name="department" id="department" v-model="department" class="form-control">
                        </div>
                        <button class="btn btn-success shadow-0" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ViewUser',
        data(){
            return {
                username: '',
                department: '',
            }
        },
        mounted(){
            this.id = this.$router.currentRoute.value.params.id

            this.username = this.$store.getters.getUsersById(this.id)[0].username
            this.department = this.$store.getters.getUsersById(this.id)[0].department
        },
        methods: {
            handleOnSubmit(){

                console.log(this.username, this.department, this.id)
                this.$store.dispatch('editUser', { username: this.username, department: this.department, id: this.id })

                this.$router.back()
            }
        }
    }
</script>

<style scoped>
.line-before {
    padding-left: 10px;
    position: relative;
}
.line-before::before {
    content: "";
    position: absolute;
    width: 5px;
    left: 0;
    height: 100%;
    background-color: #3b71ca;
}
</style>