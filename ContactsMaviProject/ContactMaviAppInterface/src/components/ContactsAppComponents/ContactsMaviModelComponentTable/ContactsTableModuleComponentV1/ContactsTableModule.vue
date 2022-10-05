<template lang="pug">
.container
  h2.center Tabla De Contactos
  ui5-table#table(mode="SingleSelect")
    ui5-table-column(slot='columns' style='width: 12rem')
      span(style='line-height: 1.4rem') Product
    ui5-table-column(slot='columns' min-width='800')
      span(style='line-height: 1.4rem') Supplier
    ui5-table-column(slot='columns' min-width='600' popin-text='Dimensions' demand-popin='')
      span(style='line-height: 1.4rem') Dimensions
    ui5-table-column(slot='columns' min-width='600' popin-text='Weight' demand-popin='')
      span(style='line-height: 1.4rem') Weight
    ui5-table-column(slot='columns')
      span(style='line-height: 1.4rem') Price
    ui5-table-row
      ui5-table-cell Notebook Basic 15HT-1000
      ui5-table-cell Very Best Screens
      ui5-table-cell 30 x 18 x 3cm
      ui5-table-cell 4.2KG
      ui5-table-cell 956EUR
    ui5-table-row
      ui5-table-cell Notebook Basic 17HT-1001
      ui5-table-cell Very Best Screens
      ui5-table-cell 29 x 17 x 3.1cm
      ui5-table-cell 4.5KG
      ui5-table-cell 1249EUR
    ui5-table-row
      ui5-table-cell Notebook Basic 18HT-1002
      ui5-table-cell Very Best Screens
      ui5-table-cell 28 x 19 x 2.5cm
      ui5-table-cell 4.2KG
      ui5-table-cell 1570EUR
</template>

<script lang="ts">
import { defineComponent } from "vue"
import "@ui5/webcomponents/dist/Table.js"
import "@ui5/webcomponents/dist/TableCell.js"
import "@ui5/webcomponents/dist/TableColumn.js"
import "@ui5/webcomponents/dist/TableRow.js"

export default defineComponent({
    data: function(){
        return {

        };
    }
});
</script>