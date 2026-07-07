import { memo, Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader/ui/PageLoader";
import { selectUserAuthData } from "~/src/entities/User";

const AppRouter = () => {
    const isAuth = useSelector(selectUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        });
    }, [isAuth]);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routes).map(({ element, path }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <div className="page-wrapper">{element}</div>
                            }
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
