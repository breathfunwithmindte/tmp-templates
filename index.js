const express = require("express");
const app = express();
app.use(express.json());
app.set("view engine", "ejs")
app.listen(5000)
const root = require("path").resolve();
app.use("/public", express.static(root + "/static"));

const setting_pages = [
    { id: "new_user", path: "/admin/users/new", label: "Δημιουργία χρήστη", view_component: "new_user", controller: "" },
    { id: "new_auction", path: "/admin/auctions/new", label: "Δημιουργία δημοπρασίας", view_component: "", controller: "" },
    { id: "new_group", path: "/admin/groups/new", label: "Δημιουργία ομάδας", view_component: "", controller: "" },
    { id: "users", path: "/admin/users/read", label: "Διαχείρηση χρηστών", view_component: "", controller: "" },
    { id: "groups", path: "/admin/users/read", label: "Διαχείρηση ομάδων", view_component: "", controller: "" },
    { id: "auctions", path: "/admin/auctions", label: "Δημοπρασίες", view_component: "", controller: "" },
    { id: "auctions-fields", path: "/admin/auctions/fields/settings", label: "Διαχείρηση πεδίων δημοπρασίας", view_component: "", controller: "" },
    { id: "automations", path: "/admin/automations", label: "Αυτοματισμοί", view_component: "", controller: "" },
    { id: "intergrations", path: "/admin/intergrations", label: "Integrations", view_component: "", controller: "" },
    { id: "settings", path: "/admin/settings", label: "Γενικα Ρυθμίσεις", view_component: "", controller: "" },
    { id: "terms", path: "/admin/terms", label: "Όροι και προυποθέσεις", view_component: "", controller: "" },
    { id: "support-new", path: "/admin/support/new", label: "Αίτηση", view_component: "", controller: "" }
]

app.get("/", (req, res) => {
    res.render("", { gstate: { setting_page: "new_user", setting_pages } })
})

setting_pages.map(i => {
    app.get(i.path, (req, res) => {
        res.render("", { gstate: { setting_page: i, setting_pages } })
    })
})
