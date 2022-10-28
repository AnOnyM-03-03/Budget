<template>
  <div id="app">
    <FormCard @submitForm="onFormSubmit"/>
    <TotalBalance
    :total="totalBalance"
    :class="balanceColor"
    />
    <BudgetList
    :list="list"
    @deleteItem="onDeleteItem"
    />
  </div>
</template>

<script>
import BudgetList from '@/components/Budget-list'
import TotalBalance from '@/components/Total-balance'
import FormCard from '@/components/Form'
export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormCard,
  },
  data:() => ({
    list:{
        // 1:{
        //     type: "INCOME",
        //     value: 0,
        //     comments: "INCOMING comment",
        //     id: 1
        // },
        // 2:{
        //     type: "OUTCOME",
        //     value: 0,
        //     comments: "OUTCOMING comment",
        //     id: 2
        // },
    },
  }),
  methods:{
    onDeleteItem(id){
        this.$delete(this.list,id)
    },
    onFormSubmit(data){
        const newObject = {
            ...data,
            id:String(Math.random())
        }

        if(newObject.type === "OUTCOME"){
            newObject.value = -newObject.value 
        }
        this.$set(this.list, newObject.id, newObject)
    }
  },
  computed:{

    totalBalance(){
        return Object.values(this.list).reduce((acc,item) => acc + item.value,0)
        },
    balanceColor(){
        let sign = "zero"
        if(this.totalBalance > 0 ){
            sign = "positive"
        }else if(this.totalBalance < 0) {
            sign = "negative"
        }
        return sign
    }
  }
  
}
</script>

<style>

.zero{
    color: black;
}
.positive{
    color:green
}
.negative{
    color:red
}

</style>
