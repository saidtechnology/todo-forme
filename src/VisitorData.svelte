<script>
    import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-svelte";
    const { getData, data, isLoading, error } = useVisitorData(
        { extendedResult: true },
        { immediate: false }
    );
</script>

<div>
    <button on:click={() => getData()}>Get visitor data</button>
    {#if $isLoading}
        Loading...
    {/if}
    {#if $error}
        {$error.message}
    {/if}
    {#if $data}
        <pre>{JSON.stringify($data, null, 2)}</pre>
    {/if}
</div>
