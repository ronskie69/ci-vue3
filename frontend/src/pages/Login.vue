<template>
    <div class="container p-4">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Inquire</li>
            </ol>
        </nav>
        <div class="card p-4 shadow-0 border">
            <div class="card-header">
                <h6 class="line-before">Enter Data to Inquire Department</h6>
            </div>
            <form @submit.prevent="handleOnSubmit">
                <div class="card-body">
                    <div class="form-group mb-2">
                        <label>Enter Username:</label>
                        <input type="text" name="username" id="username" v-model="username" placeholder="Enter Username" class="form-control" required>
                    </div>
                    <div class="form-group mb-2">
                        <label>Enter Password:</label>
                        <input type="password" name="password" id="password" v-model="password" placeholder="Enter Password" class="form-control" required>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-inline-flex float-end">
                        <button class="btn btn-primary d-block ms-auto btn-sm shadow-0 me-2" name="submit" type="submit">
                            Submit
                        </button>
                        <button v-if="CurrentUser.username" class="btn btn-primary d-block ms-auto btn-sm shadow-0" name="none" type="button" @click="handleReset">
                            Reset
                        </button>
                    </div>
                </div>
                <div class="clearfix"></div>
            </form>
            <div class="block p-2" v-if="CurrentUser.username">
                <h6>Username: {{ CurrentUser.username }}</h6>
                <p>Department: {{ CurrentUser.department }}</p>
                <p>Level: {{ CurrentUser.user_level }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'Login',
        data(){
            return {
                username: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters({ CurrentUser: 'getData' })
        },
        methods: {
            handleOnSubmit(){
                this.$store.dispatch('inquireDepartment', { username: this.username, password: this.password })                
                // this.$router.push({ path: '/users/'})
            },
            handleReset(){
                window.location.reload()
            }
        }
    }
</script>

<style scoped>
.line-before {
    padding-left: 20px;
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