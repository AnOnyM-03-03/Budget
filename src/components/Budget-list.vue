<template>
    <div class="budget-list-wrap">
        <el-card :header="header">
            <template v-if="!isEmpty">
                <BudgetListItem
                    v-for="(item,prop) in list" 
                    :key="prop"
                    :budgetItem="item"
                    @deleteItem="deleteItem"
                />
            </template>
        <el-alert v-else type="info" :title="emptyTitle" :closable="closable"/>
        </el-card>
    </div>
</template>

<script>
import BudgetListItem from '@/components/Budget-listItem';
    export default{
        name:"BudgetList",

        components:{
            BudgetListItem,
        },

        data:() =>({
            header: "Budget list",
            closable:false,
            emptyTitle:"Empty list",
        }),

        props:{
        list:{
                type: Object,
                default:() => ({})
            }
        },
        methods:{
            deleteItem(id){
                this.$emit('deleteItem',id)
            }
        },
        computed:{
            isEmpty(){
                return !Object.keys(this.list).length
            }
        }
        

    }
</script>

<style scoped>
.budget-list-wrap{
    max-width: 500px;
    margin: auto;
}

</style>