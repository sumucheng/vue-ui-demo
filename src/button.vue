<template>
    <button class='g-button' v-bind:class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" :name="icon" v-if="icon && !loading"></g-icon>
        <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>k
</template>

<script>
    import Icon from './icon'
    export default {
        // props: ['icon', 'iconPosition']
        components:{
            'g-icon':Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) { //属性检查器
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);  border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;

        &:hover { border-color: var(--border-color-hover); }
        &:active { border-color: var(--button-active-bg); }
        &:focus { outline: none; }

        > .icon { order: 1; margin-right: .2em; }
        > .content { order: 2; }

        &.icon-right {
            > .icon { order: 2;margin-right: 0;  margin-left: 0.2em;}
            > .content { order: 1; }}

        .loading { animation: spin 2s infinite linear; }
    }
</style>