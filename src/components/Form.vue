<template>
    <el-card class="form-card">
        <el-form :model="formData" :rules="rules" label-position="top" ref="addItemForm">
            <el-form-item label="type" prop="type">
                <el-select class="type-select" v-model="formData.type" placeholder="Choose type...">
                    <el-option label="Income" value="INCOME"></el-option>
                    <el-option label="Outcome" value="OUTCOME"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="comments" prop="comments">
                <el-input v-model="formData.comments"></el-input>
            </el-form-item>
            <el-form-item label="value" prop="value">
                <el-input v-model.number="formData.value"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form>
    </el-card>
    
</template>

<script>
    export default{
        name:'FormCard',
        data:() =>({
            formData:{
                Income:{
                type: 'INCOME',
                comments: '',
                value:0
            },
            },
            rules:{
                type:[
                    { required:true, message:"Please select type", trigger: "blur" }
                ],
                comments:[
                    { required:true, message:"Please input comment", trigger: "change" }
                ],
                value:[
                { required:true, message:"Please input comment", trigger: "blur" },
                { type: 'number', message:"Value must be a number", trigger: "change" },
                ]

            }
        }),
        methods:{
            onSubmit(){
                this.$refs.addItemForm.validate((valid) =>{
                    if(valid){
                        this.$emit("submitForm", {...this.formData})
                        this.$refs.addItemForm.resetFields()    
                    }
                    
                })
                
            }
        },



    }
</script>

<style scoped>
.form-card{
    max-width: 500px;
    margin: auto;
}
.type-select{
    width: 100%;
}

</style>