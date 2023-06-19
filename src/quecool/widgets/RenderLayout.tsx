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
    subItems: Array<WidgetType>;
  };
};

type WidgetItemType = {
  type: string;
  props?: any;
};

const RenderLayout = ({
  layout,
  widgetMap,
}: RenderLayoutProps): React.JSX.Element[] => {
  const createWidget = (
    item: WidgetItemType
  ): React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null => {
    if (!widgetMap[item.type]) {
      return null;
    }

    const Component = widgetMap[item.type].component;

    if (!Component) {
      return null;
    }

    return <Component {...item.props} />;
  };

  const parseLayout = (item: WidgetType): React.JSX.Element[] => {
    if (!item) {
      return [];
    }

    const key = Object.keys(item)[0];
    const itemObject = item[key];

    // Check if itemObject or subItems are missing or have incorrect structure
    if (!itemObject) {
      return [];
    }

    const hasSubItems = itemObject.subItems && itemObject.subItems.length > 0;

    if (hasSubItems) {
      const ContainerComponent = createWidget(itemObject);

      // Validate createWidget result
      if (!ContainerComponent) {
        return [];
      }

      return [
        React.cloneElement(
          ContainerComponent,
          { key },
          itemObject.subItems.map((subItem) => {
            const subItemKey = Object.keys(subItem)[0];

            // Check if subItem and content exists
            if (!subItem || !subItem[subItemKey]) {
              return null;
            }

            return (
              <React.Fragment key={subItem[subItemKey].id}>
                {parseLayout(subItem)}
              </React.Fragment>
            );
          })
        ),
      ];
    }

    if (widgetMap[itemObject.type]) {
      const widget = createWidget(itemObject);

      // Validate createWidget result
      if (!widget) {
        return [];
      }

      return [<React.Fragment key={itemObject.id}>{widget}</React.Fragment>];
    }

    return [];
  };

  return parseLayout(layout);
};

export default RenderLayout;
