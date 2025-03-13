module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    fs: false, // Disable fs since it's not available in the browser
  };

  return config;
};
