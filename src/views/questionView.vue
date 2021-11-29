<template>
    <div>
        <div>
            <UserSideBar/>
        </div>

        <div class="assessment-body">
            <QuestionPage/>
        </div>
    </div>
</template>

<script>
import UserSideBar from '@/components/UserSideBar.vue'
import QuestionPage from '@/components/QuestionPage.vue'
export default {
    name: 'questionView',
    components: {
       UserSideBar,
       QuestionPage
  }
}
</script>
<style scoped>
.assessment-body {
    margin-left: 300px;
    padding: 80px 70px 50px 50px;
}
</style>