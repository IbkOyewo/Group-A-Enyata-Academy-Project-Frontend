<template>

<div>
        <div class="container">
            <span class="float-start">
                <button class="button" type="button" @click.prevent="showOffcanvasMenu()">
                    classic
                </button>
            </span>
        </div>
        <div class="offcanvas offcanvas-end" :class="showMenu ? 'show' : ''" tabindex="-1" :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="">Offcanvas with backdrop</h5>
                <button type="button" class="btn-close text-reset" @click.prevent="showOffcanvasMenu()"></button>
            </div>
            <div class="offcanvas-body">
                <p>.....</p>
            </div>
        </div>
  
</div>
  
</template>

<script>
  export default {
    data() {
      return {
          showMenu: false
        }
    },
    methods: {
        showOffcanvasMenu(){
            this.showMenu ? this.showMenu = false : this.showMenu = true;
        }
    }
  }
</script>