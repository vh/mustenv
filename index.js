module.exports = function mustEnv(variable) {
  const value = process.env[variable];
	if (!value) {
    console.error(`${variable} environment variable must be specified.`);
    process.exit(1);
	}

	return value;
}
