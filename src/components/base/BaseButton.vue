<template>
<!--    <button class="base-button" :class="btnBackground">-->
    <button
        class="base-button"
        :class="btnBackground"
        @click="handleClick">
        <slot>确定</slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        type: {
            type: String
        },
        plain: String
    },
    data () {
        return {

        };
    },
    methods: {
        handleClick (event) {
            this.$emit('click', event);
        }
    },
    computed: {
        btnBackground () {
            const buttonBackground = {
                success: 'base-button--success',
                primary: 'base-button--primary',
                info: ['base-button--info', 'base-button--info_plain'],
                danger: ['base-button--danger', 'base-button--danger_plain']
            };
            return buttonBackground[this.type];
        }
    }
};
</script>

<style scoped lang="less">
.base-button {
    outline: none;
    padding: 12px 20px;
    border-radius: 4px;
    font-size: 14px;
    color: #606266;
    border: 1px solid #dcdfe6;
    background: #fff;
    cursor: pointer;
    line-height: 14px;
    &--success {
        background: #67c23a;
        border-color: #67c23a;
    }
    &--primary {
        background: #409eff;
        border-color: #409eff;
    }
    &--info {
        background: #909399;
        border-color: #909399;
        &_plain {
            color: #909399;
            background: #f4f4f5;
        }
    }
    &--danger {
        background: #f56c6c;
        border-color: #f56c6c;
        &_plain {
            color: #f56c6c;
            background: #fef0f0;
        }
    }
    &+.base-button {
        margin-left: 10px;
    }
}
</style>
