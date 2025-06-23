<template>
  <div class="fake-code-container">
    <p id='fake-code-p' class="text" data-text="/nstruct group_info init_groups = { .usage = ATOMIC_INIT(2) }; /n /nstruct group_info *groups_alloc(int gidsetsize){ /n    struct group_info *group_info; /n    int nblocks; /n    int i; /n /n /n    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; /n    /* Make sure we always allocate at least one indirect block pointer */ /n    nblocks = nblocks ? : 1; /n    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); /n    if (!group_info) /n        return NULL; /n /n    group_info->ngroups = gidsetsize; /n    group_info->nblocks = nblocks; /n    atomic_set(&group_info->usage, 1); /n /n    if (gidsetsize <= NGROUPS_SMALL) /n        group_info->blocks[0] = group_info->small_block; /n    else { /n        for (i = 0; i < nblocks; i++) { /n            gid_t *b; /n            b = (void *)__get_free_page(GFP_USER); /n            if (!b) /n                goto out_undo_partial_alloc; /n            group_info->blocks[i] = b; /n        } /n    } /n    return group_info; /n /n /nout_undo_partial_alloc: /n /n    while (--i >= 0) { /n /n        free_page((unsigned long)group_info->blocks[i]); /n /n    } /n /n    kfree(group_info); /n /n    return NULL; /n /n} /n /n /n /nEXPORT_SYMBOL(groups_alloc); /n /n /n /nvoid groups_free(struct group_info *group_info) /n /n{ /n /n    if (group_info->blocks[0] != group_info->small_block) { /n /n        int i; /n /n        for (i = 0; i < group_info->nblocks; i++) /n /n/nstruct group_info init_groups = { .usage = ATOMIC_INIT(2) }; /n /nstruct group_info *groups_alloc(int gidsetsize){ /n    struct group_info *group_info; /n    int nblocks; /n    int i; /n /n /n    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; /n    /* Make sure we always allocate at least one indirect block pointer */ /n    nblocks = nblocks ? : 1; /n    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); /n    if (!group_info) /n        return NULL; /n /n    group_info->ngroups = gidsetsize; /n    group_info->nblocks = nblocks; /n    atomic_set(&group_info->usage, 1); /n /n    if (gidsetsize <= NGROUPS_SMALL) /n        group_info->blocks[0] = group_info->small_block; /n    else { /n        for (i = 0; i < nblocks; i++) { /n            gid_t *b; /n            b = (void *)__get_free_page(GFP_USER); /n            if (!b) /n                goto out_undo_partial_alloc; /n            group_info->blocks[i] = b; /n        } /n    } /n    return group_info; /n /n /nout_undo_partial_alloc: /n /n    while (--i >= 0) { /n /n        free_page((unsigned long)group_info->blocks[i]); /n /n    } /n /n    kfree(group_info); /n /n    return NULL; /n /n} /n /n /n /nEXPORT_SYMBOL(groups_alloc); /n /n /n /nvoid groups_free(struct group_info *group_info) /n /n{ /n /n    if (group_info->blocks[0] != group_info->small_block) { /n /n        int i; /n /n        for (i = 0; i < group_info->nblocks; i++) /n /n/nstruct group_info init_groups = { .usage = ATOMIC_INIT(2) }; /n /nstruct group_info *groups_alloc(int gidsetsize){ /n    struct group_info *group_info; /n    int nblocks; /n    int i; /n /n /n    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK; /n    /* Make sure we always allocate at least one indirect block pointer */ /n    nblocks = nblocks ? : 1; /n    group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER); /n    if (!group_info) /n        return NULL; /n /n    group_info->ngroups = gidsetsize; /n    group_info->nblocks = nblocks; /n    atomic_set(&group_info->usage, 1); /n /n    if (gidsetsize <= NGROUPS_SMALL) /n        group_info->blocks[0] = group_info->small_block; /n    else { /n        for (i = 0; i < nblocks; i++) { /n            gid_t *b; /n            b = (void *)__get_free_page(GFP_USER); /n            if (!b) /n                goto out_undo_partial_alloc; /n            group_info->blocks[i] = b; /n        } /n    } /n    return group_info; /n /n /nout_undo_partial_alloc: /n /n    while (--i >= 0) { /n /n        free_page((unsigned long)group_info->blocks[i]); /n /n    } /n /n    kfree(group_info); /n /n    return NULL; /n /n} /n /n /n /nEXPORT_SYMBOL(groups_alloc); /n /n /n /nvoid groups_free(struct group_info *group_info) /n /n{ /n /n    if (group_info->blocks[0] != group_info->small_block) { /n /n        int i; /n /n        for (i = 0; i < group_info->nblocks; i++) /n /n echo('Hello World');"></p>
  </div>
</template>


<script lang="ts" setup>
  import { onMounted } from "vue";
  import {add_script} from "@/utils/AppendCSSJS";
  onMounted(()=>{
    add_script('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
    setTimeout(() => {
      add_script('/src/components/Animations/FakeCode/fakeCode.js');
    }, 1000)

  })
</script>


<style scoped lang="scss">
.fake-code-container{
  width: 800px;
  height: 600px;
}


span {
  min-width: 5px;
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.85em;
  letter-spacing: 1.5px;
  color: #FFF;
}

body {
  background: #111;
  position: relative;
}

body, html {
  height: 100%;
}

.text {
  overflow: hidden;
  height: auto;
}
</style>