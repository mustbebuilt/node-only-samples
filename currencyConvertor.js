process.stdout.write("Pounds: ");
process.stdin.on('data', function(data){
  console.dir(data);
  var pounds = Number(data);
  var euros = pounds * 0.85;
  process.stdout.write("\n");
  process.stdout.write(`Euros: ${euros}\n`);
  process.stdout.write("\n");
  process.exit();
})