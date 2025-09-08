import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrers = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.finishedOrders
);