import React from "react";

type RenderLayoutProps = {
  layout: any;
  widgetMap: {
    [key: string]: {
      component: any;
    };
  };
};

type WidgetType = {
  [key: string]: {
    id: number;
    type: string;
    subItems?: Array<WidgetType>;
  };
};

const RenderLayout = ({
  layout,
  widgetMap,
}: RenderLayoutProps): React.JSX.Element[] => {
  const createWidget = (item: { type: string; props?: any }) => {
    const Component = widgetMap[item.type].component;

    return <Component {...item.props} />;
  };

  const parseLayout = (item: WidgetType): React.JSX.Element[] => {
    const key = Object.keys(item)[0];
    const itemObject = item[key];

    if (itemObject.subItems && itemObject.subItems.length > 0) {
      const ContainerComponent = createWidget(item[key]);

      return [
        React.cloneElement(
          ContainerComponent,
          { key },
          itemObject.subItems.map((subItem) => {
            const subItemKey = Object.keys(subItem)[0];
            return (
              <React.Fragment key={subItem[subItemKey].id}>
                {parseLayout(subItem)}
              </React.Fragment>
            );
          })
        ),
      ];
    }

    if (widgetMap[item[key].type]) {
      return [
        <React.Fragment key={item[key].id}>
          {createWidget(item[key])}
        </React.Fragment>,
      ];
    }

    return parseLayout(item);
  };

  return parseLayout(layout);
};

export default RenderLayout;
