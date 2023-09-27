<template>
    <div class="modal fade" v-if="mounted" id="ModalAdd" tabindex="-1" aria-labelledby="modalAddPersonLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalAddPersonLabel">New Person</h5>
                <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <form @submit.prevent="handleOnSubmit">
                <div class="modal-body">
                    <div class="mb-2">
                        <label for="fname" class="col-form-label">First Name:</label>
                        <input type="text" v-model="person.fname" class="form-control" id="fname" required/>
                    </div>
                    <div class="mb-2">
                        <label for="lname" class="col-form-label">Last Name:</label>
                        <input type="text" v-model="person.lname" class="form-control" id="lname" required/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm shadow-0" data-mdb-dismiss="modal">Close</button>
                    <button type="submit" name="submit" data-mdb-dismiss="modal" class="btn btn-primary btn-sm shadow-0">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ModalAdd',
        data(){
            return {
                person: {
                    fname: '',
                    lname: '',
                    id: Math.floor(Math.random() * 999),
                },
                mounted: false
            }
        },
        mounted(){
            this.mounted = true
        },
        methods: {
            handleOnSubmit(){
                this.$emit('submitPerson', this.person)
                this.person.fname = this.person.lname = ""
            }
        }
    }
</script>