const { getDefaultConfig } = require('@expo/metro-config');
const mergeConfig = require('metro-config').mergeConfig;

const baseConfig = getDefaultConfig(__dirname);

// ✅ svg 설정 추가
const config = {
    transformer: {
        assetPlugins: ['expo-asset/tools/hashAssetFiles'],
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        assetExts: baseConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
        sourceExts: [...baseConfig.resolver.sourceExts, 'svg'],
    },
};

module.exports = mergeConfig(baseConfig, config);