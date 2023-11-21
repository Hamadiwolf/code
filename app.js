document.getElementById('mqttForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const id = document.getElementById('id').value;

    const message = JSON.stringify({ nom, prenom, id });

    const client = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt');
    client.on('connect', function () {
        client.publish('topic/formData', message);
        client.end();
    });
});
