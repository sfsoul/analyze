<template>
    <div class="home">
        <el-button type="success" :autofocus="isAutoFocus">成功按钮</el-button>
        <el-button type="primary" plain>朴素按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <h3 class="base-h3">BaseButton ===> 基础用法</h3>
        <ul class="base-button-list">
            <li class="base-button-item">
                <base-button>默认按钮样式</base-button>
                <base-button type="success">成功按钮</base-button>
                <base-button type="primary">主要按钮</base-button>
            </li>
            <li class="base-button-item">
                <base-button type="info" plain>信息按钮</base-button>
                <base-button type="danger" plain>危险按钮</base-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {

    },
    data () {
        return {
            message: 'Hello world',
            isAutoFocus: true
        };
    }
};
</script>
<style lang="less" scoped>
.home {
    .base-h3 {
        margin: 25px 0;
    }
    .base-button-list {
        .base-button-item {
            margin-bottom: 15px;
        }
    }
}
</style>
