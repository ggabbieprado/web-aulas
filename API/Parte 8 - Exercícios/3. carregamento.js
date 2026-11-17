btn.disabled = true;

try {
    // ... fetch ...
} catch (erro) {
    // ...
} finally {
    btn.disabled = false;
}