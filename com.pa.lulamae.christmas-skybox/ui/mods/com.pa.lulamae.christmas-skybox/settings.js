try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Christmas Skybox by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.christmas-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}