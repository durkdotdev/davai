<script lang="ts">
  import { Core, InputConfigType } from "@davai/core";

  import { core } from "../../store";

  export let inputConfig: InputConfigType = {};

  core.set(new Core(inputConfig));
  core.subscribe((value) => {
    if (value && value.stitches)
      value.stitches.globalCss({
        body: {
          background: "$base"
        }
      })();
  });
</script>

<slot />
