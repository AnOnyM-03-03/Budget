<template>
  <div id="app">
    <BudgetList
    :list="list"
    />
  </div>
</template>

<script>
import BudgetList from '@/components/Budget-list'
export default {
  name: 'App',
  components: {
    BudgetList,
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
}
</script>

<style>

</style>
