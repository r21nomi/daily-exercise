// This is the file to avoid import error like below.
// import A from "~/components/A.vue";
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
