var DOCUMENTATION_VERSIONS = {
  DEFAULTS: { has_targets: false,
              supported_targets: [ "esp32" ]
            },
  VERSIONS: [
    { name: "latest", has_targets: true, supported_targets: [ "esp32", "esp32s3", "esp32c3", "esp32c2", "esp32c6" ] },
  ],
  IDF_TARGETS: [
     { text: "ESP32", value: "esp32" },
     { text: "ESP32-S3", value: "esp32s3" },
     { text: "ESP32-C3", value: "esp32c3" },
     { text: "ESP32-C2", value: "esp32C2" },
     { text: "ESP32-C6", value: "esp32C6" },
  ]
};
