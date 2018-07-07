function calculateValues() {
    var samples = document.getElementById('samples').value;
    var badness_rate = document.getElementById('badness_rate').value / 100;
    var accuracy = document.getElementById('accuracy').value / 100;

    console.log("samples: " + samples);
    console.log("badness_rate: " + badness_rate);
    console.log("accuracy: " + accuracy);

    var bad_samples = samples * badness_rate;
    var good_samples = samples * (1 - badness_rate);
    
    var tp = bad_samples * accuracy;
    var fn = bad_samples - tp;
    var tn = good_samples * accuracy;
    var fp = good_samples - tn;

    document.getElementById("fn").innerText = fn;
    document.getElementById("fp").innerText = fp;
    document.getElementById("tn").innerText = tn;
    document.getElementById("tp").innerText = tp;
}