<template>
  <div id="app">
    <TotalBalance
    :total="totalBalance"
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
export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
  },
  data:() => ({
    list:{
        1:{
            type: "INCOME",
            value: 100,
            comments: "INCOMING comment",
            id: 1
        },
        2:{
            type: "OUTCOME",
            value: -50,
            comments: "OUTCOMING comment",
            id: 2
        },
    }
  }),
  methods:{
    onDeleteItem(id){
        this.$delete(this.list,id)
    }
  },
  computed:{
    totalBalance(){
        return Object.values(this.list).reduce((acc,item) => acc + item.value,0)
    }
  }
}
</script>

<style>

</style>
