<template>
    <div id="main">
        <header>
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    <img src="https://semantic-ui.com/images/logo.png" alt="">
                    <a class="active item">
                        Home
                    </a>
                    <a class="item">
                        Messages
                    </a>
                    <a class="item">
                        Friends
                    </a>
                </div>
            </div>
        </header>

        <main>
            <div class="ui segment">
                <div class="ui active dimmer">
                    <div class="ui large text loader">Loading</div>
                </div>
                <img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" alt="">
                <img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" alt="">
                <img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" alt="">
                <img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" alt="">
                <img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" alt="">
                <img src="https://semantic-ui.com/images/wireframe/short-paragraph.png" alt="">
            </div>
        </main>
    </div>
</template>

<style scoped>
    header > div:first-of-type {
        border-radius: 0;
    }

    header img:first-of-type {
        width: 30px;
        height: 30px;
        margin: auto 30px auto 0;
    }
</style>