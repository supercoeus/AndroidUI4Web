declare module android.util {
    class SparseMap<K, T> {
        map: Map<K, T>;
        constructor(initialCapacity?: number);
        clone(): SparseMap<K, T>;
        get(key: K, valueIfKeyNotFound?: T): T;
        delete(key: K): void;
        remove(key: K): void;
        removeAt(index: number): void;
        removeAtRange(index: number, size?: number): void;
        put(key: K, value: T): void;
        size(): number;
        keyAt(index: number): K;
        valueAt(index: number): T;
        setValueAt(index: number, value: T): void;
        indexOfKey(key: K): number;
        indexOfValue(value: T): number;
        clear(): void;
        append(key: any, value: any): void;
    }
}
declare module android.util {
    class SparseArray<T> extends SparseMap<number, T> {
    }
}
declare module android.util {
    class Log {
        static View_DBG: boolean;
        static VelocityTracker_DBG: boolean;
        static DBG_DrawableContainer: boolean;
        static DBG_StateListDrawable: boolean;
        static VERBOSE: number;
        static DEBUG: number;
        static INFO: number;
        static WARN: number;
        static ERROR: number;
        static ASSERT: number;
        static PriorityString: string[];
        static getPriorityString(priority: number): string;
        static v(tag: string, msg: string, tr?: Error): void;
        static d(tag: string, msg: string): void;
        static i(tag: string, msg: string, tr?: Error): void;
        static w(tag: string, msg: string, tr?: Error): void;
        static e(tag: string, msg: string, tr?: Error): void;
        private static getLogMsg(priority, tag, msg);
    }
}
declare module java.lang {
    class StringBuilder {
        array: Array<string>;
        constructor();
        constructor(capacity: number);
        constructor(str: string);
        length(): number;
        append(a: any): StringBuilder;
        deleteCharAt(index: number): StringBuilder;
        replace(start: number, end: number, str: string): StringBuilder;
        setLength(length: number): void;
        toString(): string;
    }
}
declare module android.graphics {
    import StringBuilder = java.lang.StringBuilder;
    class Rect {
        left: number;
        top: number;
        right: number;
        bottom: number;
        constructor();
        constructor(rect: Rect);
        constructor(left: number, top: number, right: number, bottom: number);
        equals(r: Rect): boolean;
        toString(): string;
        toShortString(sb?: StringBuilder): string;
        flattenToString(): string;
        static unflattenFromString(str: string): Rect;
        isEmpty(): boolean;
        width(): number;
        height(): number;
        centerX(): number;
        centerY(): number;
        exactCenterX(): number;
        exactCenterY(): number;
        setEmpty(): void;
        set(rect: Rect): any;
        set(left: any, top: any, right: any, bottom: any): any;
        offset(dx: any, dy: any): void;
        offsetTo(newLeft: any, newTop: any): void;
        inset(dx: any, dy: any): void;
        contains(x: number, y: number): boolean;
        contains(left: number, top: number, right: number, bottom: number): boolean;
        contains(r: Rect): boolean;
        intersect(rect: Rect): boolean;
        intersect(left: number, top: number, right: number, bottom: number): boolean;
        intersects(rect: Rect): boolean;
        intersects(left: number, top: number, right: number, bottom: number): boolean;
        union(rect: Rect): any;
        union(x: number, y: number): any;
        union(left: number, top: number, right: number, bottom: number): any;
        sort(): void;
        scale(scale: number): void;
    }
}
declare module android.graphics {
    class PixelFormat {
        static UNKNOWN: number;
        static TRANSLUCENT: number;
        static TRANSPARENT: number;
        static OPAQUE: number;
        static RGBA_8888: number;
        static RGBX_8888: number;
        static RGB_888: number;
        static RGB_565: number;
    }
}
declare module java.lang.ref {
    class WeakReference<T> {
        weakMap: WeakMap<any, T>;
        constructor(referent: T);
        get(): T;
        set(value: T): void;
        clear(): void;
    }
}
declare module java.lang {
    interface Runnable {
        run(): any;
    }
}
declare module java.lang {
    class System {
        static out: {
            println(any?: any): void;
            print(any: any): void;
        };
        static currentTimeMillis(): number;
        static arraycopy(src: any[], srcPos: number, dest: any[], destPos: number, length: number): void;
    }
}
declare module android.util {
    class StateSet {
        static WILD_CARD: Array<number>;
        static NOTHING: Array<number>;
        static isWildCard(stateSetOrSpec: Array<number>): boolean;
        static stateSetMatches(stateSpec: Array<number>, stateSetOrState: Array<number> | number): boolean;
        private static _stateSetMatches_single(stateSpec, state);
        static trimStateSet(states: Array<number>, newSize: number): Array<number>;
    }
}
declare module android.util {
    class Pools {
        a: Pools.SimplePool<string>;
    }
    module Pools {
        interface Pool<T> {
            acquire(): T;
            release(instance: T): boolean;
        }
        class SimplePool<T> implements Pools.Pool<T> {
            mPool: Array<T>;
            mPoolSize: number;
            constructor(maxPoolSize: number);
            acquire(): T;
            release(instance: T): boolean;
            private isInPool(instance);
        }
        class SynchronizedPool<T> extends SimplePool<T> {
        }
    }
}
declare module android.graphics {
    class Color {
        static BLACK: number;
        static DKGRAY: number;
        static GRAY: number;
        static LTGRAY: number;
        static WHITE: number;
        static RED: number;
        static GREEN: number;
        static BLUE: number;
        static YELLOW: number;
        static CYAN: number;
        static MAGENTA: number;
        static TRANSPARENT: number;
        static alpha(color: number): number;
        static red(color: number): number;
        static green(color: number): number;
        static blue(color: number): number;
        static rgb(red: number, green: number, blue: number): number;
        static argb(alpha: number, red: number, green: number, blue: number): number;
        static rgba(red: number, green: number, blue: number, alpha: number): number;
        static parseColor(colorString: string): number;
        static toARGBHex(color: number): string;
        static toRGBAFunc(color: number): string;
        static getHtmlColor(color: string): number;
        static sColorNameMap: Map<String, number>;
    }
}
declare module android.graphics {
    class Paint {
        private static FontMetrics_Size_Ascent;
        private static FontMetrics_Size_Bottom;
        private static FontMetrics_Size_Descent;
        private static FontMetrics_Size_Leading;
        private static FontMetrics_Size_Top;
        static DIRECTION_LTR: number;
        static DIRECTION_RTL: number;
        static CURSOR_AFTER: number;
        static CURSOR_AT_OR_AFTER: number;
        static CURSOR_BEFORE: number;
        static CURSOR_AT_OR_BEFORE: number;
        static CURSOR_AT: number;
        private static CURSOR_OPT_MAX_VALUE;
        static ANTI_ALIAS_FLAG: number;
        static FILTER_BITMAP_FLAG: number;
        static DITHER_FLAG: number;
        static UNDERLINE_TEXT_FLAG: number;
        static STRIKE_THRU_TEXT_FLAG: number;
        static FAKE_BOLD_TEXT_FLAG: number;
        static LINEAR_TEXT_FLAG: number;
        static SUBPIXEL_TEXT_FLAG: number;
        static DEV_KERN_TEXT_FLAG: number;
        static LCD_RENDER_TEXT_FLAG: number;
        static EMBEDDED_BITMAP_TEXT_FLAG: number;
        static AUTO_HINTING_TEXT_FLAG: number;
        static VERTICAL_TEXT_FLAG: number;
        static DEFAULT_PAINT_FLAGS: number;
        private mTextStyle;
        private mColor;
        private mAlpha;
        private mStrokeWidth;
        private align;
        private mStrokeCap;
        private mStrokeJoin;
        private textSize;
        private mFlag;
        hasShadow: boolean;
        shadowDx: number;
        shadowDy: number;
        shadowRadius: number;
        shadowColor: number;
        drawableState: number[];
        constructor(flag?: number);
        set(src: Paint): void;
        private setClassVariablesFrom(paint);
        getStyle(): Paint.Style;
        setStyle(style: Paint.Style): void;
        getFlags(): number;
        setFlags(flags: number): void;
        getTextScaleX(): number;
        setTextScaleX(scaleX: number): void;
        getColor(): number;
        setColor(color: number): void;
        setARGB(a: number, r: number, g: number, b: number): void;
        getAlpha(): number;
        setAlpha(alpha: number): void;
        getStrokeWidth(): number;
        setStrokeWidth(width: number): void;
        getStrokeCap(): Paint.Cap;
        setStrokeCap(cap: Paint.Cap): void;
        getStrokeJoin(): Paint.Join;
        setStrokeJoin(join: Paint.Join): void;
        setAntiAlias(enable: boolean): void;
        isAntiAlias(): boolean;
        setShadowLayer(radius: number, dx: number, dy: number, color: number): void;
        clearShadowLayer(): void;
        getTextAlign(): Paint.Align;
        setTextAlign(align: Paint.Align): void;
        getTextSize(): number;
        setTextSize(textSize: number): void;
        ascent(): number;
        descent(): number;
        getFontMetricsInt(fmi: Paint.FontMetricsInt): number;
        getFontMetrics(metrics: Paint.FontMetrics): number;
        private static _measureTextContext;
        private static _measureTextSize;
        measureText(text: string, index?: number, count?: number): number;
        getTextWidths_count(text: string, index: number, count: number, widths: number[]): number;
        getTextWidths_end(text: string, start: number, end: number, widths: number[]): number;
        getTextWidths_2(text: string, widths: number[]): number;
        getTextRunAdvances_count(chars: string, index: number, count: number, contextIndex: number, contextCount: number, flags: number, advances: number[], advancesIndex: number): number;
        getTextRunAdvances_end(text: string, start: number, end: number, contextStart: number, contextEnd: number, flags: number, advances: number[], advancesIndex: number): number;
        getTextRunCursor_len(text: string, contextStart: number, contextLength: number, flags: number, offset: number, cursorOpt: number): number;
        getTextRunCursor_end(text: string, contextStart: number, contextEnd: number, flags: number, offset: number, cursorOpt: number): number;
        _setToCanvasContent(context: CanvasRenderingContext2D): void;
    }
    module Paint {
        enum Align {
            LEFT = 0,
            CENTER = 1,
            RIGHT = 2,
        }
        class FontMetrics {
            top: number;
            ascent: number;
            descent: number;
            bottom: number;
            leading: number;
        }
        class FontMetricsInt {
            top: number;
            ascent: number;
            descent: number;
            bottom: number;
            leading: number;
            toString(): string;
        }
        enum Style {
            FILL = 0,
            STROKE = 1,
            FILL_AND_STROKE = 2,
        }
        enum Cap {
            BUTT = 0,
            ROUND = 1,
            SQUARE = 2,
        }
        enum Join {
            MITER = 0,
            ROUND = 1,
            BEVEL = 2,
        }
    }
}
declare module android.graphics {
    class Path {
        reset(): void;
    }
}
declare module android.graphics {
    class Point {
        x: number;
        y: number;
        constructor();
        constructor(x: number, y: number);
        constructor(src: Point);
        set(x: number, y: number): void;
        negate(): void;
        offset(dx: number, dy: number): void;
        equals(x: number, y: number): boolean;
        equals(o: any): boolean;
        toString(): String;
    }
}
declare module android.graphics {
    class RectF extends Rect {
    }
}
declare module android.graphics {
    import StringBuilder = java.lang.StringBuilder;
    import RectF = android.graphics.RectF;
    class Matrix {
        static MSCALE_X: number;
        static MSKEW_X: number;
        static MTRANS_X: number;
        static MSKEW_Y: number;
        static MSCALE_Y: number;
        static MTRANS_Y: number;
        static MPERSP_0: number;
        static MPERSP_1: number;
        static MPERSP_2: number;
        private static MATRIX_SIZE;
        private mValues;
        static IDENTITY_MATRIX: Matrix;
        constructor();
        constructor(src: Matrix);
        constructor(values: number[]);
        isIdentity(): boolean;
        hasPerspective(): boolean;
        rectStaysRect(): boolean;
        set(src: Matrix): void;
        equals(obj: any): boolean;
        hashCode(): number;
        reset(): void;
        setTranslate(dx: number, dy: number): void;
        setScale(sx: number, sy: number, px?: number, py?: number): void;
        setRotate(degrees: number, px?: number, py?: number): void;
        setSinCos(sinValue: number, cosValue: number, px?: number, py?: number): void;
        setSkew(kx: number, ky: number, px?: number, py?: number): void;
        setConcat(a: Matrix, b: Matrix): boolean;
        preTranslate(dx: number, dy: number): boolean;
        preScale(sx: number, sy: number, px?: number, py?: number): boolean;
        preRotate(degrees: number, px?: number, py?: number): boolean;
        preSkew(kx: number, ky: number, px?: number, py?: number): boolean;
        preConcat(other: Matrix): boolean;
        postTranslate(dx: number, dy: number): boolean;
        postScale(sx: number, sy: number, px?: number, py?: number): boolean;
        postRotate(degrees: number, px?: number, py?: number): boolean;
        postSkew(kx: number, ky: number, px?: number, py?: number): boolean;
        postConcat(other: Matrix): boolean;
        setRectToRect(src: RectF, dst: RectF, stf: Matrix.ScaleToFit): boolean;
        private static checkPointArrays(src, srcIndex, dst, dstIndex, pointCount);
        mapPoints(dst: number[], dstIndex?: number, src?: number[], srcIndex?: number, pointCount?: number): void;
        mapVectors(dst: number[], dstIndex?: number, src?: number[], srcIndex?: number, ptCount?: number): void;
        mapRect(dst: RectF, src?: RectF): boolean;
        mapRadius(radius: number): number;
        getValues(values: number[]): void;
        setValues(values: number[]): void;
        toString(): string;
        toShortString(sb: StringBuilder): void;
        private postTransform(matrix);
        private preTransform(matrix);
        private static getPointLength(src, index);
        static multiply(dest: number[], a: number[], b: number[]): void;
        static getTranslate(dx: number, dy: number): number[];
        static setTranslate(dest: number[], dx: number, dy: number): number[];
        static getScale(sx: number, sy: number, px?: number, py?: number): number[];
        static getRotate_1(degrees: number): number[];
        static getRotate_2(sin: number, cos: number): number[];
        static setRotate_1(dest: number[], degrees: number): number[];
        static setRotate_2(dest: number[], sin: number, cos: number): number[];
        static getRotate_3(degrees: number, px: number, py: number): number[];
        static getSkew(kx: number, ky: number, px?: number, py?: number): number[];
        private static reset(mtx);
        private static kIdentity_Mask;
        private static kTranslate_Mask;
        private static kScale_Mask;
        private static kAffine_Mask;
        private static kPerspective_Mask;
        private static kRectStaysRect_Mask;
        private static kUnknown_Mask;
        private static kAllMasks;
        private static kTranslate_Shift;
        private static kScale_Shift;
        private static kAffine_Shift;
        private static kPerspective_Shift;
        private static kRectStaysRect_Shift;
        private computeTypeMask();
    }
    module Matrix {
        enum ScaleToFit {
            FILL = 0,
            START = 1,
            CENTER = 2,
            END = 3,
        }
    }
}
declare module androidui.image {
    class PlatformImage {
        private platformImage;
        src: string;
        onload: () => void;
        onerror: () => void;
        width: number;
        height: number;
        private getImageRatio();
        constructor(src: string, onload?: () => void, onerror?: () => void);
        protected init(src: string, onload?: () => void, onerror?: () => void): void;
        getImage(): any;
    }
}
declare module android.graphics {
    import Rect = android.graphics.Rect;
    import PlatformImage = androidui.image.PlatformImage;
    class Canvas {
        private static FullRect;
        private mCanvasElement;
        private mWidth;
        private mHeight;
        private _mCanvasContent;
        private _saveCount;
        mCurrentClip: Rect;
        private mClipStateMap;
        private static TempMatrixValue;
        static DIRECTION_LTR: number;
        static DIRECTION_RTL: number;
        private static sRectPool;
        private static obtainRect(copy?);
        private static recycleRect(...rects);
        constructor(width: number, height: number);
        protected init(): void;
        recycle(): void;
        canvasElement: HTMLCanvasElement;
        getHeight(): number;
        getWidth(): number;
        translate(dx: number, dy: number): void;
        scale(sx: number, sy: number, px?: number, py?: number): void;
        rotate(degrees: number, px?: number, py?: number): void;
        concat(m: android.graphics.Matrix): void;
        drawRGB(r: number, g: number, b: number): void;
        drawARGB(a: number, r: number, g: number, b: number): void;
        drawColor(color: number): void;
        clearColor(): void;
        save(): number;
        restore(): void;
        restoreToCount(saveCount: number): void;
        getSaveCount(): number;
        clipRect(rect: Rect): boolean;
        clipRect(left: number, top: number, right: number, bottom: number): boolean;
        getClipBounds(bounds?: Rect): Rect;
        quickReject(rect: Rect): boolean;
        quickReject(left: number, top: number, right: number, bottom: number): boolean;
        drawCanvas(canvas: Canvas, offsetX: number, offsetY: number): void;
        drawImage(image: PlatformImage, dstRect?: Rect, paint?: Paint): void;
        drawRect(rect: Rect, paint: Paint): any;
        drawRect(left: number, top: number, right: number, bottom: number, paint: Paint): any;
        drawPath(path: Path, paint: Paint): void;
        drawText_count(text: string, index: number, count: number, x: number, y: number, paint: Paint): void;
        drawText_end(text: string, start: number, end: number, x: number, y: number, paint: Paint): void;
        drawText(text: string, x: number, y: number, paint: Paint): void;
        drawTextRun_count(text: string, index: number, count: number, contextIndex: number, contextCount: number, x: number, y: number, dir: number, paint: Paint): void;
        drawTextRun_end(text: string, start: number, end: number, contextStart: number, contextEnd: number, x: number, y: number, dir: number, paint: Paint): void;
    }
}
declare module android.graphics.drawable {
    import Rect = android.graphics.Rect;
    import WeakReference = java.lang.ref.WeakReference;
    import Runnable = java.lang.Runnable;
    import Canvas = android.graphics.Canvas;
    abstract class Drawable {
        private static ZERO_BOUNDS_RECT;
        mBounds: Rect;
        mStateSet: number[];
        mLevel: number;
        mVisible: boolean;
        mCallback: WeakReference<Drawable.Callback>;
        constructor();
        abstract draw(canvas: Canvas): any;
        setBounds(rect: Rect): any;
        setBounds(left: any, top: any, right: any, bottom: any): any;
        copyBounds(bounds?: Rect): Rect;
        getBounds(): Rect;
        setDither(dither: boolean): void;
        setCallback(cb: Drawable.Callback): void;
        getCallback(): Drawable.Callback;
        invalidateSelf(): void;
        scheduleSelf(what: any, when: any): void;
        unscheduleSelf(what: any): void;
        abstract setAlpha(alpha: number): void;
        getAlpha(): number;
        isStateful(): boolean;
        setState(stateSet: Array<number>): boolean;
        getState(): Array<number>;
        jumpToCurrentState(): void;
        getCurrent(): Drawable;
        setLevel(level: number): boolean;
        getLevel(): number;
        setVisible(visible: boolean, restart: boolean): boolean;
        isVisible(): boolean;
        setAutoMirrored(mirrored: boolean): void;
        isAutoMirrored(): boolean;
        getOpacity(): number;
        static resolveOpacity(op1: number, op2: number): number;
        onStateChange(state: Array<number>): boolean;
        onLevelChange(level: number): boolean;
        onBoundsChange(bounds: Rect): void;
        getIntrinsicWidth(): number;
        getIntrinsicHeight(): number;
        getMinimumWidth(): number;
        getMinimumHeight(): number;
        getPadding(padding: Rect): boolean;
        mutate(): Drawable;
        getConstantState(): Drawable.ConstantState;
    }
    module Drawable {
        interface Callback {
            invalidateDrawable(who: Drawable): void;
            scheduleDrawable(who: Drawable, what: Runnable, when: number): void;
            unscheduleDrawable(who: Drawable, what: Runnable): void;
        }
        interface ConstantState {
            newDrawable(): Drawable;
        }
    }
}
declare module android.graphics.drawable {
    class ColorDrawable extends Drawable {
        private mState;
        private mMutated;
        private mPaint;
        constructor(color?: number);
        _setStateCopyFrom(state: any): void;
        mutate(): Drawable;
        draw(canvas: Canvas): void;
        getColor(): number;
        setColor(color: number): void;
        getAlpha(): number;
        setAlpha(alpha: number): void;
        getOpacity(): number;
        getConstantState(): Drawable.ConstantState;
    }
}
declare module android.graphics.drawable {
    import Drawable = android.graphics.drawable.Drawable;
    import Canvas = android.graphics.Canvas;
    class ScrollBarDrawable extends Drawable {
        private mVerticalTrack;
        private mHorizontalTrack;
        private mVerticalThumb;
        private mHorizontalThumb;
        private mRange;
        private mOffset;
        private mExtent;
        private mVertical;
        private mChanged;
        private mRangeChanged;
        private mTempBounds;
        private mAlwaysDrawHorizontalTrack;
        private mAlwaysDrawVerticalTrack;
        setAlwaysDrawHorizontalTrack(alwaysDrawTrack: boolean): void;
        setAlwaysDrawVerticalTrack(alwaysDrawTrack: boolean): void;
        getAlwaysDrawVerticalTrack(): boolean;
        getAlwaysDrawHorizontalTrack(): boolean;
        setParameters(range: number, offset: number, extent: number, vertical: boolean): void;
        draw(canvas: any): void;
        onBoundsChange(bounds: android.graphics.Rect): void;
        drawTrack(canvas: Canvas, bounds: Rect, vertical: boolean): void;
        drawThumb(canvas: Canvas, bounds: Rect, offset: number, length: number, vertical: boolean): void;
        setVerticalThumbDrawable(thumb: Drawable): void;
        setVerticalTrackDrawable(track: Drawable): void;
        setHorizontalThumbDrawable(thumb: Drawable): void;
        setHorizontalTrackDrawable(track: Drawable): void;
        getSize(vertical: boolean): number;
        setAlpha(alpha: number): void;
        getAlpha(): number;
        getOpacity(): number;
        toString(): string;
    }
}
declare module android.graphics.drawable {
    import Canvas = android.graphics.Canvas;
    class InsetDrawable extends Drawable implements Drawable.Callback {
        private mInsetState;
        private mTmpRect;
        private mMutated;
        constructor(drawable: Drawable, insetLeft: number, insetTop?: number, insetRight?: number, insetBottom?: number);
        invalidateDrawable(who: android.graphics.drawable.Drawable): void;
        scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
        unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
        draw(canvas: Canvas): void;
        getPadding(padding: android.graphics.Rect): boolean;
        setVisible(visible: boolean, restart: boolean): boolean;
        setAlpha(alpha: number): void;
        getAlpha(): number;
        getOpacity(): number;
        isStateful(): boolean;
        onStateChange(state: Array<number>): boolean;
        onBoundsChange(bounds: android.graphics.Rect): void;
        getIntrinsicWidth(): number;
        getIntrinsicHeight(): number;
        getConstantState(): Drawable.ConstantState;
        mutate(): Drawable;
        getDrawable(): Drawable;
    }
}
declare module java.lang {
    class JavaObject {
        static class: Class;
        private hash;
        private _class;
        hashCode(): number;
        getClass(): Class;
        equals(o: any): boolean;
    }
    class Class {
        name: string;
        constructor(name: string);
        getName(): string;
    }
}
declare module java.lang.util.concurrent {
    class CopyOnWriteArrayList<T> {
        private mData;
        private isDataNew;
        iterator(): T[];
        [Symbol.iterator](): IterableIterator<T>;
        private checkNewData();
        size(): number;
        add(...items: T[]): void;
        addAll(array: CopyOnWriteArrayList<T>): void;
        remove(item: T): void;
    }
}
declare module java.util {
    interface List<T> {
        size(): number;
        isEmpty(): boolean;
        contains(o: T): any;
        indexOf(o: T): any;
        lastIndexOf(o: T): any;
        clone(): List<T>;
        toArray(a: Array<T>): Array<T>;
        getArray(): Array<T>;
        get(index: number): T;
        set(index: number, element: T): T;
        add(t: T): any;
        add(index: number, t: T): any;
        remove(o: number | T): any;
        clear(): any;
        addAll(list: List<T>): any;
        addAll(index: number, list: List<T>): any;
        removeAll(list: List<T>): boolean;
        subList(fromIndex: number, toIndex: number): List<T>;
        sort(compareFn?: (a: T, b: T) => number): any;
    }
}
declare module java.util {
    class ArrayList<T> implements List<T> {
        array: Array<T>;
        constructor(initialCapacity?: number);
        size(): number;
        isEmpty(): boolean;
        contains(o: T): boolean;
        indexOf(o: T): number;
        lastIndexOf(o: T): number;
        clone(): ArrayList<T>;
        toArray(a?: T[]): Array<T>;
        getArray(): Array<T>;
        get(index: number): T;
        set(index: number, element: T): T;
        add(t: T): any;
        add(index: number, t: T): any;
        remove(o: number | T): T;
        clear(): void;
        addAll(list: ArrayList<T>): any;
        addAll(index: number, list: ArrayList<T>): any;
        removeAll(list: ArrayList<T>): boolean;
        [Symbol.iterator](): () => IterableIterator<T>;
        subList(fromIndex: number, toIndex: number): ArrayList<T>;
        toString(): string;
        sort(compareFn?: (a: T, b: T) => number): void;
    }
}
declare module android.util {
    class CopyOnWriteArray<T> {
        private mData;
        private mDataCopy;
        private mAccess;
        private mStart;
        private getArray();
        start(): Array<T>;
        end(): void;
        size(): number;
        add(...items: T[]): void;
        addAll(array: CopyOnWriteArray<T>): void;
        remove(item: T): void;
    }
}
declare module android.view {
    class ViewTreeObserver {
        private mOnWindowAttachListeners;
        private mOnGlobalFocusListeners;
        private mOnTouchModeChangeListeners;
        private mOnGlobalLayoutListeners;
        private mOnScrollChangedListeners;
        private mOnPreDrawListeners;
        private mOnDrawListeners;
        private mAlive;
        addOnWindowAttachListener(listener: ViewTreeObserver.OnWindowAttachListener): void;
        removeOnWindowAttachListener(victim: ViewTreeObserver.OnWindowAttachListener): void;
        dispatchOnWindowAttachedChange(attached: boolean): void;
        addOnGlobalLayoutListener(listener: ViewTreeObserver.OnGlobalLayoutListener): void;
        removeGlobalOnLayoutListener(victim: ViewTreeObserver.OnGlobalLayoutListener): void;
        removeOnGlobalLayoutListener(victim: ViewTreeObserver.OnGlobalLayoutListener): void;
        dispatchOnGlobalLayout(): void;
        addOnGlobalFocusChangeListener(listener: ViewTreeObserver.OnGlobalFocusChangeListener): void;
        removeOnGlobalFocusChangeListener(victim: ViewTreeObserver.OnGlobalFocusChangeListener): void;
        dispatchOnGlobalFocusChange(oldFocus: android.view.View, newFocus: android.view.View): void;
        addOnPreDrawListener(listener: ViewTreeObserver.OnPreDrawListener): void;
        removeOnPreDrawListener(victim: ViewTreeObserver.OnPreDrawListener): void;
        dispatchOnPreDraw(): boolean;
        addOnTouchModeChangeListener(listener: ViewTreeObserver.OnTouchModeChangeListener): void;
        removeOnTouchModeChangeListener(victim: ViewTreeObserver.OnTouchModeChangeListener): void;
        dispatchOnTouchModeChanged(inTouchMode: boolean): void;
        addOnScrollChangedListener(listener: ViewTreeObserver.OnScrollChangedListener): void;
        removeOnScrollChangedListener(victim: ViewTreeObserver.OnScrollChangedListener): void;
        dispatchOnScrollChanged(): void;
        addOnDrawListener(listener: ViewTreeObserver.OnDrawListener): void;
        removeOnDrawListener(victim: ViewTreeObserver.OnDrawListener): void;
        dispatchOnDraw(): void;
        merge(observer: ViewTreeObserver): void;
        private checkIsAlive();
        isAlive(): boolean;
        private kill();
    }
    module ViewTreeObserver {
        interface OnWindowAttachListener {
            onWindowAttached(): any;
            onWindowDetached(): any;
        }
        interface OnGlobalFocusChangeListener {
            onGlobalFocusChanged(oldFocus: android.view.View, newFocus: android.view.View): any;
        }
        interface OnGlobalLayoutListener {
            onGlobalLayout(): any;
        }
        interface OnPreDrawListener {
            onPreDraw(): boolean;
        }
        interface OnDrawListener {
            onDraw(): any;
        }
        interface OnScrollChangedListener {
            onScrollChanged(): any;
        }
        interface OnTouchModeChangeListener {
            onTouchModeChanged(isInTouchMode: boolean): any;
        }
    }
}
declare module android.util {
    class DisplayMetrics {
        static DENSITY_LOW: number;
        static DENSITY_MEDIUM: number;
        static DENSITY_HIGH: number;
        static DENSITY_XHIGH: number;
        static DENSITY_XXHIGH: number;
        static DENSITY_XXXHIGH: number;
        static DENSITY_DEFAULT: number;
        widthPixels: number;
        heightPixels: number;
        density: number;
        densityDpi: number;
        scaledDensity: number;
        xdpi: number;
        ydpi: number;
    }
}
declare module android.content.res {
    import DisplayMetrics = android.util.DisplayMetrics;
    class Resources {
        static instance: Resources;
        static globalDensity: number;
        private displayMetrics;
        static from(any: any): Resources;
        static getDisplayMetrics(): DisplayMetrics;
        getDisplayMetrics(): DisplayMetrics;
    }
}
declare module android.view {
    class ViewConfiguration {
        private static SCROLL_BAR_SIZE;
        private static SCROLL_BAR_FADE_DURATION;
        private static SCROLL_BAR_DEFAULT_DELAY;
        private static FADING_EDGE_LENGTH;
        private static PRESSED_STATE_DURATION;
        private static DEFAULT_LONG_PRESS_TIMEOUT;
        private static KEY_REPEAT_DELAY;
        private static GLOBAL_ACTIONS_KEY_TIMEOUT;
        private static TAP_TIMEOUT;
        private static JUMP_TAP_TIMEOUT;
        private static DOUBLE_TAP_TIMEOUT;
        private static DOUBLE_TAP_MIN_TIME;
        private static HOVER_TAP_TIMEOUT;
        private static HOVER_TAP_SLOP;
        private static ZOOM_CONTROLS_TIMEOUT;
        static EDGE_SLOP: number;
        private static TOUCH_SLOP;
        private static DOUBLE_TAP_TOUCH_SLOP;
        private static PAGING_TOUCH_SLOP;
        private static DOUBLE_TAP_SLOP;
        private static WINDOW_TOUCH_SLOP;
        private static MINIMUM_FLING_VELOCITY;
        private static MAXIMUM_FLING_VELOCITY;
        private static MAXIMUM_DRAWING_CACHE_SIZE;
        private static SCROLL_FRICTION;
        private static OVERSCROLL_DISTANCE;
        private static OVERFLING_DISTANCE;
        static instance: ViewConfiguration;
        static get(arg?: any): ViewConfiguration;
        private density;
        private sizeAndDensity;
        mEdgeSlop: number;
        mFadingEdgeLength: number;
        mMinimumFlingVelocity: number;
        mMaximumFlingVelocity: number;
        mScrollbarSize: number;
        mTouchSlop: number;
        mDoubleTapTouchSlop: number;
        mPagingTouchSlop: number;
        mDoubleTapSlop: number;
        mWindowTouchSlop: number;
        mOverscrollDistance: number;
        mOverflingDistance: number;
        mMaximumDrawingCacheSize: number;
        getScaledScrollBarSize(): number;
        static getScrollBarFadeDuration(): number;
        static getScrollDefaultDelay(): number;
        getScaledFadingEdgeLength(): number;
        static getPressedStateDuration(): number;
        static getLongPressTimeout(): number;
        static getKeyRepeatDelay(): number;
        static getTapTimeout(): number;
        static getJumpTapTimeout(): number;
        static getDoubleTapTimeout(): number;
        static getDoubleTapMinTime(): number;
        getScaledEdgeSlop(): number;
        getScaledTouchSlop(): number;
        getScaledDoubleTapTouchSlop(): number;
        getScaledPagingTouchSlop(): number;
        getScaledDoubleTapSlop(): number;
        getScaledWindowTouchSlop(): number;
        getScaledMinimumFlingVelocity(): number;
        getScaledMaximumFlingVelocity(): number;
        getScaledMaximumDrawingCacheSize(): number;
        getScaledOverscrollDistance(): number;
        getScaledOverflingDistance(): number;
        static getScrollFriction(): number;
    }
}
declare module android.view {
    import Rect = android.graphics.Rect;
    class MotionEvent {
        static ACTION_MASK: number;
        static ACTION_DOWN: number;
        static ACTION_UP: number;
        static ACTION_MOVE: number;
        static ACTION_CANCEL: number;
        static ACTION_OUTSIDE: number;
        static ACTION_POINTER_DOWN: number;
        static ACTION_POINTER_UP: number;
        static ACTION_HOVER_MOVE: number;
        static ACTION_SCROLL: number;
        static ACTION_HOVER_ENTER: number;
        static ACTION_HOVER_EXIT: number;
        static EDGE_TOP: number;
        static EDGE_BOTTOM: number;
        static EDGE_LEFT: number;
        static EDGE_RIGHT: number;
        static ACTION_POINTER_INDEX_MASK: number;
        static ACTION_POINTER_INDEX_SHIFT: number;
        static AXIS_VSCROLL: number;
        static AXIS_HSCROLL: number;
        static HistoryMaxSize: number;
        private static TouchMoveRecord;
        mAction: number;
        mEdgeFlags: number;
        mDownTime: number;
        mEventTime: number;
        mActivePointerId: number;
        private mTouchingPointers;
        mXOffset: number;
        mYOffset: number;
        _activeTouch: any;
        _event: any;
        private _axisValues;
        static obtainWithTouchEvent(e: any, action: number): MotionEvent;
        static obtain(event: MotionEvent): MotionEvent;
        static obtainWithAction(downTime: number, eventTime: number, action: number, x: number, y: number, metaState?: number): MotionEvent;
        private static IdIndexCache;
        initWithTouch(event: any, baseAction: number, windowBound?: Rect): void;
        initWithMouseWheel(e: WheelEvent): void;
        recycle(): void;
        getAction(): number;
        getActionMasked(): number;
        getActionIndex(): number;
        getDownTime(): number;
        getEventTime(): number;
        getX(pointerIndex?: number): number;
        getY(pointerIndex?: number): number;
        getPointerCount(): number;
        getPointerId(pointerIndex: number): number;
        findPointerIndex(pointerId: number): number;
        getRawX(): number;
        getRawY(): number;
        getHistorySize(id?: number): number;
        getHistoricalX(pointerIndex: number, pos: number): number;
        getHistoricalY(pointerIndex: number, pos: number): number;
        getHistoricalEventTime(pos: number): number;
        getHistoricalEventTime(pointerIndex: number, pos: number): number;
        getEdgeFlags(): number;
        setEdgeFlags(flags: number): void;
        setAction(action: number): void;
        isTouchEvent(): boolean;
        isPointerEvent(): boolean;
        offsetLocation(deltaX: number, deltaY: number): void;
        setLocation(x: number, y: number): void;
        getPointerIdBits(): number;
        split(idBits: number): MotionEvent;
        getAxisValue(axis: number): number;
        toString(): string;
    }
}
declare module android.view {
    import Rect = android.graphics.Rect;
    class TouchDelegate {
        private mDelegateView;
        private mBounds;
        private mSlopBounds;
        private mDelegateTargeted;
        private mSlop;
        constructor(bounds: Rect, delegateView: View);
        onTouchEvent(event: MotionEvent): boolean;
    }
}
declare module android.os {
    class SystemClock {
        static uptimeMillis(): number;
    }
}
declare module android.os {
    import Runnable = java.lang.Runnable;
    class Message {
        what: number;
        arg1: number;
        arg2: number;
        obj: any;
        when: number;
        target: Handler;
        callback: Runnable;
        private static sPool;
        recycle(): void;
        copyFrom(o: Message): void;
        sendToTarget(): void;
        clearForRecycle(): void;
        toString(now?: number): string;
        static obtain(): Message;
        static obtain(orig: Message): Message;
        static obtain(h: Handler, callback: Runnable): Message;
        static obtain(h: Handler, what: number, obj: any): Message;
        static obtain(h: Handler): Message;
        static obtain(h: Handler, what: number): Message;
        static obtain(h: Handler, what: number, arg1: number, arg2: number): Message;
        static obtain(h: Handler, what: number, arg1: number, arg2: number, obj: any): Message;
    }
}
declare module android.os {
    import Runnable = java.lang.Runnable;
    class MessageQueue {
        static messages: Set<Message>;
        static getMessages(h: Handler, r: Runnable, object: any): Array<Message>;
        static getMessages(h: Handler, what: number, object: any): Array<Message>;
        static hasMessages(h: Handler, r: Runnable, object: any): boolean;
        static hasMessages(h: Handler, what: number, object: any): boolean;
        static enqueueMessage(msg: Message, when: number): boolean;
        static recycleMessage(handler: Handler, message: Message): void;
        static removeMessages(h: Handler, what: number, object: any): any;
        static removeMessages(h: Handler, r: Runnable, object: any): any;
        static removeCallbacksAndMessages(h: Handler, object: any): void;
        private static _loopActive;
        private static checkLoop();
        private static loop();
    }
}
declare module android.os {
    import Runnable = java.lang.Runnable;
    class Handler {
        mCallback: Handler.Callback;
        constructor(mCallback?: Handler.Callback);
        handleMessage(msg: Message): void;
        dispatchMessage(msg: Message): void;
        obtainMessage(): Message;
        obtainMessage(what: number): Message;
        obtainMessage(what: number, obj: any): Message;
        obtainMessage(what: number, arg1: number, arg2: number): Message;
        obtainMessage(what: number, arg1: number, arg2: number, obj: any): Message;
        post(r: Runnable): boolean;
        postAtTime(r: Runnable, uptimeMillis: number): boolean;
        postAtTime(r: Runnable, token: any, uptimeMillis: number): boolean;
        postDelayed(r: Runnable, delayMillis: number): boolean;
        postAtFrontOfQueue(r: Runnable): boolean;
        removeCallbacks(r: Runnable, token?: any): void;
        sendMessage(msg: Message): boolean;
        sendEmptyMessage(what: number): boolean;
        sendEmptyMessageDelayed(what: number, delayMillis: number): boolean;
        sendEmptyMessageAtTime(what: number, uptimeMillis: number): boolean;
        sendMessageDelayed(msg: Message, delayMillis: number): boolean;
        sendMessageAtTime(msg: Message, uptimeMillis: number): boolean;
        sendMessageAtFrontOfQueue(msg: Message): boolean;
        removeMessages(what: number, object?: any): void;
        removeCallbacksAndMessages(token?: any): void;
        hasMessages(what: number, object?: any): boolean;
        private static getPostMessage(r, token?);
    }
    module Handler {
        interface Callback {
            handleMessage(msg: Message): boolean;
        }
    }
}
declare module android.content.res {
    class ColorStateList {
        mDefaultColor: number;
        mColors: Array<number>;
        mStateSpecs: Array<Array<number>>;
        private static EMPTY;
        private static sCache;
        constructor(states: Array<Array<number>>, colors: Array<number>);
        static valueOf(color: number): ColorStateList;
        withAlpha(alpha: number): ColorStateList;
        isStateful(): boolean;
        getColorForState(stateSet: Array<number>, defaultColor: number): number;
        getDefaultColor(): number;
        toString(): string;
    }
}
declare module android.util {
    class TypedValue {
        static COMPLEX_UNIT_PX: string;
        static COMPLEX_UNIT_DP: string;
        static COMPLEX_UNIT_DIP: string;
        static COMPLEX_UNIT_SP: string;
        static COMPLEX_UNIT_PT: string;
        static COMPLEX_UNIT_IN: string;
        static COMPLEX_UNIT_MM: string;
        static COMPLEX_UNIT_EM: string;
        static COMPLEX_UNIT_REM: string;
        static COMPLEX_UNIT_VH: string;
        static COMPLEX_UNIT_VW: string;
        static COMPLEX_UNIT_FRACTION: string;
        private static UNIT_SCALE_MAP;
        private static initUnit();
        static applyDimension(unit: string, size: number, dm: DisplayMetrics): number;
        static complexToDimensionPixelSize(valueWithUnit: string, baseValue?: number, metrics?: DisplayMetrics): number;
    }
}
declare module android.view {
    import Rect = android.graphics.Rect;
    class Gravity {
        static NO_GRAVITY: number;
        static AXIS_SPECIFIED: number;
        static AXIS_PULL_BEFORE: number;
        static AXIS_PULL_AFTER: number;
        static AXIS_CLIP: number;
        static AXIS_X_SHIFT: number;
        static AXIS_Y_SHIFT: number;
        static TOP: number;
        static BOTTOM: number;
        static LEFT: number;
        static RIGHT: number;
        static START: number;
        static END: number;
        static CENTER_VERTICAL: number;
        static FILL_VERTICAL: number;
        static CENTER_HORIZONTAL: number;
        static FILL_HORIZONTAL: number;
        static CENTER: number;
        static FILL: number;
        static CLIP_VERTICAL: number;
        static CLIP_HORIZONTAL: number;
        static HORIZONTAL_GRAVITY_MASK: number;
        static VERTICAL_GRAVITY_MASK: number;
        static RELATIVE_HORIZONTAL_GRAVITY_MASK: number;
        static DISPLAY_CLIP_VERTICAL: number;
        static DISPLAY_CLIP_HORIZONTAL: number;
        static apply(gravity: number, w: number, h: number, container: Rect, outRect: Rect, layoutDirection?: number): void;
        static getAbsoluteGravity(gravity: number, layoutDirection: number): number;
    }
}
declare module android.view.animation {
    interface Interpolator {
        getInterpolation(input: number): number;
    }
}
declare module android.view.animation {
    class LinearInterpolator implements Interpolator {
        getInterpolation(input: number): number;
    }
}
declare module android.view.animation {
    class AnimationUtils {
        static currentAnimationTimeMillis(): number;
    }
}
declare module android.util {
    class LayoutDirection {
        static LTR: number;
        static RTL: number;
        static INHERIT: number;
        static LOCALE: number;
    }
}
declare module androidui.attr {
    class StateAttr {
        private stateSpec;
        private attributes;
        constructor(state: number[]);
        setAttr(name: string, value: string): void;
        hasAttr(name: string): boolean;
        getAttrMap(): Map<string, string>;
        putAll(stateAttr: StateAttr): void;
        isStateEquals(state: number[]): boolean;
        isStateMatch(state: number[]): boolean;
        mergeRemovedFrom(another: StateAttr): Map<string, string>;
        static parseStateAttrName(stateDesc: any): Set<number>;
    }
}
declare module androidui.attr {
    class StateAttrList {
        private list;
        private list_reverse;
        private match_list;
        constructor(ele: Element, rootElement: HTMLElement);
        private _initStyleAttributes(ele, inParseState, rootElement);
        private _initStyleAttr(attr, ele, inParseState, rootElement);
        private static EmptyArray;
        getDefaultStateAttr(): StateAttr;
        getStateAttr(state: number[]): StateAttr;
        private optStateAttr(state);
        getMatchedAttr(state: number[]): StateAttr;
    }
}
declare module androidui.attr {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import Drawable = android.graphics.drawable.Drawable;
    import ColorStateList = android.content.res.ColorStateList;
    class AttrBinder {
        private host;
        private attrChangeMap;
        private attrStashMap;
        private objectRefs;
        private rootElement;
        constructor(host: View | ViewGroup.LayoutParams);
        addAttr(attrName: string, onAttrChange: (newValue: any) => void, stashAttrValueWhenStateChange?: () => any): void;
        onAttrChange(attrName: string, attrValue: any, rootElement: HTMLElement): void;
        getAttrValue(attrName: string): any;
        private getRefObject(ref, recycel?);
        private setRefObject(obj);
        parsePaddingMarginLTRB(value: any): string[];
        parseBoolean(value: any, defaultValue?: boolean): boolean;
        parseGravity(s: string, defaultValue?: number): number;
        parseDrawable(s: string): Drawable;
        parseColor(value: string, defaultValue?: number): number;
        parseColorList(value: string): ColorStateList;
        parseNumber(value: any, defaultValue?: number, baseValue?: number): number;
    }
}
declare module androidui.util {
    class ClassFinder {
        static findClass(classFullName: string, findInRoot?: any): any;
    }
}
declare module androidui.widget {
    import ViewGroup = android.view.ViewGroup;
    interface HtmlDataAdapter {
        onInflateAdapter(bindElement: HTMLElement, rootElement?: HTMLElement, parent?: ViewGroup): void;
    }
}
declare module androidui.util {
    class PerformanceAdjuster {
        static noCanvasMode(): void;
    }
}
declare module androidui.image {
    import Paint = android.graphics.Paint;
    import Drawable = android.graphics.drawable.Drawable;
    import Canvas = android.graphics.Canvas;
    import Resources = android.content.res.Resources;
    class NetDrawable extends Drawable {
        private mImage;
        private mState;
        private mLoadListener;
        private mImageWidth;
        private mImageHeight;
        constructor(src: string, res?: Resources, paint?: Paint);
        draw(canvas: Canvas): void;
        setAlpha(alpha: number): void;
        getAlpha(): number;
        getIntrinsicWidth(): number;
        getIntrinsicHeight(): number;
        protected onLoad(): void;
        protected onError(): void;
        isLoadFinish(): boolean;
        getImage(): PlatformImage;
        setLoadListener(loadListener: NetDrawable.LoadListener): void;
        getConstantState(): Drawable.ConstantState;
    }
    module NetDrawable {
        interface LoadListener {
            onLoad(drawable: NetDrawable): any;
            onError(drawable: NetDrawable): any;
        }
    }
}
declare module android.view {
    class KeyEvent {
        static KEYCODE_DPAD_UP: number;
        static KEYCODE_DPAD_DOWN: number;
        static KEYCODE_DPAD_LEFT: number;
        static KEYCODE_DPAD_RIGHT: number;
        static KEYCODE_DPAD_CENTER: number;
        static KEYCODE_ENTER: number;
        static KEYCODE_TAB: number;
        static KEYCODE_SPACE: number;
        static KEYCODE_ESCAPE: number;
        static KEYCODE_PAGE_UP: number;
        static KEYCODE_PAGE_DOWN: number;
        static KEYCODE_MOVE_HOME: number;
        static KEYCODE_MOVE_END: number;
        static ACTION_DOWN: number;
        static ACTION_UP: number;
        static META_ALT_ON: number;
        static META_SHIFT_ON: number;
        static META_CTRL_ON: number;
        static META_META_ON: number;
        static FLAG_CANCELED: number;
        static FLAG_CANCELED_LONG_PRESS: number;
        private static FLAG_LONG_PRESS;
        static FLAG_TRACKING: number;
        private static FLAG_START_TRACKING;
        mFlags: number;
        private mAction;
        private mDownTime;
        _activeKeyEvent: KeyboardEvent;
        _downingKeyEventMap: Map<number, KeyboardEvent[]>;
        appendKeyEvent(keyEvent: KeyboardEvent, action: number): void;
        static isConfirmKey(keyCode: number): boolean;
        isAltPressed(): boolean;
        isShiftPressed(): boolean;
        isCtrlPressed(): boolean;
        isMetaPressed(): boolean;
        getAction(): number;
        startTracking(): void;
        isTracking(): boolean;
        isLongPress(): boolean;
        getKeyCode(): number;
        getRepeatCount(): number;
        getDownTime(): number;
        getEventTime(): number;
        dispatch(receiver: KeyEvent.Callback, state?: KeyEvent.DispatcherState, target?: any): boolean;
        hasNoModifiers(): boolean;
        hasModifiers(modifiers: number): boolean;
        getMetaState(): number;
        toString(): string;
        static actionToString(action: number): string;
        static keyCodeToString(keyCode: number): string;
    }
    module KeyEvent {
        interface Callback {
            onKeyDown(keyCode: number, event: KeyEvent): boolean;
            onKeyLongPress(keyCode: number, event: KeyEvent): boolean;
            onKeyUp(keyCode: number, event: KeyEvent): boolean;
        }
        class DispatcherState {
            mDownKeyCode: number;
            mDownTarget: any;
            mActiveLongPresses: util.SparseArray<number>;
            reset(target: any): void;
            startTracking(event: KeyEvent, target: any): void;
            isTracking(event: KeyEvent): boolean;
            performedLongPress(event: KeyEvent): void;
            handleUpEvent(event: KeyEvent): void;
        }
    }
}
declare module android.graphics.drawable {
    import Canvas = android.graphics.Canvas;
    import Rect = android.graphics.Rect;
    class DrawableContainer extends Drawable implements Drawable.Callback {
        private static DEBUG;
        private static TAG;
        static DEFAULT_DITHER: boolean;
        private mDrawableContainerState;
        private mCurrDrawable;
        private mAlpha;
        private mCurIndex;
        mMutated: boolean;
        private mAnimationRunnable;
        private mEnterAnimationEnd;
        private mExitAnimationEnd;
        private mLastDrawable;
        draw(canvas: Canvas): void;
        private needsMirroring();
        getPadding(padding: android.graphics.Rect): boolean;
        setAlpha(alpha: number): void;
        getAlpha(): number;
        setDither(dither: boolean): void;
        setEnterFadeDuration(ms: number): void;
        setExitFadeDuration(ms: number): void;
        onBoundsChange(bounds: android.graphics.Rect): void;
        isStateful(): boolean;
        setAutoMirrored(mirrored: boolean): void;
        isAutoMirrored(): boolean;
        jumpToCurrentState(): void;
        onStateChange(state: Array<number>): boolean;
        onLevelChange(level: number): boolean;
        getIntrinsicWidth(): number;
        getIntrinsicHeight(): number;
        getMinimumWidth(): number;
        getMinimumHeight(): number;
        invalidateDrawable(who: android.graphics.drawable.Drawable): void;
        scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
        unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
        setVisible(visible: boolean, restart: boolean): boolean;
        getOpacity(): number;
        selectDrawable(idx: number): boolean;
        animate(schedule: boolean): void;
        getCurrent(): Drawable;
        getConstantState(): Drawable.ConstantState;
        mutate(): Drawable;
        setConstantState(state: DrawableContainer.DrawableContainerState): void;
    }
    module DrawableContainer {
        class DrawableContainerState implements Drawable.ConstantState {
            mOwner: DrawableContainer;
            private mDrawableFutures;
            mDrawables: Array<Drawable>;
            mNumChildren: number;
            mVariablePadding: boolean;
            mPaddingChecked: boolean;
            mConstantPadding: Rect;
            mConstantSize: boolean;
            mComputedConstantSize: boolean;
            mConstantWidth: number;
            mConstantHeight: number;
            mConstantMinimumWidth: number;
            mConstantMinimumHeight: number;
            mCheckedOpacity: boolean;
            mOpacity: number;
            mCheckedStateful: boolean;
            mStateful: boolean;
            mCheckedConstantState: boolean;
            mCanConstantState: boolean;
            mDither: boolean;
            mMutated: boolean;
            mEnterFadeDuration: number;
            mExitFadeDuration: number;
            mAutoMirrored: boolean;
            constructor(orig: DrawableContainerState, owner: DrawableContainer);
            addChild(dr: Drawable): number;
            getCapacity(): number;
            private createAllFutures();
            getChildCount(): number;
            getChildren(): Array<Drawable>;
            getChild(index: number): Drawable;
            mutate(): void;
            setVariablePadding(variable: boolean): void;
            getConstantPadding(): Rect;
            setConstantSize(constant: boolean): void;
            isConstantSize(): boolean;
            getConstantWidth(): number;
            getConstantHeight(): number;
            getConstantMinimumWidth(): number;
            getConstantMinimumHeight(): number;
            computeConstantSize(): void;
            setEnterFadeDuration(duration: number): void;
            getEnterFadeDuration(): number;
            setExitFadeDuration(duration: number): void;
            getExitFadeDuration(): number;
            getOpacity(): number;
            isStateful(): boolean;
            canConstantState(): boolean;
            newDrawable(): android.graphics.drawable.Drawable;
        }
    }
}
declare module android.graphics.drawable {
    class StateListDrawable extends DrawableContainer {
        private mStateListState;
        constructor();
        private initWithState(state);
        addState(stateSet: Array<number>, drawable: Drawable): void;
        isStateful(): boolean;
        onStateChange(stateSet: Array<number>): boolean;
        getStateCount(): number;
        getStateSet(index: number): Array<number>;
        getStateDrawable(index: number): Drawable;
        getStateDrawableIndex(stateSet: Array<number>): number;
        mutate(): Drawable;
    }
}
declare module android.R {
    import Drawable = android.graphics.drawable.Drawable;
    class drawable {
        static button_background: Drawable;
        static list_selector_background: Drawable;
        static list_divider: Drawable;
    }
}
declare module android.R {
    import ColorStateList = android.content.res.ColorStateList;
    class color {
        static textView_textColor: ColorStateList;
    }
}
declare module android.R {
    import Drawable = android.graphics.drawable.Drawable;
    import ColorDrawable = android.graphics.drawable.ColorDrawable;
    import StateListDrawable = android.graphics.drawable.StateListDrawable;
    class attr {
        static _viewStyle: any;
        static viewStyle: any;
        static buttonStyle: {
            background: Drawable;
            focusable: boolean;
            clickable: boolean;
            textSize: string;
            gravity: number;
        };
        static textViewStyle: {
            textSize: string;
            textColor: content.res.ColorStateList;
        };
        static imageButtonStyle: {
            background: Drawable;
            focusable: boolean;
            clickable: boolean;
            gravity: number;
        };
        static gridViewStyle: {
            numColumns: number;
        };
        static listViewStyle: {
            divider: Drawable;
            dividerHeight: number;
        };
        static numberPickerStyle: {
            orientation: string;
            solidColor: string;
            selectionDivider: ColorDrawable;
            selectionDividerHeight: string;
            selectionDividersDistance: string;
            internalMinWidth: string;
            internalMaxHeight: string;
            virtualButtonPressedDrawable: StateListDrawable;
        };
    }
}
declare module android.view {
    import Drawable = android.graphics.drawable.Drawable;
    import Matrix = android.graphics.Matrix;
    import Runnable = java.lang.Runnable;
    import JavaObject = java.lang.JavaObject;
    import ViewParent = android.view.ViewParent;
    import Handler = android.os.Handler;
    import Rect = android.graphics.Rect;
    import Point = android.graphics.Point;
    import Canvas = android.graphics.Canvas;
    import CopyOnWriteArrayList = java.lang.util.concurrent.CopyOnWriteArrayList;
    import ArrayList = java.util.ArrayList;
    import Resources = android.content.res.Resources;
    import AttrBinder = androidui.attr.AttrBinder;
    import KeyEvent = android.view.KeyEvent;
    class View extends JavaObject implements Drawable.Callback, KeyEvent.Callback {
        static DBG: boolean;
        static VIEW_LOG_TAG: string;
        static PFLAG_WANTS_FOCUS: number;
        static PFLAG_FOCUSED: number;
        static PFLAG_SELECTED: number;
        static PFLAG_IS_ROOT_NAMESPACE: number;
        static PFLAG_HAS_BOUNDS: number;
        static PFLAG_DRAWN: number;
        static PFLAG_DRAW_ANIMATION: number;
        static PFLAG_SKIP_DRAW: number;
        static PFLAG_ONLY_DRAWS_BACKGROUND: number;
        static PFLAG_REQUEST_TRANSPARENT_REGIONS: number;
        static PFLAG_DRAWABLE_STATE_DIRTY: number;
        static PFLAG_MEASURED_DIMENSION_SET: number;
        static PFLAG_FORCE_LAYOUT: number;
        static PFLAG_LAYOUT_REQUIRED: number;
        static PFLAG_PRESSED: number;
        static PFLAG_DRAWING_CACHE_VALID: number;
        static PFLAG_ANIMATION_STARTED: number;
        static PFLAG_ALPHA_SET: number;
        static PFLAG_SCROLL_CONTAINER: number;
        static PFLAG_SCROLL_CONTAINER_ADDED: number;
        static PFLAG_DIRTY: number;
        static PFLAG_DIRTY_OPAQUE: number;
        static PFLAG_DIRTY_MASK: number;
        static PFLAG_OPAQUE_BACKGROUND: number;
        static PFLAG_OPAQUE_SCROLLBARS: number;
        static PFLAG_OPAQUE_MASK: number;
        static PFLAG_PREPRESSED: number;
        static PFLAG_CANCEL_NEXT_UP_EVENT: number;
        static PFLAG_AWAKEN_SCROLL_BARS_ON_ATTACH: number;
        static PFLAG_HOVERED: number;
        static PFLAG_PIVOT_EXPLICITLY_SET: number;
        static PFLAG_ACTIVATED: number;
        static PFLAG_INVALIDATED: number;
        static PFLAG2_VIEW_QUICK_REJECTED: number;
        static PFLAG2_HAS_TRANSIENT_STATE: number;
        static PFLAG3_VIEW_IS_ANIMATING_TRANSFORM: number;
        static PFLAG3_VIEW_IS_ANIMATING_ALPHA: number;
        static PFLAG3_IS_LAID_OUT: number;
        static PFLAG3_MEASURE_NEEDED_BEFORE_LAYOUT: number;
        static PFLAG3_CALLED_SUPER: number;
        private static NOT_FOCUSABLE;
        private static FOCUSABLE;
        private static FOCUSABLE_MASK;
        static NO_ID: any;
        static OVER_SCROLL_ALWAYS: number;
        static OVER_SCROLL_IF_CONTENT_SCROLLS: number;
        static OVER_SCROLL_NEVER: number;
        static MEASURED_SIZE_MASK: number;
        static MEASURED_STATE_MASK: number;
        static MEASURED_HEIGHT_STATE_SHIFT: number;
        static MEASURED_STATE_TOO_SMALL: number;
        static VISIBILITY_MASK: number;
        static VISIBLE: number;
        static INVISIBLE: number;
        static GONE: number;
        static ENABLED: number;
        static DISABLED: number;
        static ENABLED_MASK: number;
        static WILL_NOT_DRAW: number;
        static DRAW_MASK: number;
        static SCROLLBARS_NONE: number;
        static SCROLLBARS_HORIZONTAL: number;
        static SCROLLBARS_VERTICAL: number;
        static SCROLLBARS_MASK: number;
        static FOCUSABLES_ALL: number;
        static FOCUSABLES_TOUCH_MODE: number;
        static FOCUS_BACKWARD: number;
        static FOCUS_FORWARD: number;
        static FOCUS_LEFT: number;
        static FOCUS_UP: number;
        static FOCUS_RIGHT: number;
        static FOCUS_DOWN: number;
        static EMPTY_STATE_SET: number[];
        static ENABLED_STATE_SET: number[];
        static FOCUSED_STATE_SET: number[];
        static SELECTED_STATE_SET: number[];
        static PRESSED_STATE_SET: number[];
        static WINDOW_FOCUSED_STATE_SET: number[];
        static ENABLED_FOCUSED_STATE_SET: number[];
        static ENABLED_SELECTED_STATE_SET: number[];
        static ENABLED_WINDOW_FOCUSED_STATE_SET: number[];
        static FOCUSED_SELECTED_STATE_SET: number[];
        static FOCUSED_WINDOW_FOCUSED_STATE_SET: number[];
        static SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static ENABLED_FOCUSED_SELECTED_STATE_SET: number[];
        static ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET: number[];
        static ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_SELECTED_STATE_SET: number[];
        static PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_FOCUSED_STATE_SET: number[];
        static PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_FOCUSED_SELECTED_STATE_SET: number[];
        static PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_ENABLED_STATE_SET: number[];
        static PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_ENABLED_SELECTED_STATE_SET: number[];
        static PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_ENABLED_FOCUSED_STATE_SET: number[];
        static PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET: number[];
        static PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET: number[];
        static PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: number[];
        static VIEW_STATE_SETS: Array<Array<number>>;
        static VIEW_STATE_WINDOW_FOCUSED: number;
        static VIEW_STATE_SELECTED: number;
        static VIEW_STATE_FOCUSED: number;
        static VIEW_STATE_ENABLED: number;
        static VIEW_STATE_DISABLE: number;
        static VIEW_STATE_PRESSED: number;
        static VIEW_STATE_ACTIVATED: number;
        static VIEW_STATE_HOVERED: number;
        static VIEW_STATE_IDS: number[];
        private static _static;
        static CLICKABLE: number;
        static DRAWING_CACHE_ENABLED: number;
        static WILL_NOT_CACHE_DRAWING: number;
        private static FOCUSABLE_IN_TOUCH_MODE;
        static LONG_CLICKABLE: number;
        static DUPLICATE_PARENT_STATE: number;
        static LAYER_TYPE_NONE: number;
        static LAYER_TYPE_SOFTWARE: number;
        static LAYOUT_DIRECTION_LTR: number;
        static LAYOUT_DIRECTION_RTL: number;
        static LAYOUT_DIRECTION_INHERIT: number;
        static LAYOUT_DIRECTION_LOCALE: number;
        mID: string;
        mPrivateFlags: number;
        private mPrivateFlags2;
        private mPrivateFlags3;
        private mOldWidthMeasureSpec;
        private mOldHeightMeasureSpec;
        private mMeasuredWidth;
        private mMeasuredHeight;
        private mBackground;
        private mBackgroundSizeChanged;
        private mBackgroundWidth;
        private mBackgroundHeight;
        private mScrollCache;
        private mDrawableState;
        private mNextFocusLeftId;
        private mNextFocusRightId;
        private mNextFocusUpId;
        private mNextFocusDownId;
        mNextFocusForwardId: string;
        private mPendingCheckForLongPress;
        private mPendingCheckForTap;
        private mPerformClick;
        private mUnsetPressedState;
        private mHasPerformedLongPress;
        mMinWidth: number;
        mMinHeight: number;
        private mTouchDelegate;
        private mFloatingTreeObserver;
        private mDrawingCacheBackgroundColor;
        private mUnscaledDrawingCache;
        mTouchSlop: number;
        private mVerticalScrollFactor;
        private mOverScrollMode;
        mParent: ViewParent;
        private mMeasureCache;
        mAttachInfo: View.AttachInfo;
        mLayoutParams: ViewGroup.LayoutParams;
        mViewFlags: number;
        mLayerType: number;
        mCachingFailed: boolean;
        private mOverlay;
        private mWindowAttachCount;
        private mTransientStateCount;
        private mListenerInfo;
        private mClipBounds;
        private mLastIsOpaque;
        private mMatchIdPredicate;
        private _mLeft;
        private _mRight;
        private _mTop;
        private _mBottom;
        mLeft: number;
        mRight: number;
        mTop: number;
        mBottom: number;
        private _mScrollX;
        private _mScrollY;
        mScrollX: number;
        mScrollY: number;
        mPaddingLeft: number;
        mPaddingRight: number;
        mPaddingTop: number;
        mPaddingBottom: number;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        getWidth(): number;
        getHeight(): number;
        getTop(): number;
        setTop(top: number): void;
        getBottom(): number;
        setBottom(bottom: number): void;
        getLeft(): number;
        setLeft(left: number): void;
        getRight(): number;
        setRight(right: number): void;
        getPaddingLeft(): number;
        getPaddingTop(): number;
        getPaddingRight(): number;
        getPaddingBottom(): number;
        setPaddingLeft(left: number): void;
        setPaddingTop(top: number): void;
        setPaddingRight(right: number): void;
        setPaddingBottom(bottom: number): void;
        setPadding(left: number, top: number, right: number, bottom: number): void;
        private _setPaddingWithUnit(left, top, right, bottom);
        setScrollX(value: number): void;
        setScrollY(value: number): void;
        getScrollX(): number;
        getScrollY(): number;
        getFinalAlpha(): number;
        offsetTopAndBottom(offset: number): void;
        offsetLeftAndRight(offset: number): void;
        setAlpha(alpha: number): void;
        private updateMatrix();
        getMatrix(): Matrix;
        hasIdentityMatrix(): boolean;
        transformRect(rect: Rect): void;
        pointInView(localX: number, localY: number, slop?: number): boolean;
        getHandler(): Handler;
        getViewRootImpl(): ViewRootImpl;
        post(action: Runnable): boolean;
        postDelayed(action: Runnable, delayMillis: number): boolean;
        postOnAnimation(action: Runnable): boolean;
        postOnAnimationDelayed(action: Runnable, delayMillis: number): boolean;
        removeCallbacks(action: Runnable): boolean;
        getParent(): ViewParent;
        setFlags(flags: number, mask: number): void;
        bringToFront(): void;
        onScrollChanged(l: number, t: number, oldl: number, oldt: number): void;
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        getTouchables(): ArrayList<View>;
        addTouchables(views: ArrayList<View>): void;
        onFocusLost(): void;
        resetPressedState(): void;
        isFocused(): boolean;
        findFocus(): View;
        getNextFocusLeftId(): string;
        setNextFocusLeftId(nextFocusLeftId: string): void;
        getNextFocusRightId(): string;
        setNextFocusRightId(nextFocusRightId: string): void;
        getNextFocusUpId(): string;
        setNextFocusUpId(nextFocusUpId: string): void;
        getNextFocusDownId(): string;
        setNextFocusDownId(nextFocusDownId: string): void;
        getNextFocusForwardId(): string;
        setNextFocusForwardId(nextFocusForwardId: string): void;
        setFocusable(focusable: boolean): void;
        isFocusable(): boolean;
        setFocusableInTouchMode(focusableInTouchMode: boolean): void;
        isFocusableInTouchMode(): boolean;
        hasFocusable(): boolean;
        clearFocus(): void;
        clearFocusInternal(propagate: boolean, refocus: boolean): void;
        notifyGlobalFocusCleared(oldFocus: View): void;
        rootViewRequestFocus(): boolean;
        unFocus(): void;
        hasFocus(): boolean;
        protected onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: Rect): void;
        focusSearch(direction: number): View;
        dispatchUnhandledMove(focused: View, direction: number): boolean;
        findUserSetNextFocus(root: View, direction: number): View;
        private findViewInsideOutShouldExist(root, id);
        getFocusables(direction: number): ArrayList<View>;
        addFocusables(views: ArrayList<View>, direction: number, focusableMode?: number): void;
        setOnFocusChangeListener(l: View.OnFocusChangeListener): void;
        getOnFocusChangeListener(): View.OnFocusChangeListener;
        requestFocus(direction?: number, previouslyFocusedRect?: any): boolean;
        private requestFocusNoSearch(direction, previouslyFocusedRect);
        requestFocusFromTouch(): boolean;
        private hasAncestorThatBlocksDescendantFocus();
        handleFocusGainInternal(direction: number, previouslyFocusedRect: Rect): void;
        hasTransientState(): boolean;
        setHasTransientState(hasTransientState: boolean): void;
        isScrollContainer(): boolean;
        setScrollContainer(isScrollContainer: boolean): void;
        isInTouchMode(): boolean;
        isShown(): boolean;
        getVisibility(): number;
        setVisibility(visibility: number): void;
        dispatchVisibilityChanged(changedView: View, visibility: number): void;
        protected onVisibilityChanged(changedView: View, visibility: number): void;
        dispatchDisplayHint(hint: number): void;
        onDisplayHint(hint: number): void;
        dispatchWindowVisibilityChanged(visibility: number): void;
        onWindowVisibilityChanged(visibility: number): void;
        getWindowVisibility(): number;
        isEnabled(): boolean;
        setEnabled(enabled: boolean): void;
        dispatchGenericMotionEvent(event: MotionEvent): boolean;
        private dispatchGenericMotionEventInternal(event);
        onGenericMotionEvent(event: MotionEvent): boolean;
        dispatchGenericPointerEvent(event: MotionEvent): boolean;
        dispatchKeyEvent(event: KeyEvent): boolean;
        setOnKeyListener(l: View.OnKeyListener): void;
        getKeyDispatcherState(): KeyEvent.DispatcherState;
        onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
        onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
        onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
        dispatchTouchEvent(event: MotionEvent): boolean;
        onFilterTouchEventForSecurity(event: MotionEvent): boolean;
        onTouchEvent(event: MotionEvent): boolean;
        isInScrollingContainer(): boolean;
        cancelPendingInputEvents(): void;
        dispatchCancelPendingInputEvents(): void;
        onCancelPendingInputEvents(): void;
        private removeLongPressCallback();
        private removePerformClickCallback();
        private removeUnsetPressCallback();
        private removeTapCallback();
        cancelLongPress(): void;
        setTouchDelegate(delegate: TouchDelegate): void;
        getTouchDelegate(): TouchDelegate;
        getListenerInfo(): View.ListenerInfo;
        addOnLayoutChangeListener(listener: View.OnLayoutChangeListener): void;
        removeOnLayoutChangeListener(listener: View.OnLayoutChangeListener): void;
        addOnAttachStateChangeListener(listener: View.OnAttachStateChangeListener): void;
        removeOnAttachStateChangeListener(listener: View.OnAttachStateChangeListener): void;
        setOnClickListener(l: View.OnClickListener): void;
        hasOnClickListeners(): boolean;
        setOnLongClickListener(l: View.OnLongClickListener): void;
        playSoundEffect(soundConstant: number): void;
        performHapticFeedback(feedbackConstant: number): boolean;
        performClick(event?: MotionEvent): boolean;
        private _sendClickToBindElement(event?);
        callOnClick(): boolean;
        performLongClick(): boolean;
        performButtonActionOnTouchDown(event: MotionEvent): boolean;
        private checkForLongClick(delayOffset?);
        setOnTouchListener(l: View.OnTouchListener): void;
        isClickable(): boolean;
        setClickable(clickable: boolean): void;
        isLongClickable(): boolean;
        setLongClickable(longClickable: boolean): void;
        setPressed(pressed: boolean): void;
        dispatchSetPressed(pressed: boolean): void;
        isPressed(): boolean;
        setSelected(selected: boolean): void;
        dispatchSetSelected(selected: boolean): void;
        isSelected(): boolean;
        setActivated(activated: boolean): void;
        dispatchSetActivated(activated: boolean): void;
        isActivated(): boolean;
        getViewTreeObserver(): ViewTreeObserver;
        setLayoutDirection(layoutDirection: number): void;
        getLayoutDirection(): number;
        isLayoutRtl(): boolean;
        getBaseline(): number;
        isLayoutRequested(): boolean;
        getLayoutParams(): ViewGroup.LayoutParams;
        setLayoutParams(params: ViewGroup.LayoutParams): void;
        requestLayout(): void;
        forceLayout(): void;
        isLaidOut(): boolean;
        layout(l: number, t: number, r: number, b: number): void;
        protected onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
        protected setFrame(left: number, top: number, right: number, bottom: number): boolean;
        private sizeChange(newWidth, newHeight, oldWidth, oldHeight);
        getHitRect(outRect: Rect): void;
        getFocusedRect(r: Rect): void;
        getDrawingRect(outRect: Rect): void;
        getGlobalVisibleRect(r: Rect, globalOffset?: Point): boolean;
        getMeasuredWidth(): number;
        getMeasuredWidthAndState(): number;
        getMeasuredHeight(): number;
        getMeasuredHeightAndState(): number;
        getMeasuredState(): number;
        measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        protected onMeasure(widthMeasureSpec: any, heightMeasureSpec: any): void;
        setMeasuredDimension(measuredWidth: any, measuredHeight: any): void;
        static combineMeasuredStates(curState: any, newState: any): number;
        static resolveSize(size: any, measureSpec: any): number;
        static resolveSizeAndState(size: any, measureSpec: any, childMeasuredState: any): number;
        static getDefaultSize(size: any, measureSpec: any): any;
        getSuggestedMinimumHeight(): number;
        getSuggestedMinimumWidth(): number;
        getMinimumHeight(): number;
        setMinimumHeight(minHeight: any): void;
        getMinimumWidth(): number;
        setMinimumWidth(minWidth: any): void;
        private _invalidateRect(l, t, r, b);
        private _invalidateCache(invalidateCache?);
        invalidate(): any;
        invalidate(invalidateCache: boolean): any;
        invalidate(dirty: Rect): any;
        invalidate(l: number, t: number, r: number, b: number): any;
        invalidateViewProperty(invalidateParent: boolean, forceRedraw: boolean): void;
        invalidateParentCaches(): void;
        invalidateParentIfNeeded(): void;
        postInvalidate(l?: number, t?: number, r?: number, b?: number): void;
        postInvalidateDelayed(delayMilliseconds: number, left?: number, top?: number, right?: number, bottom?: number): void;
        postInvalidateOnAnimation(left?: number, top?: number, right?: number, bottom?: number): void;
        private skipInvalidate();
        isOpaque(): boolean;
        private computeOpaqueFlags();
        getLayerType(): number;
        setClipBounds(clipBounds: Rect): void;
        getClipBounds(): Rect;
        getDrawingTime(): number;
        drawFromParent(canvas: Canvas, parent: ViewGroup, drawingTime: number): boolean;
        draw(canvas: Canvas): void;
        protected onDraw(canvas: Canvas): void;
        dispatchDraw(canvas: Canvas): void;
        onDrawScrollBars(canvas: Canvas): void;
        isVerticalScrollBarHidden(): boolean;
        onDrawHorizontalScrollBar(canvas: Canvas, scrollBar: Drawable, l: number, t: number, r: number, b: number): void;
        onDrawVerticalScrollBar(canvas: Canvas, scrollBar: Drawable, l: number, t: number, r: number, b: number): void;
        isHardwareAccelerated(): boolean;
        setDrawingCacheEnabled(enabled: boolean): void;
        isDrawingCacheEnabled(): boolean;
        getDrawingCache(autoScale?: boolean): Canvas;
        setDrawingCacheBackgroundColor(color: number): void;
        getDrawingCacheBackgroundColor(): number;
        destroyDrawingCache(): void;
        buildDrawingCache(autoScale?: boolean): void;
        setWillNotDraw(willNotDraw: boolean): void;
        willNotDraw(): boolean;
        setWillNotCacheDrawing(willNotCacheDrawing: boolean): void;
        willNotCacheDrawing(): boolean;
        invalidateDrawable(drawable: Drawable): void;
        scheduleDrawable(who: Drawable, what: Runnable, when: number): void;
        unscheduleDrawable(who: Drawable, what?: Runnable): void;
        protected verifyDrawable(who: Drawable): boolean;
        protected drawableStateChanged(): void;
        resolveDrawables(): void;
        refreshDrawableState(): void;
        getDrawableState(): Array<number>;
        protected onCreateDrawableState(extraSpace: number): Array<number>;
        static mergeDrawableStates(baseState: Array<number>, additionalState: Array<number>): number[];
        jumpDrawablesToCurrentState(): void;
        setBackgroundColor(color: number): void;
        setBackground(background: Drawable): void;
        getBackground(): Drawable;
        setBackgroundDrawable(background: Drawable): void;
        private resizeFromBackground();
        getAnimation(): any;
        protected computeHorizontalScrollRange(): number;
        protected computeHorizontalScrollOffset(): number;
        protected computeHorizontalScrollExtent(): number;
        protected computeVerticalScrollRange(): number;
        protected computeVerticalScrollOffset(): number;
        protected computeVerticalScrollExtent(): number;
        canScrollHorizontally(direction: number): boolean;
        canScrollVertically(direction: number): boolean;
        protected overScrollBy(deltaX: number, deltaY: number, scrollX: number, scrollY: number, scrollRangeX: number, scrollRangeY: number, maxOverScrollX: number, maxOverScrollY: number, isTouchEvent: boolean): boolean;
        protected onOverScrolled(scrollX: number, scrollY: number, clampedX: boolean, clampedY: boolean): void;
        getOverScrollMode(): number;
        setOverScrollMode(overScrollMode: number): void;
        getVerticalScrollFactor(): number;
        getHorizontalScrollFactor(): number;
        computeScroll(): void;
        scrollTo(x: number, y: number): void;
        scrollBy(x: number, y: number): void;
        private initialAwakenScrollBars();
        awakenScrollBars(startDelay?: number, invalidate?: boolean): boolean;
        getVerticalFadingEdgeLength(): number;
        setVerticalFadingEdgeEnabled(enable: boolean): void;
        setHorizontalFadingEdgeEnabled(enable: boolean): void;
        setFadingEdgeLength(length: number): void;
        getHorizontalFadingEdgeLength(): number;
        getVerticalScrollbarWidth(): number;
        getHorizontalScrollbarHeight(): number;
        initializeScrollbars(a?: any): void;
        initScrollCache(): void;
        private getScrollCache();
        isHorizontalScrollBarEnabled(): boolean;
        setHorizontalScrollBarEnabled(horizontalScrollBarEnabled: boolean): void;
        isVerticalScrollBarEnabled(): boolean;
        setVerticalScrollBarEnabled(verticalScrollBarEnabled: boolean): void;
        setScrollbarFadingEnabled(fadeScrollbars: boolean): void;
        setVerticalScrollbarPosition(position: number): void;
        setHorizontalScrollbarPosition(position: number): void;
        setScrollBarStyle(position: number): void;
        protected getTopFadingEdgeStrength(): number;
        protected getBottomFadingEdgeStrength(): number;
        protected getLeftFadingEdgeStrength(): number;
        protected getRightFadingEdgeStrength(): number;
        isScrollbarFadingEnabled(): boolean;
        getScrollBarDefaultDelayBeforeFade(): number;
        setScrollBarDefaultDelayBeforeFade(scrollBarDefaultDelayBeforeFade: number): void;
        getScrollBarFadeDuration(): number;
        setScrollBarFadeDuration(scrollBarFadeDuration: number): void;
        getScrollBarSize(): number;
        setScrollBarSize(scrollBarSize: number): void;
        hasOpaqueScrollbars(): boolean;
        assignParent(parent: ViewParent): void;
        onFinishInflate(): void;
        dispatchStartTemporaryDetach(): void;
        onStartTemporaryDetach(): void;
        dispatchFinishTemporaryDetach(): void;
        onFinishTemporaryDetach(): void;
        dispatchWindowFocusChanged(hasFocus: boolean): void;
        onWindowFocusChanged(hasWindowFocus: boolean): void;
        hasWindowFocus(): boolean;
        getWindowAttachCount(): number;
        isAttachedToWindow(): boolean;
        dispatchAttachedToWindow(info: View.AttachInfo, visibility: number): void;
        protected onAttachedToWindow(): void;
        dispatchDetachedFromWindow(): void;
        protected onDetachedFromWindow(): void;
        cleanupDraw(): void;
        debug(depth?: number): void;
        toString(): String;
        getRootView(): View;
        findViewByPredicateTraversal(predicate: View.Predicate<View>, childToSkip: View): View;
        findViewById(id: string): View;
        findViewTraversal(id: string): View;
        findViewByPredicate(predicate: View.Predicate<View>): View;
        findViewByPredicateInsideOut(start: View, predicate: View.Predicate<View>): View;
        setId(id: string): void;
        getId(): string;
        setIsRootNamespace(isRoot: boolean): void;
        isRootNamespace(): boolean;
        getResources(): Resources;
        static inflate(eleOrRef: HTMLElement | string, rootElement: HTMLElement, viewParent?: ViewGroup): View;
        static optReferenceString(refString: string, currentElement?: NodeSelector, rootElement?: NodeSelector): string;
        static findReferenceString(refString: string, currentElement?: NodeSelector, rootElement?: NodeSelector): string;
        static findReference(refString: string, currentElement?: NodeSelector, rootElement?: NodeSelector, cloneNode?: boolean): Element;
        bindElement: HTMLElement;
        _rootElement: HTMLElement;
        private _AttrObserver;
        private _stateAttrList;
        protected _attrBinder: AttrBinder;
        static AndroidViewProperty: string;
        rootElement: HTMLElement;
        private _AttrObserverCallBack(arr, observer);
        protected initBindElement(bindElement?: HTMLElement, rootElement?: HTMLElement): void;
        private _syncToElementLock;
        private _syncToElementImmediatelyLock;
        private _syncToElementRun;
        requestSyncBoundToElement(immediately?: boolean): void;
        protected _syncBoundAndScrollToElement(): void;
        private _lastSyncLeft;
        private _lastSyncTop;
        private _lastSyncWidth;
        private _lastSyncHeight;
        protected _syncBoundToElement(): void;
        private _lastSyncScrollX;
        private _lastSyncScrollY;
        protected _syncScrollToElement(): void;
        syncVisibleToElement(): void;
        syncDrawStateToElement(): void;
        private _initAttrObserver();
        private _parseInitedAttribute();
        private _fireInitedAttributeChange();
        private _fireStateChangeToAttribute(oldState, newState);
        private onBindElementAttributeChanged(attributeName, oldVal, newVal);
        hasAttributeIgnoreCase(name: string): boolean;
        getAttributeIgnoreCase(name: string): string;
        applyDefaultAttributes(attrs: any): void;
        tagName(): string;
    }
    module View {
        class MeasureSpec {
            static MODE_SHIFT: number;
            static MODE_MASK: number;
            static UNSPECIFIED: number;
            static EXACTLY: number;
            static AT_MOST: number;
            static makeMeasureSpec(size: any, mode: any): number;
            static getMode(measureSpec: any): number;
            static getSize(measureSpec: any): number;
            static adjust(measureSpec: any, delta: any): number;
            static toString(measureSpec: any): string;
        }
        class AttachInfo {
            mRootView: View;
            mWindowLeft: number;
            mWindowTop: number;
            mKeyDispatchState: KeyEvent.DispatcherState;
            mDrawingTime: number;
            mViewRootImpl: ViewRootImpl;
            mHandler: Handler;
            mTmpInvalRect: Rect;
            mTmpTransformRect: Rect;
            mScrollContainers: Set<View>;
            mViewScrollChanged: boolean;
            mTreeObserver: ViewTreeObserver;
            mViewRequestingLayout: View;
            mViewVisibilityChanged: boolean;
            mInvalidateChildLocation: number[];
            mIgnoreDirtyState: boolean;
            mSetIgnoreDirtyState: boolean;
            mHasWindowFocus: boolean;
            mWindowVisibility: number;
            mInTouchMode: boolean;
            constructor(mViewRootImpl: ViewRootImpl, mHandler: Handler);
        }
        class ListenerInfo {
            mOnFocusChangeListener: OnFocusChangeListener;
            mOnAttachStateChangeListeners: CopyOnWriteArrayList<OnAttachStateChangeListener>;
            mOnLayoutChangeListeners: ArrayList<OnLayoutChangeListener>;
            mOnClickListener: OnClickListener;
            mOnLongClickListener: OnLongClickListener;
            mOnTouchListener: OnTouchListener;
            mOnKeyListener: OnKeyListener;
            mOnGenericMotionListener: OnGenericMotionListener;
        }
        interface OnAttachStateChangeListener {
            onViewAttachedToWindow(v: View): any;
            onViewDetachedFromWindow(v: View): any;
        }
        interface OnLayoutChangeListener {
            onLayoutChange(v: View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): any;
        }
        interface OnClickListener {
            onClick(v: View): any;
        }
        interface OnLongClickListener {
            onLongClick(v: View): boolean;
        }
        interface OnFocusChangeListener {
            onFocusChange(v: View, hasFocus: boolean): any;
        }
        interface OnTouchListener {
            onTouch(v: View, event: MotionEvent): any;
        }
        interface OnKeyListener {
            onKey(v: View, keyCode: number, event: KeyEvent): any;
        }
        interface OnGenericMotionListener {
            onGenericMotion(v: View, event: MotionEvent): any;
        }
        interface Predicate<T> {
            apply(t: T): boolean;
        }
    }
    module View.AttachInfo {
        class InvalidateInfo {
            private static POOL_LIMIT;
            private static sPool;
            target: View;
            left: number;
            top: number;
            right: number;
            bottom: number;
            static obtain(): InvalidateInfo;
            recycle(): void;
        }
    }
}
declare module android.view {
    import View = android.view.View;
    import Rect = android.graphics.Rect;
    import Point = android.graphics.Point;
    interface ViewParent {
        requestLayout(): any;
        isLayoutRequested(): boolean;
        invalidateChild(child: View, r: Rect): any;
        invalidateChildInParent(location: Array<number>, r: Rect): ViewParent;
        getParent(): ViewParent;
        requestChildFocus(child: View, focused: View): any;
        clearChildFocus(child: View): any;
        getChildVisibleRect(child: View, r: Rect, offset: Point): boolean;
        focusSearch(v: View, direction: number): View;
        bringChildToFront(child: View): any;
        focusableViewAvailable(v: View): any;
        childDrawableStateChanged(child: View): any;
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): any;
        requestChildRectangleOnScreen(child: View, rectangle: Rect, immediate: boolean): boolean;
        childHasTransientStateChanged(child: View, hasTransientState: boolean): any;
    }
}
declare module android.view {
    import Rect = android.graphics.Rect;
    import Canvas = android.graphics.Canvas;
    class Surface {
        private mCanvasElement;
        private mLockedRect;
        constructor(canvasElement: HTMLCanvasElement);
        lockCanvas(dirty: Rect): Canvas;
        unlockCanvasAndPost(canvas: Canvas): void;
    }
}
declare module android.view {
    import ViewParent = android.view.ViewParent;
    import View = android.view.View;
    import Rect = android.graphics.Rect;
    import Point = android.graphics.Point;
    import Handler = android.os.Handler;
    import Runnable = java.lang.Runnable;
    class ViewRootImpl implements ViewParent {
        static TAG: string;
        private static DBG;
        static LOCAL_LOGV: boolean;
        static DEBUG_DRAW: boolean;
        static DEBUG_LAYOUT: boolean;
        static DEBUG_INPUT_RESIZE: boolean;
        static DEBUG_ORIENTATION: boolean;
        static DEBUG_CONFIGURATION: boolean;
        static DEBUG_FPS: boolean;
        static ContinueEventToDom: symbol;
        private mView;
        rootElement: HTMLElement;
        private mViewVisibility;
        private mStopped;
        private mWidth;
        private mHeight;
        private mDirty;
        private mAttachInfo;
        private mTempRect;
        private mVisRect;
        private mTraversalScheduled;
        private mWillDrawSoon;
        private mIsInTraversal;
        private mLayoutRequested;
        private mFirst;
        private mFullRedrawNeeded;
        private mIsDrawing;
        private mAdded;
        private mAddedTouchMode;
        private mWinFrame;
        private mInLayout;
        private mLayoutRequesters;
        private mHandlingLayoutInLayoutRequest;
        private mRemoved;
        private mHandler;
        private mFirstInputStage;
        private mFpsStartTime;
        private mFpsPrevTime;
        private mFpsNumFrames;
        private mSurface;
        constructor();
        initSurface(canvasElement: HTMLCanvasElement): void;
        setView(view: View): void;
        getView(): View;
        getHostVisibility(): number;
        private mTraversalRunnable;
        private scheduleTraversals();
        private unscheduleTraversals();
        doTraversal(): void;
        private measureHierarchy(host, lp, desiredWindowWidth, desiredWindowHeight);
        private static getRootMeasureSpec(windowSize, rootDimension);
        private performTraversals();
        private performLayout(lp, desiredWindowWidth, desiredWindowHeight);
        private getValidLayoutRequesters(layoutRequesters, secondLayoutRequests);
        private performMeasure(childWidthMeasureSpec, childHeightMeasureSpec);
        isInLayout(): boolean;
        requestLayoutDuringLayout(view: View): boolean;
        private _showFPSNode;
        trackFPS(): void;
        private performDraw();
        private draw(fullRedrawNeeded);
        private drawSoftware();
        isLayoutRequested(): boolean;
        private mInvalidateOnAnimationRunnable;
        dispatchInvalidateDelayed(view: View, delayMilliseconds: number): void;
        dispatchInvalidateRectDelayed(info: View.AttachInfo.InvalidateInfo, delayMilliseconds: number): void;
        dispatchInvalidateOnAnimation(view: View): void;
        dispatchInvalidateRectOnAnimation(info: View.AttachInfo.InvalidateInfo): void;
        cancelInvalidate(view: View): void;
        getParent(): ViewParent;
        requestLayout(): void;
        invalidate(): void;
        invalidateWorld(view: View): void;
        invalidateChild(child: View, dirty: Rect): void;
        invalidateChildInParent(location: Array<number>, dirty: Rect): ViewParent;
        requestChildFocus(child: View, focused: View): void;
        clearChildFocus(focused: View): void;
        getChildVisibleRect(child: View, r: Rect, offset: Point): boolean;
        focusSearch(focused: View, direction: number): View;
        bringChildToFront(child: View): void;
        focusableViewAvailable(v: View): void;
        static isViewDescendantOf(child: View, parent: View): any;
        childDrawableStateChanged(child: View): void;
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        requestChildRectangleOnScreen(child: View, rectangle: Rect, immediate: boolean): boolean;
        childHasTransientStateChanged(child: View, hasTransientState: boolean): void;
        dispatchResized(frame: Rect): void;
        dispatchInputEvent(event: MotionEvent | KeyEvent | Event): boolean;
        private deliverInputEvent(event);
        private finishInputEvent(event);
        private checkForLeavingTouchModeAndConsume(event);
        private static isNavigationKey(keyEvent);
        private static isTypingKey(keyEvent);
        ensureTouchMode(inTouchMode: boolean): boolean;
        ensureTouchModeLocally(inTouchMode: boolean): boolean;
        private enterTouchMode();
        private static findAncestorToTakeFocusInTouchMode(focused);
        private leaveTouchMode();
        private static RunQueueInstance;
        private mRunQueue;
        static getRunQueue(viewRoot?: ViewRootImpl): ViewRootImpl.RunQueue;
    }
    module ViewRootImpl {
        class RunQueue {
            private mActions;
            post(action: Runnable): void;
            postDelayed(action: Runnable, delayMillis: number): void;
            removeCallbacks(action: Runnable): void;
            executeActions(handler: Handler): void;
        }
    }
}
declare module android.view {
    import View = android.view.View;
    import Rect = android.graphics.Rect;
    class FocusFinder {
        private static sFocusFinder;
        static getInstance(): FocusFinder;
        mFocusedRect: Rect;
        mOtherRect: Rect;
        mBestCandidateRect: Rect;
        private mSequentialFocusComparator;
        private mTempList;
        findNextFocus(root: ViewGroup, focused: View, direction: number): View;
        findNextFocusFromRect(root: ViewGroup, focusedRect: Rect, direction: number): View;
        private _findNextFocus(root, focused, focusedRect, direction);
        private findNextUserSpecifiedFocus(root, focused, direction);
        private __findNextFocus(root, focused, focusedRect, direction, focusables);
        private findNextFocusInRelativeDirection(focusables, root, focused, focusedRect, direction);
        private setFocusBottomRight(root, focusedRect);
        private setFocusTopLeft(root, focusedRect);
        private findNextFocusInAbsoluteDirection(focusables, root, focused, focusedRect, direction);
        private static getNextFocusable(focused, focusables, count);
        private static getPreviousFocusable(focused, focusables, count);
        isBetterCandidate(direction: number, source: Rect, rect1: Rect, rect2: Rect): boolean;
        beamBeats(direction: number, source: Rect, rect1: Rect, rect2: Rect): boolean;
        getWeightedDistanceFor(majorAxisDistance: number, minorAxisDistance: number): number;
        isCandidate(srcRect: Rect, destRect: Rect, direction: number): boolean;
        beamsOverlap(direction: number, rect1: Rect, rect2: Rect): boolean;
        isToDirectionOf(direction: number, src: Rect, dest: Rect): boolean;
        static majorAxisDistance(direction: number, source: Rect, dest: Rect): number;
        static majorAxisDistanceRaw(direction: number, source: Rect, dest: Rect): number;
        static majorAxisDistanceToFarEdge(direction: number, source: Rect, dest: Rect): number;
        static majorAxisDistanceToFarEdgeRaw(direction: number, source: Rect, dest: Rect): number;
        static minorAxisDistance(direction: number, source: Rect, dest: Rect): number;
        findNearestTouchable(root: ViewGroup, x: number, y: number, direction: number, deltas: number[]): View;
        private isTouchCandidate(x, y, destRect, direction);
    }
}
declare module java.lang {
    class Integer {
        static MIN_VALUE: number;
        static MAX_VALUE: number;
        static parseInt(value: string): number;
    }
}
declare module android.view {
    import Canvas = android.graphics.Canvas;
    import Point = android.graphics.Point;
    import Rect = android.graphics.Rect;
    import ArrayList = java.util.ArrayList;
    import AttrBinder = androidui.attr.AttrBinder;
    abstract class ViewGroup extends View implements ViewParent {
        static FLAG_CLIP_CHILDREN: number;
        static FLAG_CLIP_TO_PADDING: number;
        static FLAG_INVALIDATE_REQUIRED: number;
        static FLAG_RUN_ANIMATION: number;
        static FLAG_ANIMATION_DONE: number;
        static FLAG_PADDING_NOT_NULL: number;
        static FLAG_ANIMATION_CACHE: number;
        static FLAG_OPTIMIZE_INVALIDATE: number;
        static FLAG_CLEAR_TRANSFORMATION: number;
        static FLAG_NOTIFY_ANIMATION_LISTENER: number;
        static FLAG_USE_CHILD_DRAWING_ORDER: number;
        static FLAG_SUPPORT_STATIC_TRANSFORMATIONS: number;
        static FLAG_ALPHA_LOWER_THAN_ONE: number;
        static FLAG_ADD_STATES_FROM_CHILDREN: number;
        static FLAG_ALWAYS_DRAWN_WITH_CACHE: number;
        static FLAG_CHILDREN_DRAWN_WITH_CACHE: number;
        static FLAG_NOTIFY_CHILDREN_ON_DRAWABLE_STATE_CHANGE: number;
        static FLAG_MASK_FOCUSABILITY: number;
        static FOCUS_BEFORE_DESCENDANTS: number;
        static FOCUS_AFTER_DESCENDANTS: number;
        static FOCUS_BLOCK_DESCENDANTS: number;
        static FLAG_DISALLOW_INTERCEPT: number;
        static FLAG_SPLIT_MOTION_EVENTS: number;
        static FLAG_PREVENT_DISPATCH_ATTACHED_TO_WINDOW: number;
        static FLAG_LAYOUT_MODE_WAS_EXPLICITLY_SET: number;
        mPersistentDrawingCache: number;
        static PERSISTENT_NO_CACHE: number;
        static PERSISTENT_ANIMATION_CACHE: number;
        static PERSISTENT_SCROLLING_CACHE: number;
        static PERSISTENT_ALL_CACHES: number;
        static LAYOUT_MODE_UNDEFINED: number;
        static LAYOUT_MODE_CLIP_BOUNDS: number;
        static LAYOUT_MODE_DEFAULT: number;
        static CLIP_TO_PADDING_MASK: number;
        mOnHierarchyChangeListener: ViewGroup.OnHierarchyChangeListener;
        private mFocused;
        private mFirstTouchTarget;
        private mLastTouchDownTime;
        private mLastTouchDownIndex;
        private mLastTouchDownX;
        private mLastTouchDownY;
        mGroupFlags: number;
        mLayoutMode: number;
        mChildren: Array<View>;
        mChildrenCount: number;
        mSuppressLayout: boolean;
        private mLayoutCalledWhileSuppressed;
        private mChildCountWithTransientState;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private initViewGroup();
        getDescendantFocusability(): number;
        setDescendantFocusability(focusability: number): void;
        handleFocusGainInternal(direction: number, previouslyFocusedRect: Rect): void;
        requestChildFocus(child: View, focused: View): void;
        focusableViewAvailable(v: View): void;
        focusSearch(direction: number): View;
        focusSearch(focused: View, direction: number): View;
        requestChildRectangleOnScreen(child: View, rectangle: Rect, immediate: boolean): boolean;
        childHasTransientStateChanged(child: View, childHasTransientState: boolean): void;
        hasTransientState(): boolean;
        dispatchUnhandledMove(focused: android.view.View, direction: number): boolean;
        clearChildFocus(child: View): void;
        clearFocus(): void;
        unFocus(): void;
        getFocusedChild(): View;
        hasFocus(): boolean;
        findFocus(): View;
        hasFocusable(): boolean;
        addFocusables(views: ArrayList<View>, direction: number, focusableMode?: number): void;
        requestFocus(direction?: number, previouslyFocusedRect?: Rect): boolean;
        protected onRequestFocusInDescendants(direction: number, previouslyFocusedRect: Rect): boolean;
        addView(view: View): any;
        addView(view: View, index: number): any;
        addView(view: View, params: ViewGroup.LayoutParams): any;
        addView(view: View, index: number, params: ViewGroup.LayoutParams): any;
        addView(view: View, width: number, height: number): any;
        addView(...args: any[]): any;
        protected checkLayoutParams(p: ViewGroup.LayoutParams): boolean;
        setOnHierarchyChangeListener(listener: ViewGroup.OnHierarchyChangeListener): void;
        protected onViewAdded(child: View): void;
        protected onViewRemoved(child: View): void;
        clearCachedLayoutMode(): void;
        addViewInLayout(child: View, index: number, params: ViewGroup.LayoutParams, preventRequestLayout?: boolean): boolean;
        cleanupLayoutState(child: View): void;
        addViewInner(child: View, index: number, params: ViewGroup.LayoutParams, preventRequestLayout: boolean): void;
        private addInArray(child, index);
        private addToBindElement(childElement, insertBeforeElement);
        private removeChildElement(childElement);
        private removeFromArray(index, count?);
        removeView(view: View): void;
        removeViewInLayout(view: View): void;
        removeViewsInLayout(start: number, count: number): void;
        removeViewAt(index: number): void;
        removeViews(start: number, count: number): void;
        private removeViewInternal(view);
        private removeViewsInternal(start, count);
        removeAllViews(): void;
        removeAllViewsInLayout(): void;
        detachViewFromParent(child: View | number): void;
        removeDetachedView(child: View, animate: boolean): void;
        attachViewToParent(child: View, index: number, params: ViewGroup.LayoutParams): void;
        detachViewsFromParent(start: number, count?: number): void;
        detachAllViewsFromParent(): void;
        indexOfChild(child: View): number;
        getChildCount(): number;
        getChildAt(index: number): View;
        bringChildToFront(child: View): void;
        hasBooleanFlag(flag: number): boolean;
        setBooleanFlag(flag: number, value: boolean): void;
        dispatchGenericPointerEvent(event: MotionEvent): boolean;
        private dispatchTransformedGenericPointerEvent(event, child);
        dispatchKeyEvent(event: android.view.KeyEvent): boolean;
        dispatchWindowFocusChanged(hasFocus: boolean): void;
        addTouchables(views: java.util.ArrayList<android.view.View>): void;
        onInterceptTouchEvent(ev: MotionEvent): boolean;
        dispatchTouchEvent(ev: MotionEvent): boolean;
        private resetTouchState();
        private static resetCancelNextUpFlag(view);
        private clearTouchTargets();
        private cancelAndClearTouchTargets(event);
        private getTouchTarget(child);
        private addTouchTarget(child, pointerIdBits);
        private removePointersFromTouchTargets(pointerIdBits);
        private cancelTouchTarget(view);
        private static canViewReceivePointerEvents(child);
        isTransformedTouchPointInView(x: number, y: number, child: View, outLocalPoint: Point): boolean;
        private dispatchTransformedTouchEvent(event, cancel, child, desiredPointerIdBits);
        isAlwaysDrawnWithCacheEnabled(): boolean;
        setAlwaysDrawnWithCacheEnabled(always: boolean): void;
        isChildrenDrawnWithCacheEnabled(): boolean;
        setChildrenDrawnWithCacheEnabled(enabled: boolean): void;
        setChildrenDrawingCacheEnabled(enabled: boolean): void;
        getPersistentDrawingCache(): number;
        setPersistentDrawingCache(drawingCacheToKeep: number): void;
        isChildrenDrawingOrderEnabled(): boolean;
        setChildrenDrawingOrderEnabled(enabled: boolean): void;
        getChildDrawingOrder(childCount: number, i: number): number;
        protected generateLayoutParams(p: ViewGroup.LayoutParams): ViewGroup.LayoutParams;
        protected generateDefaultLayoutParams(): ViewGroup.LayoutParams;
        measureChildren(widthMeasureSpec: number, heightMeasureSpec: number): void;
        protected measureChild(child: View, parentWidthMeasureSpec: number, parentHeightMeasureSpec: number): void;
        protected measureChildWithMargins(child: View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
        static getChildMeasureSpec(spec: number, padding: number, childDimension: number): number;
        dispatchAttachedToWindow(info: View.AttachInfo, visibility: number): void;
        protected onAttachedToWindow(): void;
        protected onDetachedFromWindow(): void;
        dispatchDetachedFromWindow(): void;
        dispatchDisplayHint(hint: number): void;
        onChildVisibilityChanged(child: View, oldVisibility: number, newVisibility: number): void;
        dispatchVisibilityChanged(changedView: View, visibility: number): void;
        dispatchSetSelected(selected: boolean): void;
        dispatchSetActivated(activated: boolean): void;
        dispatchSetPressed(pressed: boolean): void;
        dispatchCancelPendingInputEvents(): void;
        offsetDescendantRectToMyCoords(descendant: View, rect: Rect): void;
        offsetRectIntoDescendantCoords(descendant: View, rect: Rect): void;
        offsetRectBetweenParentAndChild(descendant: View, rect: Rect, offsetFromChildToParent: boolean, clipToBounds: boolean): void;
        offsetChildrenTopAndBottom(offset: number): void;
        suppressLayout(suppress: boolean): void;
        isLayoutSuppressed(): boolean;
        layout(l: number, t: number, r: number, b: number): void;
        canAnimate(): boolean;
        protected abstract onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        getChildVisibleRect(child: View, r: Rect, offset: Point): boolean;
        dispatchDraw(canvas: Canvas): void;
        drawChild(canvas: Canvas, child: View, drawingTime: number): boolean;
        protected drawableStateChanged(): void;
        jumpDrawablesToCurrentState(): void;
        protected onCreateDrawableState(extraSpace: number): Array<number>;
        setAddStatesFromChildren(addsStates: boolean): void;
        addStatesFromChildren(): boolean;
        childDrawableStateChanged(child: android.view.View): void;
        getClipChildren(): boolean;
        setClipChildren(clipChildren: boolean): void;
        setClipToPadding(clipToPadding: boolean): void;
        isClipToPadding(): boolean;
        invalidateChild(child: View, dirty: Rect): void;
        invalidateChildInParent(location: Array<number>, dirty: Rect): ViewParent;
        invalidateChildFast(child: View, dirty: Rect): void;
        invalidateChildInParentFast(left: number, top: number, dirty: Rect): ViewParent;
        findViewByPredicateTraversal(predicate: View.Predicate<View>, childToSkip: View): View;
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        shouldDelayChildPressedState(): boolean;
        onSetLayoutParams(child: View, layoutParams: ViewGroup.LayoutParams): void;
    }
    module ViewGroup {
        class LayoutParams {
            static FILL_PARENT: number;
            static MATCH_PARENT: number;
            static WRAP_CONTENT: number;
            private _width;
            private _widthOrig;
            private _height;
            private _heightOrig;
            width: number;
            height: number;
            _measuringParentWidthMeasureSpec: number;
            _measuringParentHeightMeasureSpec: number;
            _measuringMeasureSpec: android.util.DisplayMetrics;
            _attrBinder: AttrBinder;
            constructor();
            constructor(src: LayoutParams);
            constructor(width: number, height: number);
            parseAttributeFrom(node: Node, rootElement: HTMLElement): void;
        }
        class MarginLayoutParams extends LayoutParams {
            private _leftMargin;
            private _topMargin;
            private _rightMargin;
            private _bottomMargin;
            private _leftMarginOrig;
            private _topMarginOrig;
            private _rightMarginOrig;
            private _bottomMarginOrig;
            static DEFAULT_MARGIN_RELATIVE: number;
            leftMargin: number;
            topMargin: number;
            rightMargin: number;
            bottomMargin: number;
            constructor();
            constructor(src: LayoutParams);
            constructor(width: number, height: number);
            constructor(...args: any[]);
            setMargins(left: number, top: number, right: number, bottom: number): void;
            setLayoutDirection(layoutDirection: number): void;
            getLayoutDirection(): number;
            isLayoutRtl(): boolean;
            resolveLayoutDirection(layoutDirection: number): void;
        }
        interface OnHierarchyChangeListener {
            onChildViewAdded(parent: View, child: View): any;
            onChildViewRemoved(parent: View, child: View): any;
        }
    }
}
declare module android.view {
    import Drawable = android.graphics.drawable.Drawable;
    class ViewOverlay {
        mOverlayViewGroup: ViewOverlay.OverlayViewGroup;
        constructor(hostView: View);
        getOverlayView(): ViewGroup;
        add(drawable: Drawable): void;
        remove(drawable: Drawable): void;
        clear(): void;
        isEmpty(): boolean;
    }
    module ViewOverlay {
        class OverlayViewGroup extends ViewGroup {
            mHostView: View;
            mDrawables: Set<Drawable>;
            constructor(hostView: View);
            private addDrawable(drawable);
            addView(child: View): void;
            add(drawable: Drawable): any;
            add(child: View): any;
            clear(): void;
            isEmpty(): boolean;
            protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        }
    }
}
declare module android.view {
    import MotionEvent = android.view.MotionEvent;
    class VelocityTracker {
        private static TAG;
        private static DEBUG;
        private static localLOGV;
        private static NUM_PAST;
        private static MAX_AGE_MILLISECONDS;
        private static POINTER_POOL_CAPACITY;
        private static sPool;
        private static sRecycledPointerListHead;
        private static sRecycledPointerCount;
        private mPointerListHead;
        private mLastTouchIndex;
        private mGeneration;
        private mNext;
        static obtain(): VelocityTracker;
        recycle(): void;
        setNextPoolable(element: VelocityTracker): void;
        getNextPoolable(): VelocityTracker;
        constructor();
        clear(): void;
        addMovement(ev: MotionEvent): void;
        computeCurrentVelocity(units: number, maxVelocity?: number): void;
        getXVelocity(id?: number): number;
        getYVelocity(id?: number): number;
        private getPointer(id);
        private static obtainPointer();
        private static releasePointer(pointer);
        private static releasePointerList(pointer);
    }
}
declare module android.view {
    import Handler = android.os.Handler;
    import Message = android.os.Message;
    import MotionEvent = android.view.MotionEvent;
    class GestureDetector {
        private mTouchSlopSquare;
        private mDoubleTapTouchSlopSquare;
        private mDoubleTapSlopSquare;
        private mMinimumFlingVelocity;
        private mMaximumFlingVelocity;
        private static LONGPRESS_TIMEOUT;
        private static TAP_TIMEOUT;
        private static DOUBLE_TAP_TIMEOUT;
        private static DOUBLE_TAP_MIN_TIME;
        private static SHOW_PRESS;
        private static LONG_PRESS;
        private static TAP;
        private mHandler;
        private mListener;
        private mDoubleTapListener;
        private mStillDown;
        private mDeferConfirmSingleTap;
        private mInLongPress;
        private mAlwaysInTapRegion;
        private mAlwaysInBiggerTapRegion;
        private mCurrentDownEvent;
        private mPreviousUpEvent;
        private mIsDoubleTapping;
        private mLastFocusX;
        private mLastFocusY;
        private mDownFocusX;
        private mDownFocusY;
        private mIsLongpressEnabled;
        private mVelocityTracker;
        constructor(listener: GestureDetector.OnGestureListener, handler?: any);
        private init();
        setOnDoubleTapListener(onDoubleTapListener: GestureDetector.OnDoubleTapListener): void;
        setIsLongpressEnabled(isLongpressEnabled: boolean): void;
        isLongpressEnabled(): boolean;
        onTouchEvent(ev: MotionEvent): boolean;
        private cancel();
        private cancelTaps();
        private isConsideredDoubleTap(firstDown, firstUp, secondDown);
        private dispatchLongPress();
    }
    module GestureDetector {
        interface OnGestureListener {
            onDown(e: MotionEvent): boolean;
            onShowPress(e: MotionEvent): void;
            onSingleTapUp(e: MotionEvent): boolean;
            onScroll(e1: MotionEvent, e2: MotionEvent, distanceX: number, distanceY: number): boolean;
            onLongPress(e: MotionEvent): void;
            onFling(e1: MotionEvent, e2: MotionEvent, velocityX: number, velocityY: number): boolean;
        }
        interface OnDoubleTapListener {
            onSingleTapConfirmed(e: MotionEvent): boolean;
            onDoubleTap(e: MotionEvent): boolean;
            onDoubleTapEvent(e: MotionEvent): boolean;
        }
        class SimpleOnGestureListener implements GestureDetector.OnGestureListener, GestureDetector.OnDoubleTapListener {
            onSingleTapUp(e: MotionEvent): boolean;
            onLongPress(e: MotionEvent): void;
            onScroll(e1: MotionEvent, e2: MotionEvent, distanceX: number, distanceY: number): boolean;
            onFling(e1: MotionEvent, e2: MotionEvent, velocityX: number, velocityY: number): boolean;
            onShowPress(e: MotionEvent): void;
            onDown(e: MotionEvent): boolean;
            onDoubleTap(e: MotionEvent): boolean;
            onDoubleTapEvent(e: MotionEvent): boolean;
            onSingleTapConfirmed(e: MotionEvent): boolean;
        }
        class GestureHandler extends Handler {
            _GestureDetector_this: GestureDetector;
            constructor(arg: GestureDetector);
            handleMessage(msg: Message): void;
        }
    }
}
declare module android.widget {
    import ViewGroup = android.view.ViewGroup;
    import Drawable = android.graphics.drawable.Drawable;
    import Canvas = android.graphics.Canvas;
    class FrameLayout extends ViewGroup {
        static DEFAULT_CHILD_GRAVITY: number;
        mMeasureAllChildren: boolean;
        mForeground: Drawable;
        private mForegroundPaddingLeft;
        private mForegroundPaddingTop;
        private mForegroundPaddingRight;
        private mForegroundPaddingBottom;
        private mSelfBounds;
        private mOverlayBounds;
        private mForegroundGravity;
        mForegroundInPadding: boolean;
        mForegroundBoundsChanged: boolean;
        private mMatchParentChildren;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        getForegroundGravity(): number;
        setForegroundGravity(foregroundGravity: number): void;
        protected verifyDrawable(who: Drawable): boolean;
        jumpDrawablesToCurrentState(): void;
        protected drawableStateChanged(): void;
        protected generateDefaultLayoutParams(): FrameLayout.LayoutParams;
        setForeground(drawable: Drawable): void;
        getForeground(): Drawable;
        getPaddingLeftWithForeground(): number;
        getPaddingRightWithForeground(): number;
        getPaddingTopWithForeground(): number;
        getPaddingBottomWithForeground(): number;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        protected onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
        layoutChildren(left: number, top: number, right: number, bottom: number, forceLeftGravity: boolean): void;
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        draw(canvas: Canvas): void;
        setMeasureAllChildren(measureAll: boolean): void;
        getMeasureAllChildren(): boolean;
        shouldDelayChildPressedState(): boolean;
        protected checkLayoutParams(p: ViewGroup.LayoutParams): boolean;
        protected generateLayoutParams(p: ViewGroup.LayoutParams): FrameLayout.LayoutParams;
    }
    module FrameLayout {
        class LayoutParams extends ViewGroup.MarginLayoutParams {
            gravity: number;
            constructor();
            constructor(source: ViewGroup.LayoutParams);
            constructor(width: number, height: number, gravity?: number);
        }
    }
}
declare module androidui.util {
    class NumberChecker {
        static warnNotNumber(...n: number[]): boolean;
        static assetNotNumber(...ns: number[]): void;
        static checkIsNumber(...ns: number[]): boolean;
    }
}
declare module android.widget {
    import Interpolator = android.view.animation.Interpolator;
    class OverScroller {
        private mMode;
        private mScrollerX;
        private mScrollerY;
        private mInterpolator;
        private mFlywheel;
        static DEFAULT_DURATION: number;
        static SCROLL_MODE: number;
        static FLING_MODE: number;
        constructor(interpolator?: Interpolator, flywheel?: boolean);
        setInterpolator(interpolator: Interpolator): void;
        setFriction(friction: number): void;
        isFinished(): boolean;
        forceFinished(finished: boolean): void;
        getCurrX(): number;
        getCurrY(): number;
        getCurrVelocity(): number;
        getStartX(): number;
        getStartY(): number;
        getFinalX(): number;
        getFinalY(): number;
        getDuration(): number;
        computeScrollOffset(): boolean;
        startScroll(startX: number, startY: number, dx: number, dy: number, duration?: number): void;
        springBack(startX: number, startY: number, minX: number, maxX: number, minY: number, maxY: number): boolean;
        fling(startX: number, startY: number, velocityX: number, velocityY: number, minX: number, maxX: number, minY: number, maxY: number, overX?: number, overY?: number): void;
        notifyHorizontalEdgeReached(startX: number, finalX: number, overX: number): void;
        notifyVerticalEdgeReached(startY: number, finalY: number, overY: number): void;
        isOverScrolled(): boolean;
        abortAnimation(): void;
        timePassed(): number;
        isScrollingInDirection(xvel: number, yvel: number): boolean;
    }
}
declare module android.widget {
    import View = android.view.View;
    import MotionEvent = android.view.MotionEvent;
    import Rect = android.graphics.Rect;
    import KeyEvent = android.view.KeyEvent;
    class ScrollView extends FrameLayout {
        static ANIMATED_SCROLL_GAP: number;
        static MAX_SCROLL_FACTOR: number;
        private static TAG;
        private static INVALID_POINTER;
        private mLastScroll;
        private mTempRect;
        private mScroller;
        private mLastMotionY;
        private mIsLayoutDirty;
        private mChildToScrollTo;
        private mIsBeingDragged;
        private mVelocityTracker;
        private mFillViewport;
        private mSmoothScrollingEnabled;
        private mMinimumVelocity;
        private mMaximumVelocity;
        private mOverscrollDistance;
        private _mOverflingDistance;
        private mOverflingDistance;
        private mActivePointerId;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        shouldDelayChildPressedState(): boolean;
        getMaxScrollAmount(): number;
        private initScrollView();
        addView(...args: any[]): any;
        private canScroll();
        isFillViewport(): boolean;
        setFillViewport(fillViewport: boolean): void;
        isSmoothScrollingEnabled(): boolean;
        setSmoothScrollingEnabled(smoothScrollingEnabled: boolean): void;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        dispatchKeyEvent(event: KeyEvent): boolean;
        executeKeyEvent(event: KeyEvent): boolean;
        private inChild(x, y);
        private initOrResetVelocityTracker();
        private initVelocityTrackerIfNotExists();
        private recycleVelocityTracker();
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        onInterceptTouchEvent(ev: MotionEvent): boolean;
        onTouchEvent(ev: MotionEvent): boolean;
        private onSecondaryPointerUp(ev);
        onGenericMotionEvent(event: MotionEvent): boolean;
        protected onOverScrolled(scrollX: number, scrollY: number, clampedX: boolean, clampedY: boolean): void;
        private getScrollRange();
        private findFocusableViewInBounds(topFocus, top, bottom);
        pageScroll(direction: number): boolean;
        fullScroll(direction: number): boolean;
        private scrollAndFocus(direction, top, bottom);
        arrowScroll(direction: number): boolean;
        private isOffScreen(descendant);
        private isWithinDeltaOfScreen(descendant, delta, height);
        private doScrollY(delta);
        smoothScrollBy(dx: number, dy: number): void;
        smoothScrollTo(x: number, y: number): void;
        protected computeVerticalScrollRange(): number;
        protected computeVerticalScrollOffset(): number;
        protected measureChild(child: View, parentWidthMeasureSpec: number, parentHeightMeasureSpec: number): void;
        protected measureChildWithMargins(child: View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
        computeScroll(): void;
        private scrollToChild(child);
        private scrollToChildRect(rect, immediate);
        computeScrollDeltaToGetChildRectOnScreen(rect: Rect): number;
        requestChildFocus(child: View, focused: View): void;
        protected onRequestFocusInDescendants(direction: number, previouslyFocusedRect: Rect): boolean;
        requestChildRectangleOnScreen(child: View, rectangle: Rect, immediate: boolean): boolean;
        requestLayout(): void;
        protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        private static isViewDescendantOf(child, parent);
        fling(velocityY: number): void;
        private endDrag();
        scrollTo(x: number, y: number): void;
        private static clamp(n, my, child);
        canScrollVertically(direction: number): boolean;
    }
}
declare module android.widget {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import Drawable = android.graphics.drawable.Drawable;
    import Canvas = android.graphics.Canvas;
    class LinearLayout extends ViewGroup {
        static HORIZONTAL: number;
        static VERTICAL: number;
        static SHOW_DIVIDER_NONE: number;
        static SHOW_DIVIDER_BEGINNING: number;
        static SHOW_DIVIDER_MIDDLE: number;
        static SHOW_DIVIDER_END: number;
        private mBaselineAligned;
        private mBaselineAlignedChildIndex;
        private mBaselineChildTop;
        private mOrientation;
        private mGravity;
        private mTotalLength;
        private mWeightSum;
        private mUseLargestChild;
        private mMaxAscent;
        private mMaxDescent;
        private static VERTICAL_GRAVITY_COUNT;
        private static INDEX_CENTER_VERTICAL;
        private static INDEX_TOP;
        private static INDEX_BOTTOM;
        private static INDEX_FILL;
        private mDivider;
        private mDividerWidth;
        private mDividerHeight;
        private mShowDividers;
        private mDividerPadding;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        setShowDividers(showDividers: number): void;
        shouldDelayChildPressedState(): boolean;
        getShowDividers(): number;
        getDividerDrawable(): Drawable;
        setDividerDrawable(divider: Drawable): void;
        setDividerPadding(padding: number): void;
        getDividerPadding(): number;
        getDividerWidth(): number;
        protected onDraw(canvas: Canvas): void;
        drawDividersVertical(canvas: Canvas): void;
        drawDividersHorizontal(canvas: Canvas): void;
        drawHorizontalDivider(canvas: Canvas, top: number): void;
        drawVerticalDivider(canvas: Canvas, left: number): void;
        isBaselineAligned(): boolean;
        setBaselineAligned(baselineAligned: boolean): void;
        isMeasureWithLargestChildEnabled(): boolean;
        setMeasureWithLargestChildEnabled(enabled: boolean): void;
        getBaseline(): number;
        getBaselineAlignedChildIndex(): number;
        setBaselineAlignedChildIndex(i: number): void;
        getVirtualChildAt(index: number): View;
        getVirtualChildCount(): number;
        getWeightSum(): number;
        setWeightSum(weightSum: number): void;
        protected onMeasure(widthMeasureSpec: any, heightMeasureSpec: any): void;
        hasDividerBeforeChildAt(childIndex: number): boolean;
        measureVertical(widthMeasureSpec: number, heightMeasureSpec: number): void;
        forceUniformWidth(count: number, heightMeasureSpec: number): void;
        measureHorizontal(widthMeasureSpec: number, heightMeasureSpec: number): void;
        private forceUniformHeight(count, widthMeasureSpec);
        getChildrenSkipCount(child: View, index: number): number;
        measureNullChild(childIndex: number): number;
        measureChildBeforeLayout(child: View, childIndex: number, widthMeasureSpec: number, totalWidth: number, heightMeasureSpec: number, totalHeight: number): void;
        getLocationOffset(child: View): number;
        getNextLocationOffset(child: View): number;
        protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        layoutVertical(left: number, top: number, right: number, bottom: number): void;
        layoutHorizontal(left: number, top: number, right: number, bottom: number): void;
        private setChildFrame(child, left, top, width, height);
        setOrientation(orientation: number): void;
        getOrientation(): number;
        setGravity(gravity: number): void;
        setHorizontalGravity(horizontalGravity: number): void;
        setVerticalGravity(verticalGravity: number): void;
        protected generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
        protected generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
        protected checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
    }
    module LinearLayout {
        class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
            weight: number;
            gravity: number;
            constructor();
            constructor(source: ViewGroup.LayoutParams);
            constructor(width: number, height: number, weight?: number);
        }
    }
}
declare module android.util {
    class ArrayMap<K, V> {
        private map;
        constructor(capacity?: number);
        clear(): void;
        erase(): void;
        ensureCapacity(minimumCapacity: number): void;
        containsKey(key: K): boolean;
        indexOfValue(value: V): number;
        containsValue(value: V): boolean;
        get(key: K): V;
        keyAt(index: number): K;
        valueAt(index: number): V;
        setValueAt(index: number, value: V): V;
        isEmpty(): boolean;
        put(key: K, value: V): V;
        append(key: K, value: V): void;
        remove(key: K): V;
        removeAt(index: number): V;
        keySet(): Set<K>;
        size(): number;
    }
}
declare module java.util {
    class ArrayDeque<E> extends ArrayList<E> {
        addFirst(e: E): void;
        addLast(e: E): void;
        offerFirst(e: E): boolean;
        offerLast(e: E): boolean;
        removeFirst(): E;
        removeLast(): E;
        pollFirst(): E;
        pollLast(): E;
        getFirst(): E;
        getLast(): E;
        peekFirst(): E;
        peekLast(): E;
        removeFirstOccurrence(o: any): boolean;
        removeLastOccurrence(o: any): boolean;
        offer(e: E): boolean;
        remove(): E;
        poll(): E;
        element(): E;
        peek(): E;
        push(e: E): void;
        pop(): E;
        private delete(i);
    }
}
declare module android.util {
    class MathUtils {
        private static DEG_TO_RAD;
        private static RAD_TO_DEG;
        constructor();
        static abs(v: number): number;
        static constrain(amount: number, low: number, high: number): number;
        static log(a: number): number;
        static exp(a: number): number;
        static pow(a: number, b: number): number;
        static max(a: number, b: number, c?: number): number;
        static min(a: number, b: number, c?: number): number;
        static dist(x1: number, y1: number, x2: number, y2: number): number;
        static dist3(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        static mag(a: number, b: number, c?: number): number;
        static sq(v: number): number;
        static radians(degrees: number): number;
        static degrees(radians: number): number;
        static acos(value: number): number;
        static asin(value: number): number;
        static atan(value: number): number;
        static atan2(a: number, b: number): number;
        static tan(angle: number): number;
        static lerp(start: number, stop: number, amount: number): number;
        static norm(start: number, stop: number, value: number): number;
        static map(minStart: number, minStop: number, maxStart: number, maxStop: number, value: number): number;
        static random(howbig: number): number;
        static random(howsmall: number, howbig: number): number;
    }
}
declare module android.util {
    class SparseBooleanArray extends SparseArray<boolean> {
    }
}
declare module android.view {
    class SoundEffectConstants {
        static CLICK: number;
        static NAVIGATION_LEFT: number;
        static NAVIGATION_UP: number;
        static NAVIGATION_RIGHT: number;
        static NAVIGATION_DOWN: number;
        static getContantForFocusDirection(direction: number): number;
    }
}
declare module android.os {
    class Trace {
        private static TAG;
        static TRACE_TAG_NEVER: number;
        static TRACE_TAG_ALWAYS: number;
        static TRACE_TAG_GRAPHICS: number;
        static TRACE_TAG_INPUT: number;
        static TRACE_TAG_VIEW: number;
        static TRACE_TAG_WEBVIEW: number;
        static TRACE_TAG_WINDOW_MANAGER: number;
        static TRACE_TAG_ACTIVITY_MANAGER: number;
        static TRACE_TAG_SYNC_MANAGER: number;
        static TRACE_TAG_AUDIO: number;
        static TRACE_TAG_VIDEO: number;
        static TRACE_TAG_CAMERA: number;
        static TRACE_TAG_HAL: number;
        static TRACE_TAG_APP: number;
        static TRACE_TAG_RESOURCES: number;
        static TRACE_TAG_DALVIK: number;
        static TRACE_TAG_RS: number;
        private static TRACE_TAG_NOT_READY;
        private static MAX_SECTION_NAME_LEN;
        private static sEnabledTags;
        private static nativeGetEnabledTags();
        private static nativeTraceCounter(tag, name, value);
        private static nativeTraceBegin(tag, name);
        private static nativeTraceEnd(tag);
        private static nativeAsyncTraceBegin(tag, name, cookie);
        private static nativeAsyncTraceEnd(tag, name, cookie);
        private static nativeSetAppTracingAllowed(allowed);
        private static nativeSetTracingEnabled(allowed);
        private static cacheEnabledTags();
        static isTagEnabled(traceTag: number): boolean;
        static traceCounter(traceTag: number, counterName: string, counterValue: number): void;
        static setAppTracingAllowed(allowed: boolean): void;
        static setTracingEnabled(enabled: boolean): void;
        static traceBegin(traceTag: number, methodName: string): void;
        static traceEnd(traceTag: number): void;
        static asyncTraceBegin(traceTag: number, methodName: string, cookie: number): void;
        static asyncTraceEnd(traceTag: number, methodName: string, cookie: number): void;
        static beginSection(sectionName: string): void;
        static endSection(): void;
    }
}
declare module android.text {
    class InputType {
        static TYPE_MASK_CLASS: number;
        static TYPE_MASK_VARIATION: number;
        static TYPE_MASK_FLAGS: number;
        static TYPE_NULL: number;
        static TYPE_CLASS_TEXT: number;
        static TYPE_TEXT_FLAG_CAP_CHARACTERS: number;
        static TYPE_TEXT_FLAG_CAP_WORDS: number;
        static TYPE_TEXT_FLAG_CAP_SENTENCES: number;
        static TYPE_TEXT_FLAG_AUTO_CORRECT: number;
        static TYPE_TEXT_FLAG_AUTO_COMPLETE: number;
        static TYPE_TEXT_FLAG_MULTI_LINE: number;
        static TYPE_TEXT_FLAG_IME_MULTI_LINE: number;
        static TYPE_TEXT_FLAG_NO_SUGGESTIONS: number;
        static TYPE_TEXT_VARIATION_NORMAL: number;
        static TYPE_TEXT_VARIATION_URI: number;
        static TYPE_TEXT_VARIATION_EMAIL_ADDRESS: number;
        static TYPE_TEXT_VARIATION_EMAIL_SUBJECT: number;
        static TYPE_TEXT_VARIATION_SHORT_MESSAGE: number;
        static TYPE_TEXT_VARIATION_LONG_MESSAGE: number;
        static TYPE_TEXT_VARIATION_PERSON_NAME: number;
        static TYPE_TEXT_VARIATION_POSTAL_ADDRESS: number;
        static TYPE_TEXT_VARIATION_PASSWORD: number;
        static TYPE_TEXT_VARIATION_VISIBLE_PASSWORD: number;
        static TYPE_TEXT_VARIATION_WEB_EDIT_TEXT: number;
        static TYPE_TEXT_VARIATION_FILTER: number;
        static TYPE_TEXT_VARIATION_PHONETIC: number;
        static TYPE_TEXT_VARIATION_WEB_EMAIL_ADDRESS: number;
        static TYPE_TEXT_VARIATION_WEB_PASSWORD: number;
        static TYPE_CLASS_NUMBER: number;
        static TYPE_NUMBER_FLAG_SIGNED: number;
        static TYPE_NUMBER_FLAG_DECIMAL: number;
        static TYPE_NUMBER_VARIATION_NORMAL: number;
        static TYPE_NUMBER_VARIATION_PASSWORD: number;
        static TYPE_CLASS_PHONE: number;
        static TYPE_CLASS_DATETIME: number;
        static TYPE_DATETIME_VARIATION_NORMAL: number;
        static TYPE_DATETIME_VARIATION_DATE: number;
        static TYPE_DATETIME_VARIATION_TIME: number;
    }
}
declare module android.text {
    interface Spanned extends String {
        getSpans<T>(start: number, end: number, type: any): T[];
        getSpanStart(tag: any): number;
        getSpanEnd(tag: any): number;
        getSpanFlags(tag: any): number;
        nextSpanTransition(start: number, limit: number, type: any): number;
    }
    module Spanned {
        function isImplements(obj: any): any;
        var SPAN_POINT_MARK_MASK: number;
        var SPAN_MARK_MARK: number;
        var SPAN_MARK_POINT: number;
        var SPAN_POINT_MARK: number;
        var SPAN_POINT_POINT: number;
        var SPAN_PARAGRAPH: number;
        var SPAN_INCLUSIVE_EXCLUSIVE: number;
        var SPAN_INCLUSIVE_INCLUSIVE: number;
        var SPAN_EXCLUSIVE_EXCLUSIVE: number;
        var SPAN_EXCLUSIVE_INCLUSIVE: number;
        var SPAN_COMPOSING: number;
        var SPAN_INTERMEDIATE: number;
        var SPAN_USER_SHIFT: number;
        var SPAN_USER: number;
        var SPAN_PRIORITY_SHIFT: number;
        var SPAN_PRIORITY: number;
    }
}
declare module android.text {
    class TextPaint extends android.graphics.Paint {
        baselineShift: number;
        bgColor: number;
        linkColor: number;
        underlineColor: number;
        underlineThickness: number;
        set(tp: TextPaint): void;
        setUnderlineText(color: number, thickness: number): void;
    }
}
declare module android.text.style {
    import UpdateAppearance = android.text.style.UpdateAppearance;
    interface UpdateLayout extends UpdateAppearance {
    }
}
declare module android.text.style {
    interface UpdateAppearance {
    }
}
declare module android.text.style {
    import TextPaint = android.text.TextPaint;
    abstract class CharacterStyle {
        static type: symbol;
        mType: symbol;
        abstract updateDrawState(tp: TextPaint): void;
        static wrap(cs: CharacterStyle): CharacterStyle;
        getUnderlying(): CharacterStyle;
    }
    module CharacterStyle {
        class Passthrough_CharacterStyle extends CharacterStyle {
            private mStyle;
            constructor(cs: CharacterStyle);
            updateDrawState(tp: TextPaint): void;
            getUnderlying(): CharacterStyle;
        }
    }
}
declare module android.text.style {
    import TextPaint = android.text.TextPaint;
    import CharacterStyle = android.text.style.CharacterStyle;
    import UpdateLayout = android.text.style.UpdateLayout;
    abstract class MetricAffectingSpan extends CharacterStyle implements UpdateLayout {
        static type: symbol;
        mType: symbol;
        abstract updateMeasureState(p: TextPaint): void;
        getUnderlying(): MetricAffectingSpan;
    }
    module MetricAffectingSpan {
        class Passthrough_MetricAffectingSpan extends MetricAffectingSpan {
            private mStyle;
            constructor(cs: MetricAffectingSpan);
            updateDrawState(tp: TextPaint): void;
            updateMeasureState(tp: TextPaint): void;
            getUnderlying(): MetricAffectingSpan;
        }
    }
}
declare module android.text.style {
    import Paint = android.graphics.Paint;
    import Canvas = android.graphics.Canvas;
    import TextPaint = android.text.TextPaint;
    import MetricAffectingSpan = android.text.style.MetricAffectingSpan;
    abstract class ReplacementSpan extends MetricAffectingSpan {
        static type: symbol;
        mType: symbol;
        abstract getSize(paint: Paint, text: String, start: number, end: number, fm: Paint.FontMetricsInt): number;
        abstract draw(canvas: Canvas, text: String, start: number, end: number, x: number, top: number, y: number, bottom: number, paint: Paint): void;
        updateMeasureState(p: TextPaint): void;
        updateDrawState(ds: TextPaint): void;
    }
}
declare module android.text.style {
    interface ParagraphStyle {
    }
    module ParagraphStyle {
        var type: symbol;
    }
}
declare module android.text.style {
    import ParagraphStyle = android.text.style.ParagraphStyle;
    interface WrapTogetherSpan extends ParagraphStyle {
    }
}
declare module android.text.style {
    import Paint = android.graphics.Paint;
    import Canvas = android.graphics.Canvas;
    import Layout = android.text.Layout;
    import ParagraphStyle = android.text.style.ParagraphStyle;
    import WrapTogetherSpan = android.text.style.WrapTogetherSpan;
    interface LeadingMarginSpan extends ParagraphStyle {
        getLeadingMargin(first: boolean): number;
        drawLeadingMargin(c: Canvas, p: Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: String, start: number, end: number, first: boolean, layout: Layout): void;
    }
    module LeadingMarginSpan {
        function isImpl(obj: any): boolean;
        var type: symbol;
        interface LeadingMarginSpan2 extends LeadingMarginSpan, WrapTogetherSpan {
            getLeadingMarginLineCount(): number;
        }
        module LeadingMarginSpan2 {
            function isImpl(obj: any): boolean;
        }
        class Standard implements LeadingMarginSpan {
            private mFirst;
            private mRest;
            constructor(first: number, rest?: number);
            getSpanTypeId(): number;
            describeContents(): number;
            getLeadingMargin(first: boolean): number;
            drawLeadingMargin(c: Canvas, p: Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: String, start: number, end: number, first: boolean, layout: Layout): void;
        }
    }
}
declare module android.text.style {
    import Paint = android.graphics.Paint;
    import Canvas = android.graphics.Canvas;
    import ParagraphStyle = android.text.style.ParagraphStyle;
    interface LineBackgroundSpan extends ParagraphStyle {
        drawBackground(c: Canvas, p: Paint, left: number, right: number, top: number, baseline: number, bottom: number, text: String, start: number, end: number, lnum: number): void;
    }
    module LineBackgroundSpan {
        var type: symbol;
    }
}
declare module android.text.style {
    import ParagraphStyle = android.text.style.ParagraphStyle;
    interface TabStopSpan extends ParagraphStyle {
        getTabStop(): number;
    }
    module TabStopSpan {
        var type: symbol;
        function isImpl(obj: any): boolean;
        class Standard implements TabStopSpan {
            constructor(where: number);
            getTabStop(): number;
            private mTab;
        }
    }
}
declare module java.util {
    class Arrays {
        static sort(a: number[], fromIndex: number, toIndex: number): void;
        private static rangeCheck(arrayLength, fromIndex, toIndex);
    }
}
declare module java.lang {
    class Float {
        static MIN_VALUE: number;
        static MAX_VALUE: number;
        static parseFloat(value: string): number;
    }
}
declare module android.text {
    import Spanned = android.text.Spanned;
    class SpanSet<E> {
        private classType;
        numberOfSpans: number;
        spans: E[];
        spanStarts: number[];
        spanEnds: number[];
        spanFlags: number[];
        constructor(type: any);
        init(spanned: Spanned, start: number, limit: number): void;
        hasSpansIntersecting(start: number, end: number): boolean;
        getNextTransition(start: number, limit: number): number;
        recycle(): void;
    }
}
declare module android.text {
    interface TextDirectionHeuristic {
        isRtl(cs: string, start: number, count: number): boolean;
    }
}
declare module android.text {
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    class TextDirectionHeuristics {
        static LTR: TextDirectionHeuristic;
        static RTL: TextDirectionHeuristic;
        static FIRSTSTRONG_LTR: TextDirectionHeuristic;
        static FIRSTSTRONG_RTL: TextDirectionHeuristic;
        static ANYRTL_LTR: TextDirectionHeuristic;
        static LOCALE: TextDirectionHeuristic;
        private static STATE_TRUE;
        private static STATE_FALSE;
        private static STATE_UNKNOWN;
        private static isRtlText(directionality);
        private static isRtlTextOrFormat(directionality);
    }
    module TextDirectionHeuristics {
        abstract class TextDirectionHeuristicImpl implements TextDirectionHeuristic {
            private mAlgorithm;
            constructor(algorithm: TextDirectionHeuristics.TextDirectionAlgorithm);
            protected abstract defaultIsRtl(): boolean;
            isRtl(cs: string, start: number, count: number): boolean;
            private doCheck(cs, start, count);
        }
        class TextDirectionHeuristicInternal extends TextDirectionHeuristics.TextDirectionHeuristicImpl {
            private mDefaultIsRtl;
            constructor(algorithm: TextDirectionHeuristics.TextDirectionAlgorithm, defaultIsRtl: boolean);
            protected defaultIsRtl(): boolean;
        }
        interface TextDirectionAlgorithm {
            checkRtl(cs: string, start: number, count: number): number;
        }
        class FirstStrong implements TextDirectionHeuristics.TextDirectionAlgorithm {
            checkRtl(cs: string, start: number, count: number): number;
            constructor();
            static INSTANCE: FirstStrong;
        }
        class AnyStrong implements TextDirectionHeuristics.TextDirectionAlgorithm {
            private mLookForRtl;
            checkRtl(cs: string, start: number, count: number): number;
            constructor(lookForRtl: boolean);
            static INSTANCE_RTL: AnyStrong;
            static INSTANCE_LTR: AnyStrong;
        }
        class TextDirectionHeuristicLocale extends TextDirectionHeuristics.TextDirectionHeuristicImpl {
            constructor();
            protected defaultIsRtl(): boolean;
            static INSTANCE: TextDirectionHeuristicLocale;
        }
    }
}
declare module android.text {
    import Canvas = android.graphics.Canvas;
    import FontMetricsInt = android.graphics.Paint.FontMetricsInt;
    import TextPaint = android.text.TextPaint;
    import Layout = android.text.Layout;
    class TextLine {
        private static DEBUG;
        private mPaint;
        private mText;
        private mStart;
        private mLen;
        private mDir;
        private mDirections;
        private mHasTabs;
        private mTabs;
        private mChars;
        private mCharsValid;
        private mSpanned;
        private mWorkPaint;
        private mMetricAffectingSpanSpanSet;
        private mCharacterStyleSpanSet;
        private mReplacementSpanSpanSet;
        private static sCached;
        static obtain(): TextLine;
        static recycle(tl: TextLine): TextLine;
        set(paint: TextPaint, text: String, start: number, limit: number, dir: number, directions: Layout.Directions, hasTabs: boolean, tabStops: Layout.TabStops): void;
        draw(c: Canvas, x: number, top: number, y: number, bottom: number): void;
        metrics(fmi: FontMetricsInt): number;
        measure(offset: number, trailing: boolean, fmi: FontMetricsInt): number;
        private drawRun(c, start, limit, runIsRtl, x, top, y, bottom, needWidth);
        private measureRun(start, offset, limit, runIsRtl, fmi);
        getOffsetToLeftRightOf(cursor: number, toLeft: boolean): number;
        private getOffsetBeforeAfter(runIndex, runStart, runLimit, runIsRtl, offset, after);
        private static expandMetricsFromPaint(fmi, wp);
        static updateMetrics(fmi: FontMetricsInt, previousTop: number, previousAscent: number, previousDescent: number, previousBottom: number, previousLeading: number): void;
        private handleText(wp, start, end, contextStart, contextEnd, runIsRtl, c, x, top, y, bottom, fmi, needWidth);
        private handleReplacement(replacement, wp, start, limit, runIsRtl, c, x, top, y, bottom, fmi, needWidth);
        private handleRun(start, measureLimit, limit, runIsRtl, c, x, top, y, bottom, fmi, needWidth);
        private drawTextRun(c, wp, start, end, contextStart, contextEnd, runIsRtl, x, y);
        ascent(pos: number): number;
        nextTab(h: number): number;
        private static TAB_INCREMENT;
    }
}
declare module android.text {
    interface TextWatcher {
        beforeTextChanged(s: String, start: number, count: number, after: number): void;
        onTextChanged(s: String, start: number, before: number, count: number): void;
        afterTextChanged(s: String): void;
    }
}
declare module android.text {
    import Canvas = android.graphics.Canvas;
    import Paint = android.graphics.Paint;
    import Rect = android.graphics.Rect;
    import Path = android.graphics.Path;
    import Spanned = android.text.Spanned;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    import TextUtils = android.text.TextUtils;
    abstract class Layout {
        private static NO_PARA_SPANS;
        static getDesiredWidth(source: String, paint: TextPaint): number;
        static getDesiredWidth(source: String, start: number, end: number, paint: TextPaint): number;
        private static getDesiredWidth_2(source, paint);
        private static getDesiredWidth_4(source, start, end, paint);
        constructor(text: String, paint: TextPaint, width: number, align: Layout.Alignment, textDir?: TextDirectionHeuristic, spacingMult?: number, spacingAdd?: number);
        replaceWith(text: String, paint: TextPaint, width: number, align: Layout.Alignment, spacingmult: number, spacingadd: number): void;
        draw(canvas: Canvas, highlight?: Path, highlightPaint?: Paint, cursorOffsetVertical?: number): void;
        drawText(canvas: Canvas, firstLine: number, lastLine: number): void;
        drawBackground(canvas: Canvas, highlight: Path, highlightPaint: Paint, cursorOffsetVertical: number, firstLine: number, lastLine: number): void;
        getLineRangeForDraw(canvas: Canvas): number[];
        private getLineStartPos(line, left, right);
        getText(): String;
        getPaint(): TextPaint;
        getWidth(): number;
        getEllipsizedWidth(): number;
        increaseWidthTo(wid: number): void;
        getHeight(): number;
        getAlignment(): Layout.Alignment;
        getSpacingMultiplier(): number;
        getSpacingAdd(): number;
        getTextDirectionHeuristic(): TextDirectionHeuristic;
        abstract getLineCount(): number;
        getLineBounds(line: number, bounds: Rect): number;
        abstract getLineTop(line: number): number;
        abstract getLineDescent(line: number): number;
        abstract getLineStart(line: number): number;
        abstract getParagraphDirection(line: number): number;
        abstract getLineContainsTab(line: number): boolean;
        abstract getLineDirections(line: number): Layout.Directions;
        abstract getTopPadding(): number;
        abstract getBottomPadding(): number;
        isLevelBoundary(offset: number): boolean;
        isRtlCharAt(offset: number): boolean;
        private primaryIsTrailingPrevious(offset);
        getPrimaryHorizontal(offset: number, clamped?: boolean): number;
        getSecondaryHorizontal(offset: number, clamped?: boolean): number;
        private getHorizontal(offset, trailing, clamped);
        private getHorizontal_4(offset, trailing, line, clamped);
        getLineLeft(line: number): number;
        getLineRight(line: number): number;
        getLineMax(line: number): number;
        getLineWidth(line: number): number;
        private getLineExtent(line, full);
        private getLineExtent(line, tabStops, full);
        private getLineExtent_2(line, full);
        private getLineExtent_3(line, tabStops, full);
        getLineForVertical(vertical: number): number;
        getLineForOffset(offset: number): number;
        getOffsetForHorizontal(line: number, horiz: number): number;
        getLineEnd(line: number): number;
        private getLineVisibleEnd(line, start?, end?);
        getLineBottom(line: number): number;
        getLineBaseline(line: number): number;
        getLineAscent(line: number): number;
        getOffsetToLeftOf(offset: number): number;
        getOffsetToRightOf(offset: number): number;
        private getOffsetToLeftRightOf(caret, toLeft);
        private getOffsetAtStartOf(offset);
        shouldClampCursor(line: number): boolean;
        getCursorPath(point: number, dest: Path, editingBuffer: String): void;
        private addSelection(line, start, end, top, bottom, dest);
        getSelectionPath(start: number, end: number, dest: Path): void;
        getParagraphAlignment(line: number): Layout.Alignment;
        getParagraphLeft(line: number): number;
        getParagraphRight(line: number): number;
        private getParagraphLeadingMargin(line);
        static measurePara(paint: TextPaint, text: String, start: number, end: number): number;
        static nextTab(text: String, start: number, end: number, h: number, tabs: any[]): number;
        protected isSpanned(): boolean;
        static getParagraphSpans<T>(text: Spanned, start: number, end: number, type: any): T[];
        private getEllipsisChar(method);
        private ellipsize(start, end, line, dest, destoff, method);
        abstract getEllipsisStart(line: number): number;
        abstract getEllipsisCount(line: number): number;
        private mText;
        private mPaint;
        mWorkPaint: TextPaint;
        private mWidth;
        private mAlignment;
        private mSpacingMult;
        private mSpacingAdd;
        private static sTempRect;
        private mSpannedText;
        private mTextDir;
        private mLineBackgroundSpans;
        static DIR_LEFT_TO_RIGHT: number;
        static DIR_RIGHT_TO_LEFT: number;
        static DIR_REQUEST_LTR: number;
        static DIR_REQUEST_RTL: number;
        static DIR_REQUEST_DEFAULT_LTR: number;
        static DIR_REQUEST_DEFAULT_RTL: number;
        static RUN_LENGTH_MASK: number;
        static RUN_LEVEL_SHIFT: number;
        static RUN_LEVEL_MASK: number;
        static RUN_RTL_FLAG: number;
        private static TAB_INCREMENT;
        static DIRS_ALL_LEFT_TO_RIGHT: Layout.Directions;
        static DIRS_ALL_RIGHT_TO_LEFT: Layout.Directions;
        static ELLIPSIS_NORMAL: string[];
        static ELLIPSIS_TWO_DOTS: string[];
    }
    module Layout {
        class TabStops {
            private mStops;
            private mNumStops;
            private mIncrement;
            constructor(increment: number, spans: any[]);
            reset(increment: number, spans: any[]): void;
            nextTab(h: number): number;
            static nextDefaultStop(h: number, inc: number): number;
        }
        class Directions {
            mDirections: number[];
            constructor(dirs: number[]);
        }
        class Ellipsizer extends String {
            mText: String;
            mLayout: Layout;
            mWidth: number;
            mMethod: TextUtils.TruncateAt;
            constructor(s: String);
            toString(): string;
        }
        class SpannedEllipsizer extends Layout.Ellipsizer implements Spanned {
            private mSpanned;
            constructor(display: String);
            getSpans<T>(start: number, end: number, type: any): T[];
            getSpanStart(tag: any): number;
            getSpanEnd(tag: any): number;
            getSpanFlags(tag: any): number;
            nextSpanTransition(start: number, limit: number, type: any): number;
        }
        enum Alignment {
            ALIGN_NORMAL = 0,
            ALIGN_OPPOSITE = 1,
            ALIGN_CENTER = 2,
            ALIGN_LEFT = 3,
            ALIGN_RIGHT = 4,
        }
    }
}
declare module android.text {
    import Paint = android.graphics.Paint;
    import MetricAffectingSpan = android.text.style.MetricAffectingSpan;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    class MeasuredText {
        private static localLOGV;
        mText: String;
        mTextStart: number;
        mWidths: number[];
        mChars: string;
        mLevels: number[];
        mDir: number;
        mEasy: boolean;
        mLen: number;
        private mPos;
        private mWorkPaint;
        constructor();
        private static sLock;
        private static sCached;
        static obtain(): MeasuredText;
        static recycle(mt: MeasuredText): MeasuredText;
        setPos(pos: number): void;
        setPara(text: String, start: number, end: number, textDir: TextDirectionHeuristic): void;
        addStyleRun(paint: TextPaint, len: number, fm: Paint.FontMetricsInt): number;
        addStyleRun(paint: TextPaint, spans: MetricAffectingSpan[], len: number, fm: Paint.FontMetricsInt): number;
        private addStyleRun_3(paint, len, fm);
        private addStyleRun_4(paint, spans, len, fm);
        breakText(limit: number, forwards: boolean, width: number): number;
        measure(start: number, limit: number): number;
    }
}
declare module android.text {
    import Spanned = android.text.Spanned;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    class TextUtils {
        static isEmpty(str: string | String): boolean;
        static ALIGNMENT_SPAN: number;
        static FIRST_SPAN: number;
        static FOREGROUND_COLOR_SPAN: number;
        static RELATIVE_SIZE_SPAN: number;
        static SCALE_X_SPAN: number;
        static STRIKETHROUGH_SPAN: number;
        static UNDERLINE_SPAN: number;
        static STYLE_SPAN: number;
        static BULLET_SPAN: number;
        static QUOTE_SPAN: number;
        static LEADING_MARGIN_SPAN: number;
        static URL_SPAN: number;
        static BACKGROUND_COLOR_SPAN: number;
        static TYPEFACE_SPAN: number;
        static SUPERSCRIPT_SPAN: number;
        static SUBSCRIPT_SPAN: number;
        static ABSOLUTE_SIZE_SPAN: number;
        static TEXT_APPEARANCE_SPAN: number;
        static ANNOTATION: number;
        static SUGGESTION_SPAN: number;
        static SPELL_CHECK_SPAN: number;
        static SUGGESTION_RANGE_SPAN: number;
        static EASY_EDIT_SPAN: number;
        static LOCALE_SPAN: number;
        static LAST_SPAN: number;
        private static EMPTY_STRING_ARRAY;
        private static ZWNBS_CHAR;
        private static ARAB_SCRIPT_SUBTAG;
        private static HEBR_SCRIPT_SUBTAG;
        static getOffsetBefore(text: String, offset: number): number;
        static getOffsetAfter(text: String, offset: number): number;
        static ellipsize(text: String, paint: TextPaint, avail: number, where: TextUtils.TruncateAt, preserveLength?: boolean, callback?: TextUtils.EllipsizeCallback, textDir?: TextDirectionHeuristic, ellipsis?: any): String;
        private static setPara(mt, paint, text, start, end, textDir);
        static removeEmptySpans<T>(spans: T[], spanned: Spanned, klass: any): T[];
        static packRangeInLong(start: number, end: number): number[];
        static unpackRangeStartFromLong(range: number[]): number;
        static unpackRangeEndFromLong(range: number[]): number;
    }
    module TextUtils {
        enum TruncateAt {
            START = 0,
            MIDDLE = 1,
            END = 2,
            MARQUEE = 3,
            END_SMALL = 4,
        }
        interface EllipsizeCallback {
            ellipsized(start: number, end: number): void;
        }
    }
}
declare module android.util {
    class LongSparseArray<T> extends SparseArray<T> {
    }
}
declare module android.view {
    class HapticFeedbackConstants {
        static LONG_PRESS: number;
        static VIRTUAL_KEY: number;
        static KEYBOARD_TAP: number;
        static SAFE_MODE_DISABLED: number;
        static SAFE_MODE_ENABLED: number;
        static FLAG_IGNORE_VIEW_SETTING: number;
        static FLAG_IGNORE_GLOBAL_SETTING: number;
    }
}
declare module android.database {
    class DataSetObserver {
        onChanged(): void;
        onInvalidated(): void;
    }
}
declare module java.lang {
    class Long {
        static MIN_VALUE: number;
        static MAX_VALUE: number;
    }
}
declare module android.widget {
    import DataSetObserver = android.database.DataSetObserver;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    abstract class AdapterView<T extends Adapter> extends ViewGroup {
        static ITEM_VIEW_TYPE_IGNORE: number;
        static ITEM_VIEW_TYPE_HEADER_OR_FOOTER: number;
        mFirstPosition: number;
        mSpecificTop: number;
        mSyncPosition: number;
        mSyncRowId: number;
        mSyncHeight: number;
        mNeedSync: boolean;
        mSyncMode: number;
        private mLayoutHeight;
        static SYNC_SELECTED_POSITION: number;
        static SYNC_FIRST_POSITION: number;
        static SYNC_MAX_DURATION_MILLIS: number;
        mInLayout: boolean;
        private mOnItemSelectedListener;
        private mOnItemClickListener;
        mOnItemLongClickListener: AdapterView.OnItemLongClickListener;
        mDataChanged: boolean;
        mNextSelectedPosition: number;
        mNextSelectedRowId: number;
        mSelectedPosition: number;
        mSelectedRowId: number;
        private mEmptyView;
        mItemCount: number;
        mOldItemCount: number;
        static INVALID_POSITION: number;
        static INVALID_ROW_ID: number;
        mOldSelectedPosition: number;
        mOldSelectedRowId: number;
        private mDesiredFocusableState;
        private mDesiredFocusableInTouchModeState;
        private mSelectionNotifier;
        mBlockLayoutRequests: boolean;
        setOnItemClickListener(listener: AdapterView.OnItemClickListener): void;
        getOnItemClickListener(): AdapterView.OnItemClickListener;
        performItemClick(view: View, position: number, id: number): boolean;
        setOnItemLongClickListener(listener: AdapterView.OnItemLongClickListener): void;
        getOnItemLongClickListener(): AdapterView.OnItemLongClickListener;
        setOnItemSelectedListener(listener: AdapterView.OnItemSelectedListener): void;
        getOnItemSelectedListener(): AdapterView.OnItemSelectedListener;
        abstract getAdapter(): T;
        abstract setAdapter(adapter: T): void;
        addView(...args: any[]): void;
        removeView(child: View): void;
        removeViewAt(index: number): void;
        removeAllViews(): void;
        protected onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
        getSelectedItemPosition(): number;
        getSelectedItemId(): number;
        abstract getSelectedView(): View;
        getSelectedItem(): any;
        getCount(): number;
        getPositionForView(view: View): number;
        getFirstVisiblePosition(): number;
        getLastVisiblePosition(): number;
        abstract setSelection(position: number): void;
        setEmptyView(emptyView: View): void;
        getEmptyView(): View;
        isInFilterMode(): boolean;
        setFocusable(focusable: boolean): void;
        setFocusableInTouchMode(focusable: boolean): void;
        checkFocus(): void;
        private updateEmptyStatus(empty);
        getItemAtPosition(position: number): any;
        getItemIdAtPosition(position: number): number;
        setOnClickListener(l: View.OnClickListener): void;
        protected onDetachedFromWindow(): void;
        private selectionChanged();
        private fireOnSelected();
        private performAccessibilityActionsOnSelected();
        private isScrollableForAccessibility();
        canAnimate(): boolean;
        handleDataChanged(): void;
        checkSelectionChanged(): void;
        findSyncPosition(): number;
        lookForSelectablePosition(position: number, lookDown: boolean): number;
        setSelectedPositionInt(position: number): void;
        setNextSelectedPositionInt(position: number): void;
        rememberSyncState(): void;
    }
    module AdapterView {
        interface OnItemClickListener {
            onItemClick(parent: AdapterView<any>, view: View, position: number, id: number): void;
        }
        interface OnItemLongClickListener {
            onItemLongClick(parent: AdapterView<any>, view: View, position: number, id: number): boolean;
        }
        interface OnItemSelectedListener {
            onItemSelected(parent: AdapterView<any>, view: View, position: number, id: number): void;
            onNothingSelected(parent: AdapterView<any>): void;
        }
        class AdapterDataSetObserver extends DataSetObserver {
            AdapterView_this: AdapterView<any>;
            constructor(AdapterView_this: AdapterView<any>);
            onChanged(): void;
            onInvalidated(): void;
            clearSavedState(): void;
        }
    }
}
declare module android.widget {
    import DataSetObserver = android.database.DataSetObserver;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    interface Adapter {
        registerDataSetObserver(observer: DataSetObserver): void;
        unregisterDataSetObserver(observer: DataSetObserver): void;
        getCount(): number;
        getItem(position: number): any;
        getItemId(position: number): number;
        hasStableIds(): boolean;
        getView(position: number, convertView: View, parent: ViewGroup): View;
        getItemViewType(position: number): number;
        getViewTypeCount(): number;
        isEmpty(): boolean;
    }
    module Adapter {
        var IGNORE_ITEM_VIEW_TYPE: number;
        var NO_SELECTION: number;
    }
}
declare module android.R {
    class string_ {
        static prll_header_state_normal: string;
        static prll_header_state_ready: string;
        static prll_header_state_loading: string;
        static prll_header_state_fail: string;
        static prll_footer_state_normal: string;
        static prll_footer_state_loading: string;
        static prll_footer_state_ready: string;
        static prll_footer_state_fail: string;
        static prll_footer_state_no_more: string;
        static zh(): void;
    }
}
declare module android.text {
    import Canvas = android.graphics.Canvas;
    import Paint = android.graphics.Paint;
    import Path = android.graphics.Path;
    import Layout = android.text.Layout;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    import TextUtils = android.text.TextUtils;
    class BoringLayout extends Layout implements TextUtils.EllipsizeCallback {
        static make(source: String, paint: TextPaint, outerwidth: number, align: Layout.Alignment, spacingmult: number, spacingadd: number, metrics: BoringLayout.Metrics, includepad: boolean, ellipsize?: TextUtils.TruncateAt, ellipsizedWidth?: number): BoringLayout;
        replaceOrMake(source: String, paint: TextPaint, outerwidth: number, align: Layout.Alignment, spacingmult: number, spacingadd: number, metrics: BoringLayout.Metrics, includepad: boolean, ellipsize?: TextUtils.TruncateAt, ellipsizedWidth?: number): BoringLayout;
        constructor(source: String, paint: TextPaint, outerwidth: number, align: Layout.Alignment, spacingmult: number, spacingadd: number, metrics: BoringLayout.Metrics, includepad: boolean, ellipsize?: TextUtils.TruncateAt, ellipsizedWidth?: number);
        init(source: String, paint: TextPaint, outerwidth: number, align: Layout.Alignment, spacingmult: number, spacingadd: number, metrics: BoringLayout.Metrics, includepad: boolean, trustWidth: boolean): void;
        static isBoring(text: String, paint: TextPaint, textDir?: TextDirectionHeuristic, metrics?: BoringLayout.Metrics): BoringLayout.Metrics;
        getHeight(): number;
        getLineCount(): number;
        getLineTop(line: number): number;
        getLineDescent(line: number): number;
        getLineStart(line: number): number;
        getParagraphDirection(line: number): number;
        getLineContainsTab(line: number): boolean;
        getLineMax(line: number): number;
        getLineDirections(line: number): Layout.Directions;
        getTopPadding(): number;
        getBottomPadding(): number;
        getEllipsisCount(line: number): number;
        getEllipsisStart(line: number): number;
        getEllipsizedWidth(): number;
        draw(c: Canvas, highlight: Path, highlightpaint: Paint, cursorOffset: number): void;
        ellipsized(start: number, end: number): void;
        private static FIRST_RIGHT_TO_LEFT;
        private mDirect;
        mBottom: number;
        mDesc: number;
        private mTopPadding;
        private mBottomPadding;
        private mMax;
        private mEllipsizedWidth;
        private mEllipsizedStart;
        private mEllipsizedCount;
        private static sTemp;
    }
    module BoringLayout {
        class Metrics extends Paint.FontMetricsInt {
            width: number;
            toString(): string;
        }
    }
}
declare module android.text {
    class PackedIntVector {
        private mColumns;
        private mRows;
        private mRowGapStart;
        private mRowGapLength;
        private mValues;
        private mValueGap;
        constructor(columns: number);
        getValue(row: number, column: number): number;
        setValue(row: number, column: number, value: number): void;
        private setValueInternal(row, column, value);
        adjustValuesBelow(startRow: number, column: number, delta: number): void;
        insertAt(row: number, values: number[]): void;
        deleteAt(row: number, count: number): void;
        size(): number;
        width(): number;
        private growBuffer();
        private moveValueGapTo(column, where);
        private moveRowGapTo(where);
    }
}
declare module android.text {
    class PackedObjectVector<E> {
        private mColumns;
        private mRows;
        private mRowGapStart;
        private mRowGapLength;
        private mValues;
        constructor(columns: number);
        getValue(row: number, column: number): E;
        setValue(row: number, column: number, value: E): void;
        insertAt(row: number, values: E[]): void;
        deleteAt(row: number, count: number): void;
        size(): number;
        width(): number;
        private growBuffer();
        private moveRowGapTo(where);
        dump(): void;
    }
}
declare module android.text {
    import Spanned = android.text.Spanned;
    interface Spannable extends Spanned {
        setSpan(what: any, start: number, end: number, flags: number): void;
        removeSpan(what: any): void;
    }
    module Spannable {
        function isImpl(obj: any): boolean;
        class Factory {
            private static sInstance;
            static getInstance(): Spannable.Factory;
            newSpannable(source: String): Spannable;
        }
    }
}
declare module android.text.style {
    import Paint = android.graphics.Paint;
    import TextPaint = android.text.TextPaint;
    import ParagraphStyle = android.text.style.ParagraphStyle;
    import WrapTogetherSpan = android.text.style.WrapTogetherSpan;
    interface LineHeightSpan extends ParagraphStyle, WrapTogetherSpan {
        chooseHeight(text: String, start: number, end: number, spanstartv: number, v: number, fm: Paint.FontMetricsInt): void;
    }
    module LineHeightSpan {
        var type: symbol;
        interface WithDensity extends LineHeightSpan {
            chooseHeight(text: String, start: number, end: number, spanstartv: number, v: number, fm: Paint.FontMetricsInt, paint?: TextPaint): void;
        }
    }
}
declare module android.text {
    import Layout = android.text.Layout;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    import TextUtils = android.text.TextUtils;
    class StaticLayout extends Layout {
        static TAG: string;
        constructor(source: String, bufstart: number, bufend: number, paint: TextPaint, outerwidth: number, align: Layout.Alignment, textDir: TextDirectionHeuristic, spacingmult: number, spacingadd: number, includepad: boolean, ellipsize?: TextUtils.TruncateAt, ellipsizedWidth?: number, maxLines?: number);
        generate(source: String, bufStart: number, bufEnd: number, paint: TextPaint, outerWidth: number, textDir: TextDirectionHeuristic, spacingmult: number, spacingadd: number, includepad: boolean, trackpad: boolean, ellipsizedWidth: number, ellipsize: TextUtils.TruncateAt): void;
        private static isIdeographic(c, includeNonStarters);
        private out(text, start, end, above, below, top, bottom, v, spacingmult, spacingadd, chooseHt, chooseHtv, fm, hasTabOrEmoji, needMultiply, chdirs, dir, easy, bufEnd, includePad, trackPad, chs, widths, widthStart, ellipsize, ellipsisWidth, textWidth, paint, moreChars);
        private calculateEllipsis(lineStart, lineEnd, widths, widthStart, avail, where, line, textWidth, paint, forceEllipsis);
        getLineForVertical(vertical: number): number;
        getLineCount(): number;
        getLineTop(line: number): number;
        getLineDescent(line: number): number;
        getLineStart(line: number): number;
        getParagraphDirection(line: number): number;
        getLineContainsTab(line: number): boolean;
        getLineDirections(line: number): Layout.Directions;
        getTopPadding(): number;
        getBottomPadding(): number;
        getEllipsisCount(line: number): number;
        getEllipsisStart(line: number): number;
        getEllipsizedWidth(): number;
        prepare(): void;
        finish(): void;
        private mLineCount;
        private mTopPadding;
        private mBottomPadding;
        private mColumns;
        private mEllipsizedWidth;
        private static COLUMNS_NORMAL;
        private static COLUMNS_ELLIPSIZE;
        private static START;
        private static DIR;
        private static TAB;
        private static TOP;
        private static DESCENT;
        private static ELLIPSIS_START;
        private static ELLIPSIS_COUNT;
        private mLines;
        private mLineDirections;
        private mMaximumVisibleLineCount;
        private static START_MASK;
        private static DIR_SHIFT;
        private static TAB_MASK;
        private static CHAR_FIRST_CJK;
        private static CHAR_NEW_LINE;
        private static CHAR_TAB;
        private static CHAR_SPACE;
        private static CHAR_SLASH;
        private static CHAR_HYPHEN;
        private static CHAR_ZWSP;
        private static EXTRA_ROUNDING;
        private static CHAR_FIRST_HIGH_SURROGATE;
        private static CHAR_LAST_LOW_SURROGATE;
        private mMeasured;
        private mFontMetricsInt;
    }
}
declare module android.text {
    import Layout = android.text.Layout;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    import TextUtils = android.text.TextUtils;
    class DynamicLayout extends Layout {
        private static PRIORITY;
        private static BLOCK_MINIMUM_CHARACTER_LENGTH;
        constructor(base: String, display: String, paint: TextPaint, width: number, align: Layout.Alignment, textDir: TextDirectionHeuristic, spacingmult: number, spacingadd: number, includepad: boolean, ellipsize?: TextUtils.TruncateAt, ellipsizedWidth?: number);
        private reflow(s, where, before, after);
        private createBlocks();
        private addBlockAtOffset(offset);
        updateBlocks(startLine: number, endLine: number, newLineCount: number): void;
        setBlocksDataForTest(blockEndLines: number[], blockIndices: number[], numberOfBlocks: number): void;
        getBlockEndLines(): number[];
        getBlockIndices(): number[];
        getNumberOfBlocks(): number;
        getIndexFirstChangedBlock(): number;
        setIndexFirstChangedBlock(i: number): void;
        getLineCount(): number;
        getLineTop(line: number): number;
        getLineDescent(line: number): number;
        getLineStart(line: number): number;
        getLineContainsTab(line: number): boolean;
        getParagraphDirection(line: number): number;
        getLineDirections(line: number): Layout.Directions;
        getTopPadding(): number;
        getBottomPadding(): number;
        getEllipsizedWidth(): number;
        getEllipsisStart(line: number): number;
        getEllipsisCount(line: number): number;
        private mBase;
        private mDisplay;
        private mWatcher;
        private mIncludePad;
        private mEllipsize;
        private mEllipsizedWidth;
        private mEllipsizeAt;
        private mInts;
        private mObjects;
        static INVALID_BLOCK_INDEX: number;
        private mBlockEndLines;
        private mBlockIndices;
        private mNumberOfBlocks;
        private mIndexFirstChangedBlock;
        private mTopPadding;
        private mBottomPadding;
        private static sStaticLayout;
        private static sLock;
        private static START;
        private static DIR;
        private static TAB;
        private static TOP;
        private static DESCENT;
        private static COLUMNS_NORMAL;
        private static ELLIPSIS_START;
        private static ELLIPSIS_COUNT;
        private static COLUMNS_ELLIPSIZE;
        private static START_MASK;
        private static DIR_SHIFT;
        private static TAB_MASK;
        private static ELLIPSIS_UNDEFINED;
    }
    module DynamicLayout {
    }
}
declare module android.text {
    import Spannable = android.text.Spannable;
    interface SpanWatcher {
        onSpanAdded(text: Spannable, what: any, start: number, end: number): void;
        onSpanRemoved(text: Spannable, what: any, start: number, end: number): void;
        onSpanChanged(text: Spannable, what: any, ostart: number, oend: number, nstart: number, nend: number): void;
    }
}
declare module android.text.method {
    import Rect = android.graphics.Rect;
    import View = android.view.View;
    interface TransformationMethod {
        getTransformation(source: String, view: View): String;
        onFocusChanged(view: View, sourceText: String, focused: boolean, direction: number, previouslyFocusedRect: Rect): void;
    }
    module TransformationMethod {
        function isImpl(obj: any): boolean;
    }
}
declare module android.text.method {
    import TransformationMethod = android.text.method.TransformationMethod;
    interface TransformationMethod2 extends TransformationMethod {
        setLengthChangesAllowed(allowLengthChanges: boolean): void;
    }
    module TransformationMethod2 {
        function isImpl(obj: any): boolean;
    }
}
declare module android.text.method {
    import Rect = android.graphics.Rect;
    import View = android.view.View;
    import TransformationMethod2 = android.text.method.TransformationMethod2;
    class AllCapsTransformationMethod implements TransformationMethod2 {
        private static TAG;
        private mEnabled;
        constructor(context?: any);
        getTransformation(source: String, view: View): String;
        onFocusChanged(view: View, sourceText: String, focused: boolean, direction: number, previouslyFocusedRect: Rect): void;
        setLengthChangesAllowed(allowLengthChanges: boolean): void;
    }
}
declare module android.text.method {
    import TextView = android.widget.TextView;
    import KeyEvent = android.view.KeyEvent;
    import MotionEvent = android.view.MotionEvent;
    import Spannable = android.text.Spannable;
    interface MovementMethod {
        initialize(widget: TextView, text: Spannable): void;
        onKeyDown(widget: TextView, text: Spannable, keyCode: number, event: KeyEvent): boolean;
        onKeyUp(widget: TextView, text: Spannable, keyCode: number, event: KeyEvent): boolean;
        onKeyOther(view: TextView, text: Spannable, event: KeyEvent): boolean;
        onTakeFocus(widget: TextView, text: Spannable, direction: number): void;
        onTrackballEvent(widget: TextView, text: Spannable, event: MotionEvent): boolean;
        onTouchEvent(widget: TextView, text: Spannable, event: MotionEvent): boolean;
        onGenericMotionEvent(widget: TextView, text: Spannable, event: MotionEvent): boolean;
        canSelectArbitrarily(): boolean;
    }
}
declare module android.text.method {
    import Rect = android.graphics.Rect;
    import View = android.view.View;
    import TransformationMethod = android.text.method.TransformationMethod;
    abstract class ReplacementTransformationMethod implements TransformationMethod {
        protected abstract getOriginal(): string[];
        protected abstract getReplacement(): string[];
        getTransformation(source: String, v: View): String;
        onFocusChanged(view: View, sourceText: String, focused: boolean, direction: number, previouslyFocusedRect: Rect): void;
    }
    module ReplacementTransformationMethod {
        class ReplacementCharSequence extends String {
            private mOriginal;
            private mReplacement;
            constructor(source: String, original: string[], replacement: string[]);
            charAt(i: number): string;
            toString(): string;
            substr(from: number, length: number): string;
            substring(start: number, end: number): string;
            startReplace(start: number, end: number): string;
            private mSource;
        }
    }
}
declare module android.text.method {
    import ReplacementTransformationMethod = android.text.method.ReplacementTransformationMethod;
    class SingleLineTransformationMethod extends ReplacementTransformationMethod {
        private static ORIGINAL;
        private static REPLACEMENT;
        protected getOriginal(): string[];
        protected getReplacement(): string[];
        static getInstance(): SingleLineTransformationMethod;
        private static sInstance;
    }
}
declare module android.widget {
    import ColorStateList = android.content.res.ColorStateList;
    import Canvas = android.graphics.Canvas;
    import Rect = android.graphics.Rect;
    import Drawable = android.graphics.drawable.Drawable;
    import Handler = android.os.Handler;
    import Message = android.os.Message;
    import BoringLayout = android.text.BoringLayout;
    import Layout = android.text.Layout;
    import SpanWatcher = android.text.SpanWatcher;
    import Spannable = android.text.Spannable;
    import Spanned = android.text.Spanned;
    import TextDirectionHeuristic = android.text.TextDirectionHeuristic;
    import TextPaint = android.text.TextPaint;
    import TextUtils = android.text.TextUtils;
    import TextWatcher = android.text.TextWatcher;
    import MovementMethod = android.text.method.MovementMethod;
    import TransformationMethod = android.text.method.TransformationMethod;
    import KeyEvent = android.view.KeyEvent;
    import MotionEvent = android.view.MotionEvent;
    import View = android.view.View;
    import ViewTreeObserver = android.view.ViewTreeObserver;
    import OverScroller = android.widget.OverScroller;
    class TextView extends View implements ViewTreeObserver.OnPreDrawListener {
        static LOG_TAG: string;
        static DEBUG_EXTRACT: boolean;
        private static SANS;
        private static SERIF;
        private static MONOSPACE;
        private static SIGNED;
        private static DECIMAL;
        private static MARQUEE_FADE_NORMAL;
        private static MARQUEE_FADE_SWITCH_SHOW_ELLIPSIS;
        private static MARQUEE_FADE_SWITCH_SHOW_FADE;
        private static LINES;
        private static EMS;
        private static PIXELS;
        private static TEMP_RECTF;
        private static VERY_WIDE;
        private static ANIMATED_SCROLL_GAP;
        private static NO_FILTERS;
        private static CHANGE_WATCHER_PRIORITY;
        private static MULTILINE_STATE_SET;
        static LAST_CUT_OR_COPY_TIME: number;
        private mTextColor;
        private mHintTextColor;
        private mLinkTextColor;
        private mCurTextColor;
        private mCurHintTextColor;
        private mFreezesText;
        private mTemporaryDetach;
        private mDispatchTemporaryDetach;
        private mSpannableFactory;
        private mShadowRadius;
        private mShadowDx;
        private mShadowDy;
        private mPreDrawRegistered;
        private mPreventDefaultMovement;
        private mEllipsize;
        mDrawables: TextView.Drawables;
        private mMarquee;
        private mRestartMarquee;
        private mMarqueeRepeatLimit;
        private mLastLayoutDirection;
        private mMarqueeFadeMode;
        private mSavedMarqueeModeLayout;
        private mText;
        private mTransformed;
        private mBufferType;
        private mHint;
        private mHintLayout;
        private mMovement;
        private mTransformation;
        private mAllowTransformationLengthChange;
        private mChangeWatcher;
        private mListeners;
        private mTextPaint;
        private mUserSetTextScaleX;
        private mLayout;
        private mGravity;
        private mHorizontallyScrolling;
        private mAutoLinkMask;
        private mLinksClickable;
        private mSpacingMult;
        private mSpacingAdd;
        private mMaximum;
        private mMaxMode;
        private mMinimum;
        private mMinMode;
        private mOldMaximum;
        private mOldMaxMode;
        private mMaxWidthValue;
        private mMaxWidthMode;
        private mMinWidthValue;
        private mMinWidthMode;
        private mSingleLine;
        private mDesiredHeightAtMeasure;
        private mIncludePad;
        private mDeferScroll;
        private mTempRect;
        private mLastScroll;
        private mScroller;
        private mBoring;
        private mHintBoring;
        private mSavedLayout;
        private mSavedHintLayout;
        private mTextDir;
        private mFilters;
        mHighlightColor: number;
        private mHighlightPath;
        private mHighlightPaint;
        private mHighlightPathBogus;
        mCursorDrawableRes: number;
        mTextSelectHandleLeftRes: number;
        mTextSelectHandleRightRes: number;
        mTextSelectHandleRes: number;
        mTextEditSuggestionItemLayout: number;
        private mEditor;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private setTypefaceFromAttrs(familyName, typefaceIndex, styleIndex);
        private setRelativeDrawablesIfNeeded(start, end);
        setEnabled(enabled: boolean): void;
        setTypeface(tf: any, style: number): void;
        protected getDefaultEditable(): boolean;
        protected getDefaultMovementMethod(): MovementMethod;
        getText(): String;
        length(): number;
        getEditableText(): any;
        getLineHeight(): number;
        getLayout(): Layout;
        getHintLayout(): Layout;
        getUndoManager(): any;
        setUndoManager(undoManager: any, tag: string): void;
        getKeyListener(): any;
        setKeyListener(input: any): void;
        private setKeyListenerOnly(input);
        getMovementMethod(): MovementMethod;
        setMovementMethod(movement: MovementMethod): void;
        private fixFocusableAndClickableSettings();
        getTransformationMethod(): TransformationMethod;
        setTransformationMethod(method: TransformationMethod): void;
        getCompoundPaddingTop(): number;
        getCompoundPaddingBottom(): number;
        getCompoundPaddingLeft(): number;
        getCompoundPaddingRight(): number;
        getCompoundPaddingStart(): number;
        getCompoundPaddingEnd(): number;
        getExtendedPaddingTop(): number;
        getExtendedPaddingBottom(): number;
        getTotalPaddingLeft(): number;
        getTotalPaddingRight(): number;
        getTotalPaddingStart(): number;
        getTotalPaddingEnd(): number;
        getTotalPaddingTop(): number;
        getTotalPaddingBottom(): number;
        setCompoundDrawables(left: Drawable, top: Drawable, right: Drawable, bottom: Drawable): void;
        setCompoundDrawablesWithIntrinsicBounds(left: Drawable, top: Drawable, right: Drawable, bottom: Drawable): void;
        setCompoundDrawablesRelative(start: Drawable, top: Drawable, end: Drawable, bottom: Drawable): void;
        setCompoundDrawablesRelativeWithIntrinsicBounds(start: Drawable, top: Drawable, end: Drawable, bottom: Drawable): void;
        getCompoundDrawables(): Drawable[];
        getCompoundDrawablesRelative(): Drawable[];
        setCompoundDrawablePadding(pad: number): void;
        getCompoundDrawablePadding(): number;
        setPadding(left: number, top: number, right: number, bottom: number): void;
        getAutoLinkMask(): number;
        getTextLocale(): any;
        setTextLocale(locale: any): void;
        getTextSize(): number;
        setTextSize(size: number): void;
        setTextSize(unit: string, size: number): void;
        private setRawTextSize(size);
        getTextScaleX(): number;
        setTextScaleX(size: number): void;
        getTypeface(): any;
        setTextColor(colors: ColorStateList | number): void;
        getTextColors(): ColorStateList;
        getCurrentTextColor(): number;
        setHighlightColor(color: number): void;
        getHighlightColor(): number;
        setShowSoftInputOnFocus(show: boolean): void;
        getShowSoftInputOnFocus(): boolean;
        setShadowLayer(radius: number, dx: number, dy: number, color: number): void;
        getShadowRadius(): number;
        getShadowDx(): number;
        getShadowDy(): number;
        getShadowColor(): number;
        getPaint(): TextPaint;
        setAutoLinkMask(mask: number): void;
        setLinksClickable(whether: boolean): void;
        getLinksClickable(): boolean;
        getUrls(): any[];
        setHintTextColor(colors: ColorStateList | number): void;
        getHintTextColors(): ColorStateList;
        getCurrentHintTextColor(): number;
        setGravity(gravity: number): void;
        getGravity(): number;
        getPaintFlags(): number;
        setPaintFlags(flags: number): void;
        setHorizontallyScrolling(whether: boolean): void;
        getHorizontallyScrolling(): boolean;
        setMinLines(minlines: number): void;
        getMinLines(): number;
        setMinHeight(minHeight: number): void;
        getMinHeight(): number;
        setMaxLines(maxlines: number): void;
        getMaxLines(): number;
        setMaxHeight(maxHeight: number): void;
        getMaxHeight(): number;
        setLines(lines: number): void;
        setHeight(pixels: number): void;
        setMinEms(minems: number): void;
        getMinEms(): number;
        setMinWidth(minpixels: number): void;
        getMinWidth(): number;
        setMaxEms(maxems: number): void;
        getMaxEms(): number;
        setMaxWidth(maxpixels: number): void;
        getMaxWidth(): number;
        setEms(ems: number): void;
        setWidth(pixels: number): void;
        setLineSpacing(add: number, mult: number): void;
        getLineSpacingMultiplier(): number;
        getLineSpacingExtra(): number;
        private updateTextColors();
        protected drawableStateChanged(): void;
        removeMisspelledSpans(spannable: Spannable): void;
        setFreezesText(freezesText: boolean): void;
        getFreezesText(): boolean;
        setSpannableFactory(factory: Spannable.Factory): void;
        private setText(text, type?, notifyBefore?, oldlen?);
        setHint(hint: String): void;
        getHint(): String;
        isSingleLine(): boolean;
        private static isMultilineInputType(type);
        removeSuggestionSpans(text: String): String;
        private hasPasswordTransformationMethod();
        private static isPasswordInputType(inputType);
        private static isVisiblePasswordInputType(inputType);
        setRawInputType(type: number): void;
        setInputType(type: number, direct?: boolean): void;
        getInputType(): number;
        setImeOptions(imeOptions: number): void;
        getImeOptions(): number;
        setImeActionLabel(label: String, actionId: number): void;
        getImeActionLabel(): String;
        getImeActionId(): number;
        setOnEditorActionListener(l: TextView.OnEditorActionListener): void;
        protected setFrame(l: number, t: number, r: number, b: number): boolean;
        private restartMarqueeIfNeeded();
        setFilters(filters: any[]): void;
        setFilters(e: any, filters: any[]): void;
        getFilters(): any[];
        private getBoxHeight(l);
        getVerticalOffset(forceNormal: boolean): number;
        private getBottomVerticalOffset(forceNormal);
        invalidateRegion(start: number, end: number, invalidateCursor: boolean): void;
        private registerForPreDraw();
        onPreDraw(): boolean;
        protected onAttachedToWindow(): void;
        protected onDetachedFromWindow(): void;
        protected isPaddingOffsetRequired(): boolean;
        protected getLeftPaddingOffset(): number;
        protected getTopPaddingOffset(): number;
        protected getBottomPaddingOffset(): number;
        protected getRightPaddingOffset(): number;
        protected verifyDrawable(who: Drawable): boolean;
        jumpDrawablesToCurrentState(): void;
        invalidateDrawable(drawable: Drawable): void;
        isTextSelectable(): boolean;
        setTextIsSelectable(selectable: boolean): void;
        protected onCreateDrawableState(extraSpace: number): number[];
        private getUpdatedHighlightPath();
        getHorizontalOffsetForDrawables(): number;
        protected onDraw(canvas: Canvas): void;
        getFocusedRect(r: Rect): void;
        getLineCount(): number;
        getLineBounds(line: number, bounds: Rect): number;
        getBaseline(): number;
        protected getFadeTop(offsetRequired: boolean): number;
        protected getFadeHeight(offsetRequired: boolean): number;
        onKeyDown(keyCode: number, event: KeyEvent): boolean;
        private shouldAdvanceFocusOnEnter();
        private shouldAdvanceFocusOnTab();
        private doKeyDown(keyCode, event, otherEvent);
        resetErrorChangedFlag(): void;
        hideErrorIfUnchanged(): void;
        onKeyUp(keyCode: number, event: KeyEvent): boolean;
        onCheckIsTextEditor(): boolean;
        private nullLayouts();
        private assumeLayout();
        private getLayoutAlignment();
        protected makeNewLayout(wantWidth: number, hintWidth: number, boring: BoringLayout.Metrics, hintBoring: BoringLayout.Metrics, ellipsisWidth: number, bringIntoView: boolean): void;
        private makeSingleLayout(wantWidth, boring, ellipsisWidth, alignment, shouldEllipsize, effectiveEllipsize, useSaved);
        private compressText(width);
        private static desired(layout);
        setIncludeFontPadding(includepad: boolean): void;
        getIncludeFontPadding(): boolean;
        private static UNKNOWN_BORING;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        private getDesiredHeight(layout?, cap?);
        private checkForResize();
        private checkForRelayout();
        protected onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
        private isShowingHint();
        private bringTextIntoView();
        bringPointIntoView(offset: number): boolean;
        moveCursorToVisibleOffset(): boolean;
        computeScroll(): void;
        private getInterestingRect(r, line);
        private convertFromViewportToContentCoordinates(r);
        viewportToContentHorizontalOffset(): number;
        viewportToContentVerticalOffset(): number;
        getSelectionStart(): number;
        getSelectionEnd(): number;
        hasSelection(): boolean;
        setAllCaps(allCaps: boolean): void;
        setSingleLine(singleLine?: boolean): void;
        private setInputTypeSingleLine(singleLine);
        private applySingleLine(singleLine, applyTransformation, changeMaxLines);
        setEllipsize(where: TextUtils.TruncateAt): void;
        setMarqueeRepeatLimit(marqueeLimit: number): void;
        getMarqueeRepeatLimit(): number;
        getEllipsize(): TextUtils.TruncateAt;
        setSelectAllOnFocus(selectAllOnFocus: boolean): void;
        setCursorVisible(visible: boolean): void;
        isCursorVisible(): boolean;
        private canMarquee();
        private startMarquee();
        private stopMarquee();
        private startStopMarquee(start);
        protected onTextChanged(text: String, start: number, lengthBefore: number, lengthAfter: number): void;
        protected onSelectionChanged(selStart: number, selEnd: number): void;
        addTextChangedListener(watcher: TextWatcher): void;
        removeTextChangedListener(watcher: TextWatcher): void;
        private sendBeforeTextChanged(text, start, before, after);
        removeAdjacentSuggestionSpans(pos: number): void;
        sendOnTextChanged(text: String, start: number, before: number, after: number): void;
        sendAfterTextChanged(text: any): void;
        updateAfterEdit(): void;
        handleTextChanged(buffer: String, start: number, before: number, after: number): void;
        spanChange(buf: Spanned, what: any, oldStart: number, newStart: number, oldEnd: number, newEnd: number): void;
        dispatchFinishTemporaryDetach(): void;
        onStartTemporaryDetach(): void;
        onFinishTemporaryDetach(): void;
        protected onFocusChanged(focused: boolean, direction: number, previouslyFocusedRect: Rect): void;
        onWindowFocusChanged(hasWindowFocus: boolean): void;
        protected onVisibilityChanged(changedView: View, visibility: number): void;
        clearComposingText(): void;
        setSelected(selected: boolean): void;
        onTouchEvent(event: MotionEvent): boolean;
        onGenericMotionEvent(event: MotionEvent): boolean;
        isTextEditable(): boolean;
        didTouchFocusSelect(): boolean;
        cancelLongPress(): void;
        setScroller(s: OverScroller): void;
        protected getLeftFadingEdgeStrength(): number;
        protected getRightFadingEdgeStrength(): number;
        protected computeHorizontalScrollRange(): number;
        protected computeVerticalScrollRange(): number;
        protected computeVerticalScrollExtent(): number;
        static getTextColors(): ColorStateList;
        static getTextColor(def: number): number;
        private canSelectText();
        textCanBeSelected(): boolean;
        getTransformedText(start: number, end: number): String;
        performLongClick(): boolean;
        isSuggestionsEnabled(): boolean;
        setCustomSelectionActionModeCallback(actionModeCallback: any): void;
        getCustomSelectionActionModeCallback(): any;
        protected stopSelectionActionMode(): void;
        canCut(): boolean;
        canCopy(): boolean;
        canPaste(): boolean;
        selectAllText(): boolean;
        getOffsetForPosition(x: number, y: number): number;
        convertToLocalHorizontalCoordinate(x: number): number;
        getLineAtCoordinate(y: number): number;
        private getOffsetAtCoordinate(line, x);
        isInBatchEditMode(): boolean;
        getTextDirectionHeuristic(): TextDirectionHeuristic;
        onResolveDrawables(layoutDirection: number): void;
        protected resetResolvedDrawables(): void;
        protected deleteText_internal(start: number, end: number): void;
        protected replaceText_internal(start: number, end: number, text: String): void;
        protected setSpan_internal(span: any, start: number, end: number, flags: number): void;
        protected setCursorPosition_internal(start: number, end: number): void;
        private createEditorIfNeeded();
    }
    module TextView {
        class Drawables {
            static DRAWABLE_NONE: number;
            static DRAWABLE_RIGHT: number;
            static DRAWABLE_LEFT: number;
            mCompoundRect: Rect;
            mDrawableTop: Drawable;
            mDrawableBottom: Drawable;
            mDrawableLeft: Drawable;
            mDrawableRight: Drawable;
            mDrawableStart: Drawable;
            mDrawableEnd: Drawable;
            mDrawableError: Drawable;
            mDrawableTemp: Drawable;
            mDrawableTopLoading: boolean;
            mDrawableBottomLoading: boolean;
            mDrawableLeftLoading: boolean;
            mDrawableRightLoading: boolean;
            mDrawableLeftInitial: Drawable;
            mDrawableRightInitial: Drawable;
            mIsRtlCompatibilityMode: boolean;
            mOverride: boolean;
            mDrawableSizeTop: number;
            mDrawableSizeBottom: number;
            mDrawableSizeLeft: number;
            mDrawableSizeRight: number;
            mDrawableSizeStart: number;
            mDrawableSizeEnd: number;
            mDrawableSizeError: number;
            mDrawableSizeTemp: number;
            mDrawableWidthTop: number;
            mDrawableWidthBottom: number;
            mDrawableHeightLeft: number;
            mDrawableHeightRight: number;
            mDrawableHeightStart: number;
            mDrawableHeightEnd: number;
            mDrawableHeightError: number;
            mDrawableHeightTemp: number;
            mDrawablePadding: number;
            mDrawableSaved: number;
            constructor(context?: any);
            resolveWithLayoutDirection(layoutDirection: number): void;
            private updateDrawablesLayoutDirection(layoutDirection);
            setErrorDrawable(dr: Drawable, tv: TextView): void;
            private applyErrorDrawableIfNeeded(layoutDirection);
        }
        interface OnEditorActionListener {
            onEditorAction(v: TextView, actionId: number, event: KeyEvent): boolean;
        }
        class Marquee extends Handler {
            private static MARQUEE_DELTA_MAX;
            private static MARQUEE_DELAY;
            private static MARQUEE_RESTART_DELAY;
            private static MARQUEE_RESOLUTION;
            private static MARQUEE_PIXELS_PER_SECOND;
            private static MARQUEE_STOPPED;
            private static MARQUEE_STARTING;
            private static MARQUEE_RUNNING;
            private static MESSAGE_START;
            private static MESSAGE_TICK;
            private static MESSAGE_RESTART;
            private mView;
            private mStatus;
            private mScrollUnit;
            private mMaxScroll;
            private mMaxFadeScroll;
            private mGhostStart;
            private mGhostOffset;
            private mFadeStop;
            private mRepeatLimit;
            private mScroll;
            constructor(v: TextView);
            handleMessage(msg: Message): void;
            tick(): void;
            stop(): void;
            private resetScroll();
            start(repeatLimit: number): void;
            getGhostOffset(): number;
            getScroll(): number;
            getMaxFadeScroll(): number;
            shouldDrawLeftFade(): boolean;
            shouldDrawGhost(): boolean;
            isRunning(): boolean;
            isStopped(): boolean;
        }
        class ChangeWatcher implements TextWatcher, SpanWatcher {
            _TextView_this: TextView;
            constructor(arg: TextView);
            private mBeforeText;
            beforeTextChanged(buffer: String, start: number, before: number, after: number): void;
            onTextChanged(buffer: String, start: number, before: number, after: number): void;
            afterTextChanged(buffer: String): void;
            onSpanChanged(buf: Spannable, what: any, s: number, e: number, st: number, en: number): void;
            onSpanAdded(buf: Spannable, what: any, s: number, e: number): void;
            onSpanRemoved(buf: Spannable, what: any, s: number, e: number): void;
        }
        enum BufferType {
            NORMAL = 0,
            SPANNABLE = 1,
            EDITABLE = 2,
        }
    }
}
declare module android.widget {
    class Button extends TextView {
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
    }
}
declare module android.widget {
    interface Checkable {
        setChecked(checked: boolean): void;
        isChecked(): boolean;
        toggle(): void;
    }
}
declare module android.widget {
    import Adapter = android.widget.Adapter;
    interface ListAdapter extends Adapter {
        areAllItemsEnabled(): boolean;
        isEnabled(position: number): boolean;
    }
}
declare module android.widget {
    import Canvas = android.graphics.Canvas;
    import Rect = android.graphics.Rect;
    import Drawable = android.graphics.drawable.Drawable;
    import SparseBooleanArray = android.util.SparseBooleanArray;
    import KeyEvent = android.view.KeyEvent;
    import MotionEvent = android.view.MotionEvent;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import ViewTreeObserver = android.view.ViewTreeObserver;
    import Interpolator = android.view.animation.Interpolator;
    import ArrayList = java.util.ArrayList;
    import List = java.util.List;
    import Runnable = java.lang.Runnable;
    import AdapterView = android.widget.AdapterView;
    import ListAdapter = android.widget.ListAdapter;
    import OverScroller = android.widget.OverScroller;
    abstract class AbsListView extends AdapterView<ListAdapter> implements ViewTreeObserver.OnGlobalLayoutListener, ViewTreeObserver.OnTouchModeChangeListener {
        static TAG_AbsListView: string;
        static TRANSCRIPT_MODE_DISABLED: number;
        static TRANSCRIPT_MODE_NORMAL: number;
        static TRANSCRIPT_MODE_ALWAYS_SCROLL: number;
        static TOUCH_MODE_REST: number;
        static TOUCH_MODE_DOWN: number;
        static TOUCH_MODE_TAP: number;
        static TOUCH_MODE_DONE_WAITING: number;
        static TOUCH_MODE_SCROLL: number;
        static TOUCH_MODE_FLING: number;
        private static TOUCH_MODE_OVERSCROLL;
        static TOUCH_MODE_OVERFLING: number;
        static LAYOUT_NORMAL: number;
        static LAYOUT_FORCE_TOP: number;
        static LAYOUT_SET_SELECTION: number;
        static LAYOUT_FORCE_BOTTOM: number;
        static LAYOUT_SPECIFIC: number;
        static LAYOUT_SYNC: number;
        static LAYOUT_MOVE_SELECTION: number;
        static CHOICE_MODE_NONE: number;
        static CHOICE_MODE_SINGLE: number;
        static CHOICE_MODE_MULTIPLE: number;
        static CHOICE_MODE_MULTIPLE_MODAL: number;
        mChoiceMode: number;
        private mChoiceActionMode;
        private mCheckedItemCount;
        mCheckStates: SparseBooleanArray;
        private mCheckedIdStates;
        mDataSetObserver: AbsListView.AdapterDataSetObserver;
        mAdapter: ListAdapter;
        private mAdapterHasStableIds;
        private mDeferNotifyDataSetChanged;
        private mDrawSelectorOnTop;
        private mSelector;
        private mSelectorPosition;
        mSelectorRect: Rect;
        mRecycler: AbsListView.RecycleBin;
        private mSelectionLeftPadding;
        private mSelectionTopPadding;
        private mSelectionRightPadding;
        private mSelectionBottomPadding;
        mListPadding: Rect;
        mWidthMeasureSpec: number;
        private mScrollUp;
        private mScrollDown;
        mCachingStarted: boolean;
        mCachingActive: boolean;
        mMotionPosition: number;
        private mMotionViewOriginalTop;
        private mMotionViewNewTop;
        private mMotionX;
        private mMotionY;
        mTouchMode: number;
        private mLastY;
        private mMotionCorrection;
        private mVelocityTracker;
        mFlingRunnable: AbsListView.FlingRunnable;
        mPositionScroller: AbsListView.PositionScroller;
        mSelectedTop: number;
        mStackFromBottom: boolean;
        private mScrollingCacheEnabled;
        private mFastScrollEnabled;
        private mFastScrollAlwaysVisible;
        private mOnScrollListener;
        private mSmoothScrollbarEnabled;
        private mTextFilterEnabled;
        private mFiltered;
        private mTouchFrame;
        mResurrectToPosition: number;
        private mOverscrollMax;
        private static OVERSCROLL_LIMIT_DIVISOR;
        private static CHECK_POSITION_SEARCH_DISTANCE;
        private static TOUCH_MODE_UNKNOWN;
        private static TOUCH_MODE_ON;
        private static TOUCH_MODE_OFF;
        private mLastTouchMode;
        private static PROFILE_SCROLLING;
        private mScrollProfilingStarted;
        static PROFILE_FLINGING: boolean;
        private mFlingProfilingStarted;
        private mPendingCheckForLongPress_List;
        private mPendingCheckForTap_;
        private mPendingCheckForKeyLongPress;
        private mPerformClick_;
        mTouchModeReset: Runnable;
        private mTranscriptMode;
        private mCacheColorHint;
        private mIsChildViewEnabled;
        private mLastScrollState;
        private mGlobalLayoutListenerAddedFilter;
        private mDensityScale;
        private mClearScrollingCache;
        mPositionScrollAfterLayout: Runnable;
        private mMinimumVelocity;
        private mMaximumVelocity;
        private mVelocityScale;
        mIsScrap: boolean[];
        private mPopupHidden;
        private mActivePointerId;
        static INVALID_POINTER: number;
        private mOverscrollDistance;
        private _mOverflingDistance;
        private mOverflingDistance;
        private mFirstPositionDistanceGuess;
        private mLastPositionDistanceGuess;
        private mDirection;
        private mForceTranscriptScroll;
        private mGlowPaddingLeft;
        private mGlowPaddingRight;
        private mLastHandledItemCount;
        static sLinearInterpolator: Interpolator;
        private mPendingSync;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private initAbsListView();
        setOverScrollMode(mode: number): void;
        setAdapter(adapter: ListAdapter): void;
        getCheckedItemCount(): number;
        isItemChecked(position: number): boolean;
        getCheckedItemPosition(): number;
        getCheckedItemPositions(): SparseBooleanArray;
        getCheckedItemIds(): number[];
        clearChoices(): void;
        setItemChecked(position: number, value: boolean): void;
        performItemClick(view: View, position: number, id: number): boolean;
        private updateOnScreenCheckedViews();
        getChoiceMode(): number;
        setChoiceMode(choiceMode: number): void;
        private contentFits();
        setFastScrollEnabled(enabled: boolean): void;
        private setFastScrollerEnabledUiThread(enabled);
        setFastScrollAlwaysVisible(alwaysShow: boolean): void;
        private setFastScrollerAlwaysVisibleUiThread(alwaysShow);
        private isOwnerThread();
        isFastScrollAlwaysVisible(): boolean;
        getVerticalScrollbarWidth(): number;
        isFastScrollEnabled(): boolean;
        setVerticalScrollbarPosition(position: number): void;
        setScrollBarStyle(style: number): void;
        isVerticalScrollBarHidden(): boolean;
        setSmoothScrollbarEnabled(enabled: boolean): void;
        isSmoothScrollbarEnabled(): boolean;
        setOnScrollListener(l: AbsListView.OnScrollListener): void;
        invokeOnItemScrollListener(): void;
        isScrollingCacheEnabled(): boolean;
        setScrollingCacheEnabled(enabled: boolean): void;
        setTextFilterEnabled(textFilterEnabled: boolean): void;
        isTextFilterEnabled(): boolean;
        getFocusedRect(r: Rect): void;
        private useDefaultSelector();
        isStackFromBottom(): boolean;
        setStackFromBottom(stackFromBottom: boolean): void;
        private requestLayoutIfNecessary();
        protected onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: Rect): void;
        requestLayout(): void;
        resetList(): void;
        protected computeVerticalScrollExtent(): number;
        protected computeVerticalScrollOffset(): number;
        protected computeVerticalScrollRange(): number;
        protected getTopFadingEdgeStrength(): number;
        protected getBottomFadingEdgeStrength(): number;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        protected setFrame(left: number, top: number, right: number, bottom: number): boolean;
        protected layoutChildren(): void;
        updateScrollIndicators(): void;
        getSelectedView(): View;
        getListPaddingTop(): number;
        getListPaddingBottom(): number;
        getListPaddingLeft(): number;
        getListPaddingRight(): number;
        obtainView(position: number, isScrap: boolean[]): View;
        positionSelector(l: number, t: number, r: number, b: number): void;
        positionSelector(position: number, sel: View): void;
        dispatchDraw(canvas: Canvas): void;
        isPaddingOffsetRequired(): boolean;
        getLeftPaddingOffset(): number;
        getTopPaddingOffset(): number;
        getRightPaddingOffset(): number;
        getBottomPaddingOffset(): number;
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        private touchModeDrawsInPressedState();
        shouldShowSelector(): boolean;
        private drawSelector(canvas);
        setDrawSelectorOnTop(onTop: boolean): void;
        setSelector(sel: Drawable): void;
        getSelector(): Drawable;
        keyPressed(): void;
        setScrollIndicators(up: View, down: View): void;
        private updateSelectorState();
        protected drawableStateChanged(): void;
        protected onCreateDrawableState(extraSpace: number): number[];
        protected verifyDrawable(dr: Drawable): boolean;
        jumpDrawablesToCurrentState(): void;
        protected onAttachedToWindow(): void;
        protected onDetachedFromWindow(): void;
        onWindowFocusChanged(hasWindowFocus: boolean): void;
        onCancelPendingInputEvents(): void;
        private performLongPress(child, longPressPosition, longPressId);
        onKeyDown(keyCode: number, event: KeyEvent): boolean;
        onKeyUp(keyCode: number, event: KeyEvent): boolean;
        dispatchSetPressed(pressed: boolean): void;
        pointToPosition(x: number, y: number): number;
        pointToRowId(x: number, y: number): number;
        protected checkOverScrollStartScrollIfNeeded(): boolean;
        private startScrollIfNeeded(y);
        private scrollIfNeeded(y);
        onTouchModeChanged(isInTouchMode: boolean): void;
        onTouchEvent(ev: MotionEvent): boolean;
        private onTouchDown(ev);
        private onTouchMove(ev);
        private onTouchUp(ev);
        private onTouchCancel();
        protected onOverScrolled(scrollX: number, scrollY: number, clampedX: boolean, clampedY: boolean): void;
        onGenericMotionEvent(event: MotionEvent): boolean;
        draw(canvas: Canvas): void;
        setOverScrollEffectPadding(leftPadding: number, rightPadding: number): void;
        private initOrResetVelocityTracker();
        private initVelocityTrackerIfNotExists();
        private recycleVelocityTracker();
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        onInterceptTouchEvent(ev: MotionEvent): boolean;
        private onSecondaryPointerUp(ev);
        addTouchables(views: ArrayList<View>): void;
        private reportScrollStateChange(newState);
        setFriction(friction: number): void;
        setVelocityScale(scale: number): void;
        smoothScrollToPositionFromTop(position: number, offset: number, duration?: number): void;
        smoothScrollToPosition(position: number, boundPosition?: number): void;
        smoothScrollBy(distance: number, duration: number, linear?: boolean): void;
        smoothScrollByOffset(position: number): void;
        private createScrollingCache();
        private clearScrollingCache();
        scrollListBy(y: number): void;
        canScrollList(direction: number): boolean;
        private trackMotionScroll(deltaY, incrementalDeltaY);
        getHeaderViewsCount(): number;
        getFooterViewsCount(): number;
        abstract fillGap(down: boolean): void;
        hideSelector(): void;
        reconcileSelectedPosition(): number;
        abstract findMotionRow(y: number): number;
        private findClosestMotionRow(y);
        invalidateViews(): void;
        resurrectSelectionIfNeeded(): boolean;
        abstract setSelectionInt(position: number): void;
        private resurrectSelection();
        private confirmCheckedPositionsById();
        handleDataChanged(): void;
        onDisplayHint(hint: number): void;
        private dismissPopup();
        private showPopup();
        private positionPopup();
        static getDistance(source: Rect, dest: Rect, direction: number): number;
        isInFilterMode(): boolean;
        hasTextFilter(): boolean;
        onGlobalLayout(): void;
        protected generateDefaultLayoutParams(): ViewGroup.LayoutParams;
        protected generateLayoutParams(p: ViewGroup.LayoutParams): ViewGroup.LayoutParams;
        protected checkLayoutParams(p: ViewGroup.LayoutParams): boolean;
        setTranscriptMode(mode: number): void;
        getTranscriptMode(): number;
        getSolidColor(): number;
        setCacheColorHint(color: number): void;
        getCacheColorHint(): number;
        reclaimViews(views: List<View>): void;
        private finishGlows();
        setVisibleRangeHint(start: number, end: number): void;
        setRecyclerListener(listener: AbsListView.RecyclerListener): void;
        static retrieveFromScrap(scrapViews: ArrayList<View>, position: number): View;
    }
    module AbsListView {
        interface OnScrollListener {
            onScrollStateChanged(view: AbsListView, scrollState: number): void;
            onScroll(view: AbsListView, firstVisibleItem: number, visibleItemCount: number, totalItemCount: number): void;
        }
        module OnScrollListener {
            var SCROLL_STATE_IDLE: number;
            var SCROLL_STATE_TOUCH_SCROLL: number;
            var SCROLL_STATE_FLING: number;
        }
        interface SelectionBoundsAdjuster {
            adjustListItemSelectionBounds(bounds: Rect): void;
        }
        class WindowRunnnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            private mOriginalAttachCount;
            rememberWindowAttachCount(): void;
            sameWindow(): boolean;
        }
        class PerformClick extends AbsListView.WindowRunnnable implements Runnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            mClickMotionPosition: number;
            run(): void;
        }
        class CheckForLongPress extends AbsListView.WindowRunnnable implements Runnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            run(): void;
        }
        class CheckForKeyLongPress extends AbsListView.WindowRunnnable implements Runnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            run(): void;
        }
        class CheckForTap implements Runnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            run(): void;
        }
        class FlingRunnable implements Runnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            mScroller: OverScroller;
            private mLastFlingY;
            private mCheckFlywheel;
            static FLYWHEEL_TIMEOUT: number;
            start(initialVelocity: number): void;
            startSpringback(): void;
            startOverfling(initialVelocity: number): void;
            private edgeReached(delta);
            startScroll(distance: number, duration: number, linear: boolean): void;
            endFling(): void;
            flywheelTouch(): void;
            run(): void;
        }
        class PositionScroller implements Runnable {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            private static SCROLL_DURATION;
            private static MOVE_DOWN_POS;
            private static MOVE_UP_POS;
            private static MOVE_DOWN_BOUND;
            private static MOVE_UP_BOUND;
            private static MOVE_OFFSET;
            private mMode;
            private mTargetPos;
            private mBoundPos;
            private mLastSeenPos;
            private mScrollDuration;
            private mExtraScroll;
            private mOffsetFromTop;
            start(position: number): void;
            start(position: number, boundPosition: number): void;
            private _start_1(position);
            private _start_2(position, boundPosition);
            startWithOffset(position: number, offset: number, duration?: number): void;
            private scrollToVisible(targetPos, boundPos, duration);
            stop(): void;
            run(): void;
        }
        class AdapterDataSetObserver extends AdapterView.AdapterDataSetObserver {
            _AbsListView_this: AbsListView;
            constructor(arg: any);
            onChanged(): void;
            onInvalidated(): void;
        }
        class LayoutParams extends ViewGroup.LayoutParams {
            viewType: number;
            recycledHeaderFooter: boolean;
            forceAdd: boolean;
            scrappedFromPosition: number;
            itemId: number;
            constructor();
            constructor(w: number, h: number);
            constructor(w: number, h: number, viewType: number);
            constructor(source: ViewGroup.LayoutParams);
        }
        interface RecyclerListener {
            onMovedToScrapHeap(view: View): void;
        }
        class RecycleBin {
            _AbsListView_this: AbsListView;
            constructor(arg: AbsListView);
            mRecyclerListener: AbsListView.RecyclerListener;
            private mFirstActivePosition;
            mActiveViews: View[];
            private mScrapViews;
            private mViewTypeCount;
            private mCurrentScrap;
            private mSkippedScrap;
            private mTransientStateViews;
            private mTransientStateViewsById;
            setViewTypeCount(viewTypeCount: number): void;
            markChildrenDirty(): void;
            shouldRecycleViewType(viewType: number): boolean;
            clear(): void;
            fillActiveViews(childCount: number, firstActivePosition: number): void;
            getActiveView(position: number): View;
            getTransientStateView(position: number): View;
            clearTransientStateViews(): void;
            getScrapView(position: number): View;
            addScrapView(scrap: View, position: number): void;
            removeSkippedScrap(): void;
            scrapActiveViews(): void;
            private pruneScrapViews();
            reclaimScrapViews(views: List<View>): void;
            setCacheColorHint(color: number): void;
        }
    }
}
declare module android.widget {
    import ListAdapter = android.widget.ListAdapter;
    interface WrapperListAdapter extends ListAdapter {
        getWrappedAdapter(): ListAdapter;
    }
}
declare module android.widget {
    import DataSetObserver = android.database.DataSetObserver;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import ArrayList = java.util.ArrayList;
    import ListAdapter = android.widget.ListAdapter;
    import ListView = android.widget.ListView;
    import WrapperListAdapter = android.widget.WrapperListAdapter;
    class HeaderViewListAdapter implements WrapperListAdapter {
        private mAdapter;
        mHeaderViewInfos: ArrayList<ListView.FixedViewInfo>;
        mFooterViewInfos: ArrayList<ListView.FixedViewInfo>;
        static EMPTY_INFO_LIST: ArrayList<ListView.FixedViewInfo>;
        mAreAllFixedViewsSelectable: boolean;
        private mIsFilterable;
        constructor(headerViewInfos: ArrayList<ListView.FixedViewInfo>, footerViewInfos: ArrayList<ListView.FixedViewInfo>, adapter: ListAdapter);
        getHeadersCount(): number;
        getFootersCount(): number;
        isEmpty(): boolean;
        private areAllListInfosSelectable(infos);
        removeHeader(v: View): boolean;
        removeFooter(v: View): boolean;
        getCount(): number;
        areAllItemsEnabled(): boolean;
        isEnabled(position: number): boolean;
        getItem(position: number): any;
        getItemId(position: number): number;
        hasStableIds(): boolean;
        getView(position: number, convertView: View, parent: ViewGroup): View;
        getItemViewType(position: number): number;
        getViewTypeCount(): number;
        registerDataSetObserver(observer: DataSetObserver): void;
        unregisterDataSetObserver(observer: DataSetObserver): void;
        getFilter(): any;
        getWrappedAdapter(): ListAdapter;
    }
}
declare module android.database {
    import ArrayList = java.util.ArrayList;
    abstract class Observable<T> {
        mObservers: ArrayList<T>;
        registerObserver(observer: T): void;
        unregisterObserver(observer: T): void;
        unregisterAll(): void;
    }
}
declare module android.database {
    import Observable = android.database.Observable;
    import DataSetObserver = android.database.DataSetObserver;
    class DataSetObservable extends Observable<DataSetObserver> {
        notifyChanged(): void;
        notifyInvalidated(): void;
    }
}
declare module android.widget {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import Adapter = android.widget.Adapter;
    interface SpinnerAdapter extends Adapter {
        getDropDownView(position: number, convertView: View, parent: ViewGroup): View;
    }
}
declare module android.widget {
    import DataSetObserver = android.database.DataSetObserver;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import ListAdapter = android.widget.ListAdapter;
    import SpinnerAdapter = android.widget.SpinnerAdapter;
    abstract class BaseAdapter implements ListAdapter, SpinnerAdapter {
        private mDataSetObservable;
        hasStableIds(): boolean;
        registerDataSetObserver(observer: DataSetObserver): void;
        unregisterDataSetObserver(observer: DataSetObserver): void;
        notifyDataSetChanged(): void;
        notifyDataSetInvalidated(): void;
        areAllItemsEnabled(): boolean;
        isEnabled(position: number): boolean;
        getDropDownView(position: number, convertView: View, parent: ViewGroup): View;
        getItemViewType(position: number): number;
        getViewTypeCount(): number;
        isEmpty(): boolean;
        abstract getView(position: number, convertView: View, parent: ViewGroup): View;
        abstract getCount(): number;
        abstract getItem(position: number): any;
        abstract getItemId(position: number): number;
    }
}
declare module android.widget {
    import Canvas = android.graphics.Canvas;
    import Rect = android.graphics.Rect;
    import Drawable = android.graphics.drawable.Drawable;
    import KeyEvent = android.view.KeyEvent;
    import View = android.view.View;
    import ArrayList = java.util.ArrayList;
    import Runnable = java.lang.Runnable;
    import AbsListView = android.widget.AbsListView;
    import ListAdapter = android.widget.ListAdapter;
    class ListView extends AbsListView {
        static NO_POSITION: number;
        private static MAX_SCROLL_FACTOR;
        private static MIN_SCROLL_PREVIEW_PIXELS;
        private mHeaderViewInfos;
        private mFooterViewInfos;
        mDivider: Drawable;
        mDividerHeight: number;
        mOverScrollHeader: Drawable;
        mOverScrollFooter: Drawable;
        private mIsCacheColorOpaque;
        private mDividerIsOpaque;
        private mHeaderDividersEnabled;
        private mFooterDividersEnabled;
        private mAreAllItemsSelectable;
        private mItemsCanFocus;
        private mTempRect;
        private mDividerPaint;
        private mArrowScrollFocusResult;
        private mFocusSelector;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        getMaxScrollAmount(): number;
        private adjustViewsUpOrDown();
        addHeaderView(v: View, data?: any, isSelectable?: boolean): void;
        getHeaderViewsCount(): number;
        removeHeaderView(v: View): boolean;
        private removeFixedViewInfo(v, where);
        addFooterView(v: View, data?: any, isSelectable?: boolean): void;
        getFooterViewsCount(): number;
        removeFooterView(v: View): boolean;
        getAdapter(): ListAdapter;
        setAdapter(adapter: ListAdapter): void;
        resetList(): void;
        private clearRecycledState(infos);
        private showingTopFadingEdge();
        private showingBottomFadingEdge();
        requestChildRectangleOnScreen(child: View, rect: Rect, immediate: boolean): boolean;
        fillGap(down: boolean): void;
        private fillDown(pos, nextTop);
        private fillUp(pos, nextBottom);
        private fillFromTop(nextTop);
        private fillFromMiddle(childrenTop, childrenBottom);
        private fillAboveAndBelow(sel, position);
        private fillFromSelection(selectedTop, childrenTop, childrenBottom);
        private getBottomSelectionPixel(childrenBottom, fadingEdgeLength, selectedPosition);
        private getTopSelectionPixel(childrenTop, fadingEdgeLength, selectedPosition);
        smoothScrollToPosition(position: number): void;
        smoothScrollByOffset(offset: number): void;
        private moveSelection(oldSel, newSel, delta, childrenTop, childrenBottom);
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        private measureScrapChild(child, position, widthMeasureSpec);
        recycleOnMeasure(): boolean;
        measureHeightOfChildren(widthMeasureSpec: number, startPosition: number, endPosition: number, maxHeight: number, disallowPartialChildPosition: number): number;
        findMotionRow(y: number): number;
        private fillSpecific(position, top);
        private correctTooHigh(childCount);
        private correctTooLow(childCount);
        layoutChildren(): void;
        private makeAndAddView(position, y, flow, childrenLeft, selected);
        private setupChild(child, position, y, flowDown, childrenLeft, selected, recycled);
        canAnimate(): boolean;
        setSelection(position: number): void;
        setSelectionFromTop(position: number, y: number): void;
        setSelectionInt(position: number): void;
        lookForSelectablePosition(position: number, lookDown: boolean): number;
        lookForSelectablePositionAfter(current: number, position: number, lookDown: boolean): number;
        setSelectionAfterHeaderView(): void;
        dispatchKeyEvent(event: KeyEvent): boolean;
        onKeyDown(keyCode: number, event: KeyEvent): boolean;
        onKeyMultiple(keyCode: number, repeatCount: number, event: KeyEvent): boolean;
        onKeyUp(keyCode: number, event: KeyEvent): boolean;
        private commonKey(keyCode, count, event);
        pageScroll(direction: number): boolean;
        fullScroll(direction: number): boolean;
        private handleHorizontalFocusWithinListItem(direction);
        arrowScroll(direction: number): boolean;
        private nextSelectedPositionForDirection(selectedView, selectedPos, direction);
        private arrowScrollImpl(direction);
        private handleNewSelectionChange(selectedView, direction, newSelectedPosition, newFocusAssigned);
        private measureAndAdjustDown(child, childIndex, numChildren);
        private measureItem(child);
        private relayoutMeasuredItem(child);
        private getArrowScrollPreviewLength();
        private amountToScroll(direction, nextSelectedPosition);
        private lookForSelectablePositionOnScreen(direction);
        private arrowScrollFocused(direction);
        private positionOfNewFocus(newFocus);
        private isViewAncestorOf(child, parent);
        private amountToScrollToNewFocus(direction, newFocus, positionOfNewFocus);
        private distanceToView(descendant);
        private scrollListItemsBy(amount);
        private addViewAbove(theView, position);
        private addViewBelow(theView, position);
        setItemsCanFocus(itemsCanFocus: boolean): void;
        getItemsCanFocus(): boolean;
        isOpaque(): boolean;
        setCacheColorHint(color: number): void;
        drawOverscrollHeader(canvas: Canvas, drawable: Drawable, bounds: Rect): void;
        drawOverscrollFooter(canvas: Canvas, drawable: Drawable, bounds: Rect): void;
        dispatchDraw(canvas: Canvas): void;
        drawChild(canvas: Canvas, child: View, drawingTime: number): boolean;
        drawDivider(canvas: Canvas, bounds: Rect, childIndex: number): void;
        getDivider(): Drawable;
        setDivider(divider: Drawable): void;
        getDividerHeight(): number;
        setDividerHeight(height: number): void;
        setHeaderDividersEnabled(headerDividersEnabled: boolean): void;
        areHeaderDividersEnabled(): boolean;
        setFooterDividersEnabled(footerDividersEnabled: boolean): void;
        areFooterDividersEnabled(): boolean;
        setOverscrollHeader(header: Drawable): void;
        getOverscrollHeader(): Drawable;
        setOverscrollFooter(footer: Drawable): void;
        getOverscrollFooter(): Drawable;
        onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: Rect): void;
        onFinishInflate(): void;
        findViewTraversal(id: string): View;
        findViewInHeadersOrFooters(where: ArrayList<ListView.FixedViewInfo>, id: string): View;
        findViewByPredicateTraversal(predicate: View.Predicate<View>, childToSkip: View): View;
        findViewByPredicateInHeadersOrFooters(where: ArrayList<ListView.FixedViewInfo>, predicate: View.Predicate<View>, childToSkip: View): View;
        getCheckItemIds(): number[];
    }
    module ListView {
        class FixedViewInfo {
            _ListView_this: ListView;
            constructor(arg: ListView);
            view: View;
            data: any;
            isSelectable: boolean;
        }
        class FocusSelector implements Runnable {
            _ListView_this: ListView;
            constructor(arg: ListView);
            private mPosition;
            private mPositionTop;
            setup(position: number, top: number): ListView.FocusSelector;
            run(): void;
        }
        class ArrowScrollFocusResult {
            private mSelectedPosition;
            private mAmountToScroll;
            populate(selectedPosition: number, amountToScroll: number): void;
            getSelectedPosition(): number;
            getAmountToScroll(): number;
        }
    }
}
declare module android.widget {
    import Canvas = android.graphics.Canvas;
    import Rect = android.graphics.Rect;
    import KeyEvent = android.view.KeyEvent;
    import MotionEvent = android.view.MotionEvent;
    import View = android.view.View;
    import FrameLayout = android.widget.FrameLayout;
    class HorizontalScrollView extends FrameLayout {
        private static ANIMATED_SCROLL_GAP;
        private static MAX_SCROLL_FACTOR;
        private static TAG;
        private mLastScroll;
        private mTempRect;
        private mScroller;
        private mLastMotionX;
        private mIsLayoutDirty;
        private mChildToScrollTo;
        private mIsBeingDragged;
        private mVelocityTracker;
        private mFillViewport;
        private mSmoothScrollingEnabled;
        private mMinimumVelocity;
        private mMaximumVelocity;
        private mOverscrollDistance;
        private _mOverflingDistance;
        private mOverflingDistance;
        private mActivePointerId;
        private static INVALID_POINTER;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        protected getLeftFadingEdgeStrength(): number;
        protected getRightFadingEdgeStrength(): number;
        getMaxScrollAmount(): number;
        private initScrollView();
        addView(...args: any[]): any;
        private canScroll();
        isFillViewport(): boolean;
        setFillViewport(fillViewport: boolean): void;
        isSmoothScrollingEnabled(): boolean;
        setSmoothScrollingEnabled(smoothScrollingEnabled: boolean): void;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        dispatchKeyEvent(event: KeyEvent): boolean;
        executeKeyEvent(event: KeyEvent): boolean;
        private inChild(x, y);
        private initOrResetVelocityTracker();
        private initVelocityTrackerIfNotExists();
        private recycleVelocityTracker();
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        onInterceptTouchEvent(ev: MotionEvent): boolean;
        onTouchEvent(ev: MotionEvent): boolean;
        private onSecondaryPointerUp(ev);
        onGenericMotionEvent(event: MotionEvent): boolean;
        shouldDelayChildPressedState(): boolean;
        protected onOverScrolled(scrollX: number, scrollY: number, clampedX: boolean, clampedY: boolean): void;
        private getScrollRange();
        private findFocusableViewInMyBounds(leftFocus, left, preferredFocusable);
        private findFocusableViewInBounds(leftFocus, left, right);
        pageScroll(direction: number): boolean;
        fullScroll(direction: number): boolean;
        private scrollAndFocus(direction, left, right);
        arrowScroll(direction: number): boolean;
        private isOffScreen(descendant);
        private isWithinDeltaOfScreen(descendant, delta);
        private doScrollX(delta);
        smoothScrollBy(dx: number, dy: number): void;
        smoothScrollTo(x: number, y: number): void;
        protected computeHorizontalScrollRange(): number;
        protected computeHorizontalScrollOffset(): number;
        protected measureChild(child: View, parentWidthMeasureSpec: number, parentHeightMeasureSpec: number): void;
        protected measureChildWithMargins(child: View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
        computeScroll(): void;
        private scrollToChild(child);
        private scrollToChildRect(rect, immediate);
        protected computeScrollDeltaToGetChildRectOnScreen(rect: Rect): number;
        requestChildFocus(child: View, focused: View): void;
        protected onRequestFocusInDescendants(direction: number, previouslyFocusedRect: Rect): boolean;
        requestChildRectangleOnScreen(child: View, rectangle: Rect, immediate: boolean): boolean;
        requestLayout(): void;
        protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        private static isViewDescendantOf(child, parent);
        fling(velocityX: number): void;
        scrollTo(x: number, y: number): void;
        setOverScrollMode(mode: number): void;
        draw(canvas: Canvas): void;
        private static clamp(n, my, child);
    }
}
declare module android.widget {
    import ArrayMap = android.util.ArrayMap;
    import SparseMap = android.util.SparseMap;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    class RelativeLayout extends ViewGroup {
        static TRUE: number;
        static LEFT_OF: number;
        static RIGHT_OF: number;
        static ABOVE: number;
        static BELOW: number;
        static ALIGN_BASELINE: number;
        static ALIGN_LEFT: number;
        static ALIGN_TOP: number;
        static ALIGN_RIGHT: number;
        static ALIGN_BOTTOM: number;
        static ALIGN_PARENT_LEFT: number;
        static ALIGN_PARENT_TOP: number;
        static ALIGN_PARENT_RIGHT: number;
        static ALIGN_PARENT_BOTTOM: number;
        static CENTER_IN_PARENT: number;
        static CENTER_HORIZONTAL: number;
        static CENTER_VERTICAL: number;
        static START_OF: number;
        static END_OF: number;
        static ALIGN_START: number;
        static ALIGN_END: number;
        static ALIGN_PARENT_START: number;
        static ALIGN_PARENT_END: number;
        private static VERB_COUNT;
        private static RULES_VERTICAL;
        private static RULES_HORIZONTAL;
        private mBaselineView;
        private mHasBaselineAlignedChild;
        private mGravity;
        private mContentBounds;
        private mSelfBounds;
        private mIgnoreGravity;
        private mDirtyHierarchy;
        private mSortedHorizontalChildren;
        private mSortedVerticalChildren;
        private mGraph;
        private mAllowBrokenMeasureSpecs;
        private mMeasureVerticalWithPaddingMargin;
        private static DEFAULT_WIDTH;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private queryCompatibilityModes();
        shouldDelayChildPressedState(): boolean;
        setIgnoreGravity(viewId: string): void;
        getGravity(): number;
        setGravity(gravity: number): void;
        setHorizontalGravity(horizontalGravity: number): void;
        setVerticalGravity(verticalGravity: number): void;
        getBaseline(): number;
        requestLayout(): void;
        private sortChildren();
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        private alignBaseline(child, params);
        private _measureChild(child, params, myWidth, myHeight);
        private measureChildHorizontal(child, params, myWidth, myHeight);
        private getChildMeasureSpec(childStart, childEnd, childSize, startMargin, endMargin, startPadding, endPadding, mySize);
        private positionChildHorizontal(child, params, myWidth, wrapContent);
        private positionChildVertical(child, params, myHeight, wrapContent);
        private applyHorizontalSizeRules(childParams, myWidth, rules);
        private applyVerticalSizeRules(childParams, myHeight);
        private getRelatedView(rules, relation);
        private getRelatedViewParams(rules, relation);
        private getRelatedViewBaseline(rules, relation);
        private static centerHorizontal(child, params, myWidth);
        private static centerVertical(child, params, myHeight);
        protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        protected generateDefaultLayoutParams(): ViewGroup.LayoutParams;
        protected checkLayoutParams(p: ViewGroup.LayoutParams): boolean;
        protected generateLayoutParams(p: ViewGroup.LayoutParams): ViewGroup.LayoutParams;
    }
    module RelativeLayout {
        class LayoutParams extends ViewGroup.MarginLayoutParams {
            private mRules;
            private mInitialRules;
            private mLeft;
            private mTop;
            private mRight;
            private mBottom;
            private mStart;
            private mEnd;
            private mRulesChanged;
            private mIsRtlCompatibilityMode;
            alignWithParent: boolean;
            constructor(w: number, h: number);
            constructor(source: ViewGroup.LayoutParams);
            constructor(...args: any[]);
            addRule(verb: number, anchor?: string): void;
            removeRule(verb: number): void;
            private hasRelativeRules();
            private resolveRules(layoutDirection);
            getRules(layoutDirection?: number): string[];
            resolveLayoutDirection(layoutDirection: number): void;
        }
        class DependencyGraph {
            private mNodes;
            private mKeyNodes;
            private mRoots;
            clear(): void;
            add(view: View): void;
            getSortedViews(sorted: View[], rules: number[]): void;
            private findRoots(rulesFilter);
        }
        module DependencyGraph {
            class Node {
                view: View;
                dependents: ArrayMap<Node, RelativeLayout.DependencyGraph>;
                dependencies: SparseMap<string, Node>;
                private static POOL_LIMIT;
                private static sPool;
                static acquire(view: View): Node;
                release(): void;
            }
        }
    }
}
declare module android.widget {
    import Canvas = android.graphics.Canvas;
    import Matrix = android.graphics.Matrix;
    import Drawable = android.graphics.drawable.Drawable;
    import View = android.view.View;
    class ImageView extends View {
        private mUri;
        private mMatrix;
        private mScaleType;
        private mHaveFrame;
        private mAdjustViewBounds;
        private mMaxWidth;
        private mMaxHeight;
        private mAlpha;
        private mViewAlphaScale;
        private mColorMod;
        private mDrawable;
        private mState;
        private mMergeState;
        private mLevel;
        private mDrawableWidth;
        private mDrawableHeight;
        private mDrawMatrix;
        private mTempSrc;
        private mTempDst;
        private mCropToPadding;
        private mBaseline;
        private mBaselineAlignBottom;
        private mAdjustViewBoundsCompat;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private initImageView();
        protected verifyDrawable(dr: Drawable): boolean;
        jumpDrawablesToCurrentState(): void;
        invalidateDrawable(dr: Drawable): void;
        hasOverlappingRendering(): boolean;
        getAdjustViewBounds(): boolean;
        setAdjustViewBounds(adjustViewBounds: boolean): void;
        getMaxWidth(): number;
        setMaxWidth(maxWidth: number): void;
        getMaxHeight(): number;
        setMaxHeight(maxHeight: number): void;
        getDrawable(): Drawable;
        setImageURI(uri: string): void;
        setImageDrawable(drawable: Drawable): void;
        setImageState(state: number[], merge: boolean): void;
        setSelected(selected: boolean): void;
        setImageLevel(level: number): void;
        setScaleType(scaleType: ImageView.ScaleType): void;
        getScaleType(): ImageView.ScaleType;
        getImageMatrix(): Matrix;
        setImageMatrix(matrix: Matrix): void;
        getCropToPadding(): boolean;
        setCropToPadding(cropToPadding: boolean): void;
        private resolveUri();
        onCreateDrawableState(extraSpace: number): number[];
        private updateDrawable(d);
        private resizeFromDrawable();
        private static sS2FArray;
        private static scaleTypeToScaleToFit(st);
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        private resolveAdjustedSize(desiredSize, maxSize, measureSpec);
        protected setFrame(l: number, t: number, r: number, b: number): boolean;
        private configureBounds();
        protected drawableStateChanged(): void;
        protected onDraw(canvas: Canvas): void;
        getBaseline(): number;
        setBaseline(baseline: number): void;
        setBaselineAlignBottom(aligned: boolean): void;
        getBaselineAlignBottom(): boolean;
        getImageAlpha(): number;
        setImageAlpha(alpha: number): void;
        setAlpha(alpha: number): void;
        private applyColorMod();
        setVisibility(visibility: number): void;
        protected onAttachedToWindow(): void;
        protected onDetachedFromWindow(): void;
        static parseScaleType(s: string, defaultType: ImageView.ScaleType): ImageView.ScaleType;
    }
    module ImageView {
        enum ScaleType {
            MATRIX = 0,
            FIT_XY = 1,
            FIT_START = 2,
            FIT_CENTER = 3,
            FIT_END = 4,
            CENTER = 5,
            CENTER_CROP = 6,
            CENTER_INSIDE = 7,
        }
    }
}
declare module android.widget {
    class ImageButton extends ImageView {
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
    }
}
declare module android.widget {
    import Rect = android.graphics.Rect;
    import KeyEvent = android.view.KeyEvent;
    import AbsListView = android.widget.AbsListView;
    import ListAdapter = android.widget.ListAdapter;
    class GridView extends AbsListView {
        static NO_STRETCH: number;
        static STRETCH_SPACING: number;
        static STRETCH_COLUMN_WIDTH: number;
        static STRETCH_SPACING_UNIFORM: number;
        static AUTO_FIT: number;
        private mNumColumns;
        private mHorizontalSpacing;
        private mRequestedHorizontalSpacing;
        private mVerticalSpacing;
        private mStretchMode;
        private mColumnWidth;
        private mRequestedColumnWidth;
        private mRequestedNumColumns;
        private mReferenceView;
        private mReferenceViewInSelectedRow;
        private mGravity;
        private mTempRect;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        getAdapter(): ListAdapter;
        setAdapter(adapter: ListAdapter): void;
        lookForSelectablePosition(position: number, lookDown: boolean): number;
        fillGap(down: boolean): void;
        private fillDown(pos, nextTop);
        private makeRow(startPos, y, flow);
        private fillUp(pos, nextBottom);
        private fillFromTop(nextTop);
        private fillFromBottom(lastPosition, nextBottom);
        private fillSelection(childrenTop, childrenBottom);
        private pinToTop(childrenTop);
        private pinToBottom(childrenBottom);
        findMotionRow(y: number): number;
        private fillSpecific(position, top);
        private correctTooHigh(numColumns, verticalSpacing, childCount);
        private correctTooLow(numColumns, verticalSpacing, childCount);
        private fillFromSelection(selectedTop, childrenTop, childrenBottom);
        private getBottomSelectionPixel(childrenBottom, fadingEdgeLength, numColumns, rowStart);
        private getTopSelectionPixel(childrenTop, fadingEdgeLength, rowStart);
        private adjustForBottomFadingEdge(childInSelectedRow, topSelectionPixel, bottomSelectionPixel);
        private adjustForTopFadingEdge(childInSelectedRow, topSelectionPixel, bottomSelectionPixel);
        smoothScrollToPosition(position: number): void;
        smoothScrollByOffset(offset: number): void;
        private moveSelection(delta, childrenTop, childrenBottom);
        private determineColumns(availableSpace);
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        protected layoutChildren(): void;
        private makeAndAddView(position, y, flow, childrenLeft, selected, where);
        private setupChild(child, position, y, flow, childrenLeft, selected, recycled, where);
        setSelection(position: number): void;
        setSelectionInt(position: number): void;
        onKeyDown(keyCode: number, event: KeyEvent): boolean;
        onKeyMultiple(keyCode: number, repeatCount: number, event: KeyEvent): boolean;
        onKeyUp(keyCode: number, event: KeyEvent): boolean;
        private commonKey(keyCode, count, event);
        pageScroll(direction: number): boolean;
        fullScroll(direction: number): boolean;
        arrowScroll(direction: number): boolean;
        sequenceScroll(direction: number): boolean;
        protected onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: Rect): void;
        private isCandidateSelection(childIndex, direction);
        setGravity(gravity: number): void;
        getGravity(): number;
        setHorizontalSpacing(horizontalSpacing: number): void;
        getHorizontalSpacing(): number;
        getRequestedHorizontalSpacing(): number;
        setVerticalSpacing(verticalSpacing: number): void;
        getVerticalSpacing(): number;
        setStretchMode(stretchMode: number): void;
        getStretchMode(): number;
        setColumnWidth(columnWidth: number): void;
        getColumnWidth(): number;
        getRequestedColumnWidth(): number;
        setNumColumns(numColumns: number): void;
        getNumColumns(): number;
        private adjustViewsUpOrDown();
        protected computeVerticalScrollExtent(): number;
        protected computeVerticalScrollOffset(): number;
        protected computeVerticalScrollRange(): number;
    }
}
declare module android.view.animation {
    class DecelerateInterpolator implements Interpolator {
        private mFactor;
        constructor(factor?: number);
        getInterpolation(input: number): number;
    }
}
declare module java.util {
    class Collections {
        private static EMPTY_LIST;
        static emptyList(): List<any>;
    }
}
declare module android.R {
    class layout {
        static number_picker: HTMLElement;
    }
}
declare module android.widget {
    import Canvas = android.graphics.Canvas;
    import KeyEvent = android.view.KeyEvent;
    import MotionEvent = android.view.MotionEvent;
    import Runnable = java.lang.Runnable;
    import LinearLayout = android.widget.LinearLayout;
    class NumberPicker extends LinearLayout {
        private SELECTOR_WHEEL_ITEM_COUNT;
        private static DEFAULT_LONG_PRESS_UPDATE_INTERVAL;
        private SELECTOR_MIDDLE_ITEM_INDEX;
        private static SELECTOR_MAX_FLING_VELOCITY_ADJUSTMENT;
        private static SELECTOR_ADJUSTMENT_DURATION_MILLIS;
        private static SNAP_SCROLL_DURATION;
        private static TOP_AND_BOTTOM_FADING_EDGE_STRENGTH;
        private static UNSCALED_DEFAULT_SELECTION_DIVIDER_HEIGHT;
        private static UNSCALED_DEFAULT_SELECTION_DIVIDERS_DISTANCE;
        private static SIZE_UNSPECIFIED;
        private static sTwoDigitFormatter;
        static getTwoDigitFormatter(): NumberPicker.Formatter;
        private mSelectionDividersDistance;
        private mMinHeight_;
        private mMaxHeight;
        private mMinWidth_;
        private mMaxWidth;
        private mComputeMaxWidth;
        private mTextSize;
        private mSelectorTextGapHeight;
        private mDisplayedValues;
        private mMinValue;
        private mMaxValue;
        private mValue;
        private mOnValueChangeListener;
        private mOnScrollListener;
        private mFormatter;
        private mLongPressUpdateInterval;
        private mSelectorIndexToStringCache;
        private mSelectorIndices;
        private mSelectorWheelPaint;
        private mVirtualButtonPressedDrawable;
        private mSelectorElementHeight;
        private mInitialScrollOffset;
        private mCurrentScrollOffset;
        private mFlingScroller;
        private mAdjustScroller;
        private mPreviousScrollerY;
        private mSetSelectionCommand;
        private mChangeCurrentByOneFromLongPressCommand;
        private mBeginSoftInputOnLongPressCommand;
        private mLastDownEventY;
        private mLastDownEventTime;
        private mLastDownOrMoveEventY;
        private mVelocityTracker;
        private mMinimumFlingVelocity;
        private mMaximumFlingVelocity;
        private mWrapSelectorWheel;
        private mSolidColor;
        private mHasSelectorWheel;
        private mSelectionDivider;
        private mSelectionDividerHeight;
        private mScrollState;
        private mIngonreMoveEvents;
        private mShowSoftInputOnTap;
        private mTopSelectionDividerTop;
        private mBottomSelectionDividerBottom;
        private mLastHoveredChildVirtualViewId;
        private mIncrementVirtualButtonPressed;
        private mDecrementVirtualButtonPressed;
        private mPressedStateHelper;
        private mLastHandledDownDpadKeyCode;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        protected onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
        protected onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        private moveToFinalScrollerPosition(scroller);
        onInterceptTouchEvent(event: MotionEvent): boolean;
        onTouchEvent(event: MotionEvent): boolean;
        dispatchTouchEvent(event: MotionEvent): boolean;
        dispatchKeyEvent(event: KeyEvent): boolean;
        computeScroll(): void;
        setEnabled(enabled: boolean): void;
        scrollBy(x: number, y: number): void;
        protected computeVerticalScrollOffset(): number;
        protected computeVerticalScrollRange(): number;
        protected computeVerticalScrollExtent(): number;
        getSolidColor(): number;
        setOnValueChangedListener(onValueChangedListener: NumberPicker.OnValueChangeListener): void;
        setOnScrollListener(onScrollListener: NumberPicker.OnScrollListener): void;
        setFormatter(formatter: NumberPicker.Formatter): void;
        setValue(value: number): void;
        private showSoftInput();
        private hideSoftInput();
        private tryComputeMaxWidth();
        getWrapSelectorWheel(): boolean;
        setWrapSelectorWheel(wrapSelectorWheel: boolean): void;
        setOnLongPressUpdateInterval(intervalMillis: number): void;
        getValue(): number;
        getMinValue(): number;
        setMinValue(minValue: number): void;
        getMaxValue(): number;
        setMaxValue(maxValue: number): void;
        getDisplayedValues(): string[];
        setDisplayedValues(displayedValues: string[]): void;
        protected getTopFadingEdgeStrength(): number;
        protected getBottomFadingEdgeStrength(): number;
        protected onDetachedFromWindow(): void;
        protected onDraw(canvas: Canvas): void;
        private makeMeasureSpec(measureSpec, maxSize);
        private resolveSizeAndStateRespectingMinSize(minSize, measuredSize, measureSpec);
        private initializeSelectorWheelIndices();
        private setValueInternal(current, notifyChange);
        private changeValueByOne(increment);
        private initializeSelectorWheel();
        private initializeFadingEdges();
        private onScrollerFinished(scroller);
        private onScrollStateChange(scrollState);
        private fling(velocityY);
        private getWrappedSelectorIndex(selectorIndex);
        private incrementSelectorIndices(selectorIndices);
        private decrementSelectorIndices(selectorIndices);
        private ensureCachedScrollSelectorValue(selectorIndex);
        private formatNumber(value);
        private validateInputTextView(v);
        private updateInputTextView();
        private notifyChange(previous, current);
        private postChangeCurrentByOneFromLongPress(increment, delayMillis);
        private removeChangeCurrentByOneFromLongPress();
        private postBeginSoftInputOnLongPressCommand();
        private removeBeginSoftInputCommand();
        private removeAllCallbacks();
        private getSelectedPos(value);
        private postSetSelectionCommand(selectionStart, selectionEnd);
        private ensureScrollWheelAdjusted();
        private static formatNumberWithLocale(value);
    }
    module NumberPicker {
        class TwoDigitFormatter implements NumberPicker.Formatter {
            format(value: number): string;
        }
        interface OnValueChangeListener {
            onValueChange(picker: NumberPicker, oldVal: number, newVal: number): void;
        }
        interface OnScrollListener {
            onScrollStateChange(view: NumberPicker, scrollState: number): void;
        }
        module OnScrollListener {
            var SCROLL_STATE_IDLE: number;
            var SCROLL_STATE_TOUCH_SCROLL: number;
            var SCROLL_STATE_FLING: number;
        }
        interface Formatter {
            format(value: number): string;
        }
        class PressedStateHelper implements Runnable {
            _NumberPicker_this: NumberPicker;
            constructor(arg: NumberPicker);
            static BUTTON_INCREMENT: number;
            static BUTTON_DECREMENT: number;
            private MODE_PRESS;
            private MODE_TAPPED;
            private mManagedButton;
            private mMode;
            cancel(): void;
            buttonPressDelayed(button: number): void;
            buttonTapped(button: number): void;
            run(): void;
        }
        class SetSelectionCommand implements Runnable {
            _NumberPicker_this: NumberPicker;
            constructor(arg: NumberPicker);
            private mSelectionStart;
            private mSelectionEnd;
            run(): void;
        }
        class ChangeCurrentByOneFromLongPressCommand implements Runnable {
            _NumberPicker_this: NumberPicker;
            constructor(arg: NumberPicker);
            private mIncrement;
            private setStep(increment);
            run(): void;
        }
        class BeginSoftInputOnLongPressCommand implements Runnable {
            _NumberPicker_this: NumberPicker;
            constructor(arg: NumberPicker);
            run(): void;
        }
    }
}
declare module android.support.v4.view {
    import DataSetObserver = android.database.DataSetObserver;
    import ViewGroup = android.view.ViewGroup;
    import View = android.view.View;
    abstract class PagerAdapter {
        private mObservable;
        static POSITION_UNCHANGED: number;
        static POSITION_NONE: number;
        abstract getCount(): number;
        startUpdate(container: ViewGroup): void;
        instantiateItem(container: ViewGroup, position: number): any;
        destroyItem(container: ViewGroup, position: number, object: any): void;
        setPrimaryItem(container: ViewGroup, position: number, object: any): void;
        finishUpdate(container: ViewGroup): void;
        abstract isViewFromObject(view: View, object: any): boolean;
        getItemPosition(object: any): number;
        notifyDataSetChanged(): void;
        registerDataSetObserver(observer: DataSetObserver): void;
        unregisterDataSetObserver(observer: DataSetObserver): void;
        getPageTitle(position: number): string;
        getPageWidth(position: number): number;
    }
}
declare module android.support.v4.view {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import ArrayList = java.util.ArrayList;
    import Rect = android.graphics.Rect;
    import PagerAdapter = android.support.v4.view.PagerAdapter;
    import Drawable = android.graphics.drawable.Drawable;
    import MotionEvent = android.view.MotionEvent;
    import KeyEvent = android.view.KeyEvent;
    class ViewPager extends ViewGroup {
        private mExpectedAdapterCount;
        private static COMPARATOR;
        private static USE_CACHE;
        private static DEFAULT_OFFSCREEN_PAGES;
        private static MAX_SETTLE_DURATION;
        private static MIN_DISTANCE_FOR_FLING;
        private static DEFAULT_GUTTER_SIZE;
        private static MIN_FLING_VELOCITY;
        private static sInterpolator;
        private mItems;
        private mTempItem;
        private mTempRect;
        private mAdapter;
        private mCurItem;
        private mRestoredCurItem;
        private mScroller;
        private mObserver;
        private mPageMargin;
        private mMarginDrawable;
        private mTopPageBounds;
        private mBottomPageBounds;
        private mFirstOffset;
        private mLastOffset;
        private mChildWidthMeasureSpec;
        private mChildHeightMeasureSpec;
        private mInLayout;
        private mScrollingCacheEnabled;
        private mPopulatePending;
        private mOffscreenPageLimit;
        private mIsBeingDragged;
        private mIsUnableToDrag;
        private mDefaultGutterSize;
        private mGutterSize;
        private mLastMotionX;
        private mLastMotionY;
        private mInitialMotionX;
        private mInitialMotionY;
        private static INVALID_POINTER;
        private mActivePointerId;
        private mVelocityTracker;
        private mMinimumVelocity;
        private mMaximumVelocity;
        private mFlingDistance;
        private mCloseEnough;
        private static CLOSE_ENOUGH;
        private mFakeDragging;
        private mFakeDragBeginTime;
        private mFirstLayout;
        private mNeedCalculatePageOffsets;
        private mCalledSuper;
        private mDecorChildCount;
        private mOnPageChangeListeners;
        private mOnPageChangeListener;
        private mInternalPageChangeListener;
        private mAdapterChangeListener;
        private mPageTransformer;
        private static DRAW_ORDER_DEFAULT;
        private static DRAW_ORDER_FORWARD;
        private static DRAW_ORDER_REVERSE;
        private mDrawingOrder;
        private mDrawingOrderedChildren;
        private static sPositionComparator;
        static SCROLL_STATE_IDLE: number;
        static SCROLL_STATE_DRAGGING: number;
        static SCROLL_STATE_SETTLING: number;
        private mEndScrollRunnable;
        private mScrollState;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private initViewPager();
        protected onDetachedFromWindow(): void;
        private setScrollState(newState);
        setAdapter(adapter: PagerAdapter): void;
        private removeNonDecorViews();
        getAdapter(): PagerAdapter;
        setOnAdapterChangeListener(listener: ViewPager.OnAdapterChangeListener): void;
        private getClientWidth();
        setCurrentItem(item: number, smoothScroll?: boolean): void;
        getCurrentItem(): number;
        setCurrentItemInternal(item: number, smoothScroll: boolean, always: boolean, velocity?: number): void;
        private scrollToItem(item, smoothScroll, velocity, dispatchSelected);
        setOnPageChangeListener(listener: ViewPager.OnPageChangeListener): void;
        addOnPageChangeListener(listener: ViewPager.OnPageChangeListener): void;
        removeOnPageChangeListener(listener: ViewPager.OnPageChangeListener): void;
        clearOnPageChangeListeners(): void;
        setPageTransformer(reverseDrawingOrder: boolean, transformer: ViewPager.PageTransformer): void;
        setChildrenDrawingOrderEnabledCompat(enable?: boolean): void;
        getChildDrawingOrder(childCount: number, i: number): number;
        setInternalPageChangeListener(listener: ViewPager.OnPageChangeListener): ViewPager.OnPageChangeListener;
        getOffscreenPageLimit(): number;
        setOffscreenPageLimit(limit: number): void;
        setPageMargin(marginPixels: number): void;
        getPageMargin(): number;
        setPageMarginDrawable(d: Drawable): void;
        protected verifyDrawable(who: Drawable): boolean;
        protected drawableStateChanged(): void;
        distanceInfluenceForSnapDuration(f: number): number;
        smoothScrollTo(x: number, y: number, velocity?: number): void;
        private addNewItem(position, index);
        dataSetChanged(): void;
        populate(newCurrentItem?: number): void;
        private sortChildDrawingOrder();
        private calculatePageOffsets(curItem, curIndex, oldCurInfo);
        addView(view: View): any;
        addView(view: View, index: number): any;
        addView(view: View, params: ViewGroup.LayoutParams): any;
        addView(view: View, index: number, params: ViewGroup.LayoutParams): any;
        addView(view: View, width: number, height: number): any;
        private _addViewOverride(child, index, params);
        removeView(view: android.view.View): void;
        private infoForChild(child);
        private infoForAnyChild(child);
        private infoForPosition(position);
        protected onAttachedToWindow(): void;
        protected onMeasure(widthMeasureSpec: any, heightMeasureSpec: any): void;
        protected onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
        private recomputeScrollPosition(width, oldWidth, margin, oldMargin);
        protected onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
        computeScroll(): void;
        private pageScrolled(xpos);
        onPageScrolled(position: number, offset: number, offsetPixels: number): void;
        private dispatchOnPageScrolled(position, offset, offsetPixels);
        private dispatchOnPageSelected(position);
        private dispatchOnScrollStateChanged(state);
        private completeScroll(postEvents);
        private isGutterDrag(x, dx);
        private enableLayers(enable);
        onInterceptTouchEvent(ev: MotionEvent): boolean;
        onTouchEvent(ev: android.view.MotionEvent): boolean;
        private resetTouch();
        private requestParentDisallowInterceptTouchEvent(disallowIntercept);
        private performDrag(x);
        private infoForCurrentScrollPosition();
        private determineTargetPage(currentPage, pageOffset, velocity, deltaX);
        draw(canvas: android.graphics.Canvas): void;
        protected onDraw(canvas: android.graphics.Canvas): void;
        beginFakeDrag(): boolean;
        endFakeDrag(): void;
        fakeDragBy(xOffset: number): void;
        isFakeDragging(): boolean;
        private onSecondaryPointerUp(ev);
        private endDrag();
        private setScrollingCacheEnabled(enabled);
        canScrollHorizontally(direction: number): boolean;
        canScroll(v: View, checkV: boolean, dx: number, x: number, y: number): boolean;
        dispatchKeyEvent(event: android.view.KeyEvent): boolean;
        executeKeyEvent(event: KeyEvent): boolean;
        arrowScroll(direction: number): boolean;
        private getChildRectInPagerCoordinates(outRect, child);
        pageLeft(): boolean;
        pageRight(): boolean;
        addFocusables(views: ArrayList<View>, direction: number, focusableMode: number): void;
        addTouchables(views: java.util.ArrayList<android.view.View>): void;
        protected onRequestFocusInDescendants(direction: number, previouslyFocusedRect: Rect): boolean;
        protected generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
        protected generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
        protected checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
        private static isImplDecor(view);
        static setClassImplDecor(clazz: Function): void;
    }
    module ViewPager {
        interface OnPageChangeListener {
            onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
            onPageSelected(position: number): void;
            onPageScrollStateChanged(state: number): void;
        }
        class SimpleOnPageChangeListener implements OnPageChangeListener {
            onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
            onPageSelected(position: number): void;
            onPageScrollStateChanged(state: number): void;
        }
        interface PageTransformer {
            transformPage(page: View, position: number): void;
        }
        interface OnAdapterChangeListener {
            onAdapterChanged(oldAdapter: PagerAdapter, newAdapter: PagerAdapter): void;
        }
        class LayoutParams extends ViewGroup.LayoutParams {
            isDecor: boolean;
            gravity: number;
            widthFactor: number;
            needsMeasure: boolean;
            position: number;
            childIndex: number;
            constructor();
        }
    }
}
declare module android.support.v4.widget {
    import MotionEvent = android.view.MotionEvent;
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    class ViewDragHelper {
        private static TAG;
        static INVALID_POINTER: number;
        static STATE_IDLE: number;
        static STATE_DRAGGING: number;
        static STATE_SETTLING: number;
        static EDGE_LEFT: number;
        static EDGE_RIGHT: number;
        static EDGE_TOP: number;
        static EDGE_BOTTOM: number;
        static EDGE_ALL: number;
        static DIRECTION_HORIZONTAL: number;
        static DIRECTION_VERTICAL: number;
        static DIRECTION_ALL: number;
        private static EDGE_SIZE;
        private static BASE_SETTLE_DURATION;
        private static MAX_SETTLE_DURATION;
        private mDragState;
        private mTouchSlop;
        private mActivePointerId;
        private mInitialMotionX;
        private mInitialMotionY;
        private mLastMotionX;
        private mLastMotionY;
        private mInitialEdgesTouched;
        private mEdgeDragsInProgress;
        private mEdgeDragsLocked;
        private mPointersDown;
        private mVelocityTracker;
        private mMaxVelocity;
        private mMinVelocity;
        private mEdgeSize;
        private mTrackingEdges;
        private mScroller;
        private mCallback;
        private mCapturedView;
        private mReleaseInProgress;
        private mParentView;
        private static sInterpolator;
        private mSetIdleRunnable;
        static create(forParent: ViewGroup, cb: ViewDragHelper.Callback): ViewDragHelper;
        static create(forParent: ViewGroup, sensitivity: number, cb: ViewDragHelper.Callback): ViewDragHelper;
        constructor(forParent: ViewGroup, cb: ViewDragHelper.Callback);
        setMinVelocity(minVel: number): void;
        getMinVelocity(): number;
        getViewDragState(): number;
        setEdgeTrackingEnabled(edgeFlags: number): void;
        getEdgeSize(): number;
        captureChildView(childView: View, activePointerId: number): void;
        getCapturedView(): View;
        getActivePointerId(): number;
        getTouchSlop(): number;
        cancel(): void;
        abort(): void;
        smoothSlideViewTo(child: View, finalLeft: number, finalTop: number): boolean;
        settleCapturedViewAt(finalLeft: number, finalTop: number): boolean;
        private forceSettleCapturedViewAt(finalLeft, finalTop, xvel, yvel);
        private computeSettleDuration(child, dx, dy, xvel, yvel);
        private computeAxisDuration(delta, velocity, motionRange);
        private clampMag(value, absMin, absMax);
        private distanceInfluenceForSnapDuration(f);
        flingCapturedView(minLeft: number, minTop: number, maxLeft: number, maxTop: number): void;
        continueSettling(deferCallbacks: boolean): boolean;
        private dispatchViewReleased(xvel, yvel);
        private clearMotionHistory(pointerId?);
        private ensureMotionHistorySizeForId(pointerId);
        private saveInitialMotion(x, y, pointerId);
        private saveLastMotion(ev);
        isPointerDown(pointerId: number): boolean;
        setDragState(state: number): void;
        tryCaptureViewForDrag(toCapture: View, pointerId: number): boolean;
        protected canScroll(v: View, checkV: boolean, dx: number, dy: number, x: number, y: number): boolean;
        shouldInterceptTouchEvent(ev: MotionEvent): boolean;
        processTouchEvent(ev: MotionEvent): void;
        private reportNewEdgeDrags(dx, dy, pointerId);
        private checkNewEdgeDrag(delta, odelta, pointerId, edge);
        checkTouchSlop(child: View, dx: number, dy: number): boolean;
        checkTouchSlop(directions: number): boolean;
        checkTouchSlop(directions: number, pointerId: number): boolean;
        private _checkTouchSlop_3(child, dx, dy);
        private _checkTouchSlop_1(directions);
        private _checkTouchSlop_2(directions, pointerId);
        isEdgeTouched(edges: number, pointerId?: number): boolean;
        private releaseViewForPointerUp();
        private dragTo(left, top, dx, dy);
        isCapturedViewUnder(x: number, y: number): boolean;
        isViewUnder(view: View, x: number, y: number): boolean;
        findTopChildUnder(x: number, y: number): View;
        private getEdgesTouched(x, y);
    }
    module ViewDragHelper {
        abstract class Callback {
            onViewDragStateChanged(state: number): void;
            onViewPositionChanged(changedView: View, left: number, top: number, dx: number, dy: number): void;
            onViewCaptured(capturedChild: View, activePointerId: number): void;
            onViewReleased(releasedChild: View, xvel: number, yvel: number): void;
            onEdgeTouched(edgeFlags: number, pointerId: number): void;
            onEdgeLock(edgeFlags: number): boolean;
            onEdgeDragStarted(edgeFlags: number, pointerId: number): void;
            getOrderedChildIndex(index: number): number;
            getViewHorizontalDragRange(child: View): number;
            getViewVerticalDragRange(child: View): number;
            abstract tryCaptureView(child: View, pointerId: number): boolean;
            clampViewPositionHorizontal(child: View, left: number, dx: number): number;
            clampViewPositionVertical(child: View, top: number, dy: number): number;
        }
    }
}
declare module com.jakewharton.salvage {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import PagerAdapter = android.support.v4.view.PagerAdapter;
    abstract class RecyclingPagerAdapter extends PagerAdapter {
        static IGNORE_ITEM_VIEW_TYPE: number;
        private recycleBin;
        constructor();
        notifyDataSetChanged(): void;
        instantiateItem(container: android.view.ViewGroup, position: number): any;
        destroyItem(container: android.view.ViewGroup, position: number, object: any): void;
        isViewFromObject(view: android.view.View, object: any): boolean;
        getViewTypeCount(): number;
        getItemViewType(position: number): number;
        abstract getView(position: number, convertView: View, parent: ViewGroup): View;
    }
}
declare module androidui {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    class AndroidUI {
        static DomClassName: string;
        static BindToElementName: string;
        element: HTMLElement;
        private _canvas;
        private _viewRootImpl;
        private _rootLayout;
        private rootStyleElement;
        private rootResourceElement;
        private _windowBound;
        private tempRect;
        windowBound: android.graphics.Rect;
        private touchEvent;
        private touchAvailable;
        private ketEvent;
        private AndroidID;
        constructor(element: HTMLElement);
        private init();
        private initInflateView();
        private initElementStyle();
        private refreshWindowBound();
        private initFocus();
        private initEvent();
        private initTouchEvent();
        private initMouseEvent();
        private initKeyEvent();
        private initGenericEvent();
        private initListenSizeChange();
        notifySizeChange(): void;
        setContentView(view: View): void;
        addContentView(view: View, params?: ViewGroup.LayoutParams): void;
        findViewById(id: string): View;
        showDebugLayout(): void;
    }
}
declare module android.app {
    import View = android.view.View;
    class Activity extends HTMLDivElement {
        private AndroidUI;
        onCreate(): void;
        createdCallback(): void;
        attachedCallback(): void;
        detachedCallback(): void;
        attributeChangedCallback(attributeName: string, oldVal: string, newVal: string): void;
        setContentView(view: View): void;
        addContentView(view: View): void;
        findViewById(id: string): View;
        static registerCustomElement(): void;
    }
}
declare module androidui.widget {
    import View = android.view.View;
    class HtmlBaseView extends View {
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        onTouchEvent(event: android.view.MotionEvent): boolean;
        requestSyncBoundToElement(immediately?: boolean): void;
        protected onAttachedToWindow(): void;
    }
}
declare module androidui.widget {
    class HtmlView extends HtmlBaseView {
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        protected onMeasure(widthMeasureSpec: any, heightMeasureSpec: any): void;
        setHtml(html: string): void;
        getHtml(): string;
    }
}
declare module androidui.widget {
    import ImageView = android.widget.ImageView;
    class HtmlImageView extends HtmlBaseView {
        private mScaleType;
        private mHaveFrame;
        private mAdjustViewBounds;
        private mMaxWidth;
        private mMaxHeight;
        private mAlpha;
        private mDrawableWidth;
        private mDrawableHeight;
        private mAdjustViewBoundsCompat;
        private mImgElement;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        private initImageView();
        getAdjustViewBounds(): boolean;
        setAdjustViewBounds(adjustViewBounds: boolean): void;
        getMaxWidth(): number;
        setMaxWidth(maxWidth: number): void;
        getMaxHeight(): number;
        setMaxHeight(maxHeight: number): void;
        setImageURI(uri: string): void;
        setScaleType(scaleType: ImageView.ScaleType): void;
        getScaleType(): ImageView.ScaleType;
        protected onMeasure(widthMeasureSpec: any, heightMeasureSpec: any): void;
        private resolveAdjustedSize(desiredSize, maxSize, measureSpec);
        protected setFrame(left: number, top: number, right: number, bottom: number): boolean;
        private configureBounds();
        getImageAlpha(): number;
        setImageAlpha(alpha: number): void;
    }
}
declare module androidui.widget {
    import View = android.view.View;
    import ViewGroup = android.view.ViewGroup;
    import BaseAdapter = android.widget.BaseAdapter;
    class HtmlDataListAdapter extends BaseAdapter implements HtmlDataAdapter {
        static RefElementTag: string;
        static RefElementProperty: string;
        static BindAdapterProperty: string;
        bindElementData: HTMLElement;
        rootElement: HTMLElement;
        onInflateAdapter(bindElement: HTMLElement, rootElement: HTMLElement, parent: android.view.ViewGroup): void;
        private registerHtmlDataObserver();
        getItemViewType(position: number): number;
        getView(position: number, convertView: View, parent: ViewGroup): View;
        getCount(): number;
        getItem(position: number): Element;
        private checkReplaceWithRef(element);
        private removeElementRefAndRestoreToAdapter(childElement);
        notifyDataSizeWillChange(): void;
        getItemId(position: number): number;
    }
}
declare module androidui.widget {
    import PagerAdapter = android.support.v4.view.PagerAdapter;
    class HtmlDataPagerAdapter extends PagerAdapter implements HtmlDataAdapter {
        static RefElementTag: string;
        static RefElementProperty: string;
        static BindAdapterProperty: string;
        bindElementData: HTMLElement;
        rootElement: HTMLElement;
        onInflateAdapter(bindElement: HTMLElement, rootElement: HTMLElement, parent: android.view.ViewGroup): void;
        private registerHtmlDataObserver();
        getCount(): number;
        instantiateItem(container: android.view.ViewGroup, position: number): any;
        getItem(position: number): Element;
        private checkReplaceWithRef(element);
        private removeElementRefAndRestoreToAdapter(childElement);
        notifyDataSizeWillChange(): void;
        destroyItem(container: android.view.ViewGroup, position: number, object: any): void;
        isViewFromObject(view: android.view.View, object: any): boolean;
        getItemPosition(object: any): number;
    }
}
declare module androidui.widget {
    class HtmlDataPickerAdapter implements HtmlDataAdapter {
        bindElementData: HTMLElement;
        rootElement: HTMLElement;
        onInflateAdapter(bindElement: HTMLElement, rootElement: HTMLElement, parent: android.view.ViewGroup): void;
    }
}
declare module androidui.widget {
    import View = android.view.View;
    interface OverScrollLocker {
        lockOverScrollTop(lockTop: number): void;
        lockOverScrollBottom(lockBottom: number): void;
        getScrollContentBottom(): number;
    }
    module OverScrollLocker {
        function getFrom(view: View): OverScrollLocker;
    }
}
declare module androidui.widget {
    import View = android.view.View;
    import FrameLayout = android.widget.FrameLayout;
    import TextView = android.widget.TextView;
    class PullRefreshLoadLayout extends FrameLayout {
        static State_Disable: number;
        static State_Header_Normal: number;
        static State_Header_Refreshing: number;
        static State_Header_ReadyToRefresh: number;
        static State_Header_RefreshFail: number;
        static State_Footer_Normal: number;
        static State_Footer_Loading: number;
        static State_Footer_ReadyToLoad: number;
        static State_Footer_LoadFail: number;
        static State_Footer_NoMoreToLoad: number;
        static StateChangeLimit: {};
        private autoLoadScrollAtBottom;
        private headerView;
        private footerView;
        private footerViewReadyDistance;
        private contentView;
        private contentOverY;
        private overScrollLocker;
        private refreshLoadListener;
        constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
        protected onViewAdded(child: View): void;
        private configHeaderView();
        private configFooterView();
        private configContentView();
        private onContentOverScroll(scrollRangeY, maxOverScrollY, isTouchEvent);
        setHeaderView(headerView: PullRefreshLoadLayout.HeaderView): void;
        setFooterView(footerView: PullRefreshLoadLayout.FooterView): void;
        setContentView(contentView: View): void;
        setHeaderState(newState: number): void;
        getHeaderState(): number;
        setFooterState(newState: number): void;
        getFooterState(): number;
        private checkLockOverScroll();
        private checkHeaderFooterPosition();
        private setHeaderViewAppearDistance(distance);
        private setFooterViewAppearDistance(distance);
        protected onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
        setAutoLoadMoreWhenScrollBottom(autoLoad: boolean): void;
        setRefreshEnable(enable: boolean): void;
        setLoadEnable(enable: boolean): void;
        setRefreshLoadListener(refreshLoadListener: PullRefreshLoadLayout.RefreshLoadListener): void;
        startRefresh(): void;
        startLoadMore(): void;
    }
    module PullRefreshLoadLayout {
        interface RefreshLoadListener {
            onRefresh(prll: PullRefreshLoadLayout): void;
            onLoadMore(prll: PullRefreshLoadLayout): void;
        }
        abstract class HeaderView extends FrameLayout {
            private state;
            private stateBeforeReady;
            protected setStateInner(prll: PullRefreshLoadLayout, state: number): void;
            abstract onStateChange(newState: number, oldState: number): void;
        }
        abstract class FooterView extends FrameLayout {
            private state;
            private stateBeforeReady;
            protected setStateInner(prll: PullRefreshLoadLayout, state: number): void;
            abstract onStateChange(newState: number, oldState: number): void;
        }
        class DefaultHeaderView extends HeaderView {
            textView: TextView;
            constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
            onStateChange(newState: number, oldState: number): void;
        }
        class DefaultFooterView extends FooterView {
            textView: TextView;
            constructor(bindElement?: HTMLElement, rootElement?: HTMLElement);
            onStateChange(newState: number, oldState: number): void;
        }
    }
}
