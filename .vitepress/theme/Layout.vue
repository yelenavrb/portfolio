<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-actions-after>
      <p v-if="frontmatter.hero?.motto" class="hero-motto">
        {{ frontmatter.hero.motto }}
      </p>
    </template>
  </DefaultTheme.Layout>
</template>