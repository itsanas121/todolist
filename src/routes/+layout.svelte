<script lang="ts">
  import "../app.postcss";
  // @ts-ignore
  import { pwaInfo } from "virtual:pwa-info";

  // Floating UI for Popups

  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  import { initializeStores, Modal } from "@skeletonlabs/skeleton";

  initializeStores();

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifestLink}
</svelte:head>

<Modal buttonPositive="variant-filled-error" />
<slot />
