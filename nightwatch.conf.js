module.exports = {
    src_folders: ["tests"],
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            webdriver: {
                start_process: true,
                port: 4444,
                server_path: require('chromedriver').path,
            }
        },

        test_workers: {
            enabled: true,
            workers: 'auto'
        },

        safari: {
            desiredCapabilities: {
                browserName: 'safari',
                alwaysMatch: {
                    acceptInsecureCerts: false
                }
            },
            webdriver: {
                port: 4445,
                start_process: true,
                server_path: '/usr/bin/safaridriver'
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            },
            webdriver: {
                start_process: true,
                port: 4446,
                server_path: require('geckodriver').path
            }
        }
    }
}