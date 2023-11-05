import { FC } from "react"
import { Route, Routes as RouteWrapper } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { HomePage } from "../pages/home";

export const Routes: FC = () => {
  return (
    <RouteWrapper>
      <Route path={ROUTES.Home} element={<HomePage />} />
    </RouteWrapper>
  )
}