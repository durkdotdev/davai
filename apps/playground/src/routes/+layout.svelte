<script lang="ts">
  import { Provider } from "@davai/svelte";
</script>

<Provider inputConfig="{{ theme: { colors: { test: '#ccc' } } }}">
  <slot />
</Provider>
