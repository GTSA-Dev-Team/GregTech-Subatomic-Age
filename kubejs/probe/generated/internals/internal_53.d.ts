/// <reference path="./internal_*.d.ts" />
declare namespace com.mojang.blaze3d.platform {
    class Window implements Internal.WindowKJS, Internal.AutoCloseable {
        constructor(arg0: Internal.WindowEventHandler_, arg1: any_, arg2: any_, arg3: string, arg4: string)
        getClass(): typeof any;
        setFramerateLimit(arg0: number): void;
        getX(): number;
        getY(): number;
        getPreferredFullscreenVideoMode(): Internal.Optional<Internal.VideoMode>;
        findBestMonitor(): Internal.Monitor;
        calculateScale(arg0: number, arg1: boolean): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setErrorSection(arg0: string): void;
        isFullscreen(): boolean;
        setGuiScale(arg0: number): void;
        kjs$loadIcons(original: Internal.List_<Internal.IoSupplier<Internal.InputStream>>): Internal.List<Internal.IoSupplier<Internal.InputStream>>;
        setPreferredFullscreenVideoMode(arg0: Internal.Optional_<Internal.VideoMode>): void;
        shouldClose(): boolean;
        setWidth(arg0: number): void;
        changeFullscreenVideoMode(): void;
        getHeight(): number;
        defaultErrorCallback(arg0: number, arg1: number): void;
        updateRawMouseInput(arg0: boolean): void;
        getGuiScaledWidth(): number;
        static checkGlfwError(arg0: Internal.BiConsumer_<number, string>): void;
        setDefaultErrorCallback(): void;
        getFramerateLimit(): number;
        getScreenHeight(): number;
        toString(): string;
        setIcon(arg0: Internal.PackResources_, arg1: Internal.IconSet_): void;
        getWidth(): number;
        notifyAll(): void;
        getWindow(): number;
        updateVsync(arg0: boolean): void;
        getGuiScaledHeight(): number;
        hashCode(): number;
        setWindowed(arg0: number, arg1: number): void;
        getScreenWidth(): number;
        setTitle(arg0: string): void;
        getGuiScale(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        toggleFullScreen(): void;
        setHeight(arg0: number): void;
        equals(arg0: any): boolean;
        updateDisplay(): void;
        getRefreshRate(): number;
        get class(): typeof any
        set framerateLimit(arg0: number)
        get x(): number
        get y(): number
        get preferredFullscreenVideoMode(): Internal.Optional<Internal.VideoMode>
        set errorSection(arg0: string)
        get fullscreen(): boolean
        set guiScale(arg0: number)
        set preferredFullscreenVideoMode(arg0: Internal.Optional_<Internal.VideoMode>)
        set width(arg0: number)
        get height(): number
        get guiScaledWidth(): number
        get framerateLimit(): number
        get screenHeight(): number
        get width(): number
        get window(): number
        get guiScaledHeight(): number
        get screenWidth(): number
        set title(arg0: string)
        get guiScale(): number
        set height(arg0: number)
        get refreshRate(): number
    }
    type Window_ = Window;
}
declare namespace de.maxhenkel.pipez.corelib.helpers {
    class Pair <K, V> {
        constructor(arg0: K, arg1: V)
        getKey(): K;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getValue(): V;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get key(): K
        get class(): typeof any
        get value(): V
    }
    type Pair_<K, V> = Pair<K, V>;
}
declare namespace org.apache.logging.log4j.core.config {
    class Property {
        getClass(): typeof any;
        toString(): string;
        getValue(): string;
        isValueNeedsLookup(): boolean;
        notifyAll(): void;
        static createProperty(name: string, rawValue: string, value: string): org.apache.logging.log4j.core.config.Property;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getRawValue(): string;
        wait(): void;
        static createProperty(name: string, value: string): org.apache.logging.log4j.core.config.Property;
        static createProperty(name: string, rawValue: string, configuration: org.apache.logging.log4j.core.config.Configuration_): org.apache.logging.log4j.core.config.Property;
        getName(): string;
        static "createProperty(java.lang.String,java.lang.String,java.lang.String)"(name: string, rawValue: string, value: string): org.apache.logging.log4j.core.config.Property;
        evaluate(substitutor: Internal.StrSubstitutor_): string;
        wait(arg0: number): void;
        static "createProperty(java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.Configuration)"(name: string, rawValue: string, configuration: org.apache.logging.log4j.core.config.Configuration_): org.apache.logging.log4j.core.config.Property;
        equals(arg0: any): boolean;
        get class(): typeof any
        get value(): string
        get valueNeedsLookup(): boolean
        get rawValue(): string
        get name(): string
        static readonly EMPTY_ARRAY: org.apache.logging.log4j.core.config.Property[];
    }
    type Property_ = Property;
}
declare namespace Internal {
    class BlockStateModifyPlacementCallbackJS extends Internal.BlockStateModifyCallbackJS {
        constructor(context: Internal.BlockPlaceContext_, block: Internal.Block_)
        /**
         * Gets the facing direction of the clicked block face
        */
        getClickedFace(): Internal.Direction;
        /**
         * Get a map of this blocks properties to it's value
        */
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        /**
         * Gets the nearest horizontal direction to where the player is looking. NORTH if there is no player
        */
        getHorizontalDirection(): Internal.Direction;
        notify(): void;
        /**
         * Sets the value of the specified boolean property
        */
        set(property: Internal.BooleanProperty_, value: boolean): Internal.BlockStateModifyCallbackJS;
        /**
         * Cycles the property
        */
        cycle<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): Internal.BlockStateModifyCallbackJS;
        /**
         * Gets the direction closes to where the player is currently looking
        */
        getNearestLookingDirection(): Internal.Direction;
        /**
         * Gets the vertical direction (UP/DOWN) closest to where the player is currently looking
        */
        getNearestLookingVerticalDirection(): Internal.Direction;
        /**
         * Checks if the position clicked has a specified fluid there
        */
        isClickedPosIn(fluid: Internal.Fluid_): boolean;
        /**
         * Gets the clicked position in world
        */
        getClickedPos(): BlockPos;
        /**
         * Returns if the hit posiiton in the block-space is inside the 1x1x1 cube of the block
        */
        isInside(): boolean;
        /**
         * Rotate the block using the specified Rotation
        */
        rotate(rotation: Internal.Rotation_): Internal.BlockStateModifyCallbackJS;
        /**
         * Sets the value of the specified integer property
        */
        set(property: Internal.IntegerProperty_, value: number): Internal.BlockStateModifyCallbackJS;
        /**
         * Sets the value of the specified integer property
        */
        "set(net.minecraft.world.level.block.state.properties.IntegerProperty,java.lang.Integer)"(property: Internal.IntegerProperty_, value: number): Internal.BlockStateModifyCallbackJS;
        /**
         * Gets an array of all directions, ordered by which the player is looking closest to
        */
        getNearestLookingDirections(): Internal.Direction[];
        /**
         * Returns if the block being placed thinks it can be placed here. This is used for replacement checks, like placing blocks in water or tall grass
        */
        canPlace(): boolean;
        /**
         * Set this block as waterlogged if it is in water
        */
        waterlogged(): this;
        /**
         * Gets the FluidSate at the clicked position
        */
        getFluidStateAtClickedPos(): Internal.FluidState;
        populateNeighbours(map: Internal.Map_<Internal.Map<Internal.Property<any>, Internal.Comparable<any>>, Internal.BlockState>): Internal.BlockStateModifyCallbackJS;
        /**
         * Get the properties this block has that can be changed
        */
        getProperties(): Internal.Collection<Internal.Property<any>>;
        wait(): void;
        /**
         * Returns if the block being placed is replacing the block clicked
        */
        replacingClickedOnBlock(): boolean;
        /**
         * Set if this block is waterlogged or not
        */
        waterlogged(waterlogged: boolean): this;
        /**
         * Checks if this block has the specified property
        */
        hasProperty<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): boolean;
        getClass(): typeof any;
        /**
         * Sets the value of the specified enum property
        */
        "set(net.minecraft.world.level.block.state.properties.EnumProperty,java.lang.String)"<T extends Internal.Enum<T> & Internal.StringRepresentable>(property: Internal.EnumProperty_<T>, value: string): Internal.BlockStateModifyCallbackJS;
        /**
         * Get the horizontal rotation of the player
        */
        getRotation(): number;
        wait(arg0: number, arg1: number): void;
        /**
         * Gets the value of the passed in property
        */
        getValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Gets the level
        */
        getLevel(): Internal.Level;
        /**
         * Gets the position in the block-space of where it was clicked
        */
        getClickLocation(): Vec3d;
        /**
         * Returns if the player is using the 'secondary' function of this item. Basically checks if they are holding shift
        */
        isSecondaryUseActive(): boolean;
        /**
         * Gets the hand that is placing the block
        */
        getHand(): Internal.InteractionHand;
        /**
         * Gets the player placing the block, if available
        */
        getPlayer(): Internal.Player;
        /**
         * Checks if the block currently occupying the position this is being placed in is the same block type.
         * Used for things like candles, where multiple can be in the same block-space.
        */
        isReplacingSelf(): boolean;
        /**
         * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
        */
        updateShape(direction: Internal.Direction_, blockState: Internal.BlockState_, levelAccessor: Internal.LevelAccessor_, blockPos: BlockPos_, blockPos2: BlockPos_): Internal.BlockStateModifyCallbackJS;
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        getState(): Internal.BlockState;
        /**
         * Mirror the block using the specified Mirror
        */
        mirror(mirror: Internal.Mirror_): Internal.BlockStateModifyCallbackJS;
        toString(): string;
        /**
         * Gets the clicked block
        */
        getClickedBlock(): Internal.BlockContainerJS;
        /**
         * Gets the item being placed
        */
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        /**
         * Gets the value of the pased in property
        */
        get<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): T;
        /**
         * Checks if this block is in water
        */
        isInWater(): boolean;
        /**
         * Sets the value of the specified property
        */
        setValue<T extends Internal.Comparable<T>, V extends T>(property: Internal.Property_<T>, comparable: V): Internal.BlockStateModifyCallbackJS;
        /**
         * Sets the value of the specified boolean property
        */
        "set(net.minecraft.world.level.block.state.properties.BooleanProperty,boolean)"(property: Internal.BooleanProperty_, value: boolean): Internal.BlockStateModifyCallbackJS;
        /**
         * Sets the value of the specified enum property
        */
        set<T extends Internal.Enum<T> & Internal.StringRepresentable>(property: Internal.EnumProperty_<T>, value: string): Internal.BlockStateModifyCallbackJS;
        hashCode(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        /**
         * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
        */
        getOptionalValue<T extends Internal.Comparable<T>>(property: Internal.Property_<T>): Internal.Optional<T>;
        /**
         * Gets the facing direction of the clicked block face
        */
        get clickedFace(): Internal.Direction
        /**
         * Get a map of this blocks properties to it's value
        */
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        /**
         * Gets the nearest horizontal direction to where the player is looking. NORTH if there is no player
        */
        get horizontalDirection(): Internal.Direction
        /**
         * Gets the direction closes to where the player is currently looking
        */
        get nearestLookingDirection(): Internal.Direction
        /**
         * Gets the vertical direction (UP/DOWN) closest to where the player is currently looking
        */
        get nearestLookingVerticalDirection(): Internal.Direction
        /**
         * Gets the clicked position in world
        */
        get clickedPos(): BlockPos
        /**
         * Returns if the hit posiiton in the block-space is inside the 1x1x1 cube of the block
        */
        get inside(): boolean
        /**
         * Gets an array of all directions, ordered by which the player is looking closest to
        */
        get nearestLookingDirections(): Internal.Direction[]
        /**
         * Gets the FluidSate at the clicked position
        */
        get fluidStateAtClickedPos(): Internal.FluidState
        /**
         * Get the properties this block has that can be changed
        */
        get properties(): Internal.Collection<Internal.Property<any>>
        get class(): typeof any
        /**
         * Get the horizontal rotation of the player
        */
        get rotation(): number
        /**
         * Gets the level
        */
        get level(): Internal.Level
        /**
         * Gets the position in the block-space of where it was clicked
        */
        get clickLocation(): Vec3d
        /**
         * Returns if the player is using the 'secondary' function of this item. Basically checks if they are holding shift
        */
        get secondaryUseActive(): boolean
        /**
         * Gets the hand that is placing the block
        */
        get hand(): Internal.InteractionHand
        /**
         * Gets the player placing the block, if available
        */
        get player(): Internal.Player
        /**
         * Checks if the block currently occupying the position this is being placed in is the same block type.
         * Used for things like candles, where multiple can be in the same block-space.
        */
        get replacingSelf(): boolean
        /**
         * Gets the state. If it has been modified, gets the new state
        */
        get state(): Internal.BlockState
        /**
         * Gets the clicked block
        */
        get clickedBlock(): Internal.BlockContainerJS
        /**
         * Gets the item being placed
        */
        get item(): Internal.ItemStack
        /**
         * Checks if this block is in water
        */
        get inWater(): boolean
        readonly context: Internal.BlockPlaceContext;
        block: Internal.BlockContainerJS;
        readonly minecraftBlock: Internal.Block;
    }
    type BlockStateModifyPlacementCallbackJS_ = BlockStateModifyPlacementCallbackJS;
    class PlayerInfo implements Internal.PlayerInfoAccessor {
        constructor(arg0: Internal.GameProfile_, arg1: boolean)
        getClass(): typeof any;
        getTabListDisplayName(): net.minecraft.network.chat.Component;
        getModelName(): string;
        getTeam(): Internal.PlayerTeam;
        getChatSession(): Internal.RemoteChatSession;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getCapeLocation(): ResourceLocation;
        getGameMode(): Internal.GameType;
        getLatency(): number;
        hasVerifiableChat(): boolean;
        isCapeLoaded(): boolean;
        toString(): string;
        notifyAll(): void;
        getMessageValidator(): Internal.SignedMessageValidator;
        hashCode(): number;
        getElytraLocation(): ResourceLocation;
        setTabListDisplayName(arg0: net.minecraft.network.chat.Component_): void;
        getSkinLocation(): ResourceLocation;
        getProfile(): Internal.GameProfile;
        wait(): void;
        isSkinLoaded(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getTextureLocations(): Internal.Map<any, any>;
        get class(): typeof any
        get tabListDisplayName(): net.minecraft.network.chat.Component
        get modelName(): string
        get team(): Internal.PlayerTeam
        get chatSession(): Internal.RemoteChatSession
        get capeLocation(): ResourceLocation
        get gameMode(): Internal.GameType
        get latency(): number
        get capeLoaded(): boolean
        get messageValidator(): Internal.SignedMessageValidator
        get elytraLocation(): ResourceLocation
        set tabListDisplayName(arg0: net.minecraft.network.chat.Component_)
        get skinLocation(): ResourceLocation
        get profile(): Internal.GameProfile
        get skinLoaded(): boolean
        get textureLocations(): Internal.Map<any, any>
    }
    type PlayerInfo_ = PlayerInfo;
    class PointedDripstoneBlock extends Internal.Block implements Internal.Fallable, Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        static findStalactiteTipAboveCauldron(arg0: Internal.Level_, arg1: BlockPos_): BlockPos;
        getClass(): typeof any;
        static getCauldronFillFluidType(arg0: Internal.ServerLevel_, arg1: BlockPos_): Internal.Fluid;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static spawnDripParticle(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        static maybeTransferFluid(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: number): void;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        static growStalactiteOrStalagmiteIfPossible(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        static canDrip(arg0: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly THICKNESS: Internal.EnumProperty<Internal.DripstoneThickness>;
        static readonly TIP_DIRECTION: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type PointedDripstoneBlock_ = PointedDripstoneBlock;
    interface IConfigurableWidgetGroup extends Internal.IConfigurableWidget {
        "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        handleDragging(dragging: any): boolean;
        "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        getChatComponent(): net.minecraft.network.chat.Component;
        canWidgetAccepted(widget: Internal.IConfigurableWidget_): boolean;
        deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        initTemplate(): void;
        isLDLRegister(): boolean;
        acceptWidget(widget: Internal.IConfigurableWidget_): void;
        serializeWrapper(): Internal.CompoundTag;
        canDragIn(dragging: any): boolean;
        serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        deserializeInnerNBT(nbt: Internal.CompoundTag_): void;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        onWidgetRemoved(widget: Internal.IConfigurableWidget_): void;
        widget(): Widget;
        name(): string;
        serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        serializeInnerNBT(): Internal.CompoundTag;
        getRegisterUI(): Internal.LDLRegister;
        "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        group(): string;
        get translateKey(): string
        get chatComponent(): net.minecraft.network.chat.Component
        get LDLRegister(): boolean
        get registerUI(): Internal.LDLRegister
    }
    type IConfigurableWidgetGroup_ = IConfigurableWidgetGroup;
    interface DraggableScrollableWidgetGroup$IDraggable extends Internal.DraggableScrollableWidgetGroup$ISelected {
        onUnSelected(): void;
        canDragOutRange(): boolean;
        dragging(mouseX: number, mouseY: number, deltaX: number, deltaY: number): boolean;
        onSelected(): void;
        endDrag(mouseX: number, mouseY: number): void;
        startDrag(mouseX: number, mouseY: number): void;
        abstract allowSelected(arg0: number, arg1: number, arg2: number): boolean;
        allowDrag(mouseX: number, mouseY: number, button: number): boolean;
        (arg0: number, arg1: number, arg2: number): boolean;
    }
    type DraggableScrollableWidgetGroup$IDraggable_ = ((arg0: number, arg1: number, arg2: number)=> boolean) | DraggableScrollableWidgetGroup$IDraggable;
    class ClientboundPlayerAbilitiesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Abilities_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        canInstabuild(): boolean;
        canFly(): boolean;
        notifyAll(): void;
        getFlyingSpeed(): number;
        getWalkingSpeed(): number;
        notify(): void;
        isInvulnerable(): boolean;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        isFlying(): boolean;
        get class(): typeof any
        get flyingSpeed(): number
        get walkingSpeed(): number
        get invulnerable(): boolean
        get skippable(): boolean
        get flying(): boolean
    }
    type ClientboundPlayerAbilitiesPacket_ = ClientboundPlayerAbilitiesPacket;
    abstract class AbstractTable <R, C, V> implements Internal.Table<R, C, V> {
        getClass(): typeof any;
        containsValue(arg0: any): boolean;
        cellSet(): Internal.Set<Internal.Table$Cell<R, C, V>>;
        abstract rowMap(): Internal.Map<R, Internal.Map<C, V>>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        columnKeySet(): Internal.Set<C>;
        abstract row(arg0: R): Internal.Map<C, V>;
        toString(): string;
        putAll(arg0: Internal.Table_<R, C, V>): void;
        values(): Internal.Collection<V>;
        notifyAll(): void;
        abstract column(arg0: C): Internal.Map<R, V>;
        remove(arg0: any, arg1: any): V;
        put(arg0: R, arg1: C, arg2: V): V;
        hashCode(): number;
        abstract size(): number;
        wait(): void;
        clear(): void;
        contains(arg0: any, arg1: any): boolean;
        wait(arg0: number): void;
        rowKeySet(): Internal.Set<R>;
        containsRow(arg0: any): boolean;
        equals(arg0: any): boolean;
        get(arg0: any, arg1: any): V;
        abstract columnMap(): Internal.Map<C, Internal.Map<R, V>>;
        containsColumn(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractTable_<R, C, V> = AbstractTable<R, C, V>;
    class LastSeenMessages extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.MessageSignature>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        updateSignature(arg0: Internal.SignatureUpdater$Output_): void;
        pack(arg0: Internal.MessageSignatureCache_): Internal.LastSeenMessages$Packed;
        entries(): Internal.List<Internal.MessageSignature>;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.LastSeenMessages>;
        static readonly LAST_SEEN_MESSAGES_MAX_LENGTH: (20) & (number);
        static EMPTY: (Internal.LastSeenMessages) & (Internal.LastSeenMessages);
    }
    type LastSeenMessages_ = LastSeenMessages;
    class SlabBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly TYPE: Internal.EnumProperty<Internal.SlabType>;
    }
    type SlabBlock_ = SlabBlock;
    class DimensionType extends Internal.Record {
        constructor(arg0: Internal.OptionalLong_, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: number, arg11: Internal.TagKey_<Internal.Block>, arg12: ResourceLocation_, arg13: number, arg14: Internal.DimensionType$MonsterSettings_)
        getClass(): typeof any;
        monsterSettings(): Internal.DimensionType$MonsterSettings;
        /**
         * @deprecated
        */
        static parseLegacy(arg0: Internal.Dynamic_<any>): Internal.DataResult<Internal.ResourceKey<Internal.Level>>;
        bedWorks(): boolean;
        respawnAnchorWorks(): boolean;
        coordinateScale(): number;
        piglinSafe(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasFixedTime(): boolean;
        static getTeleportationScale(arg0: Internal.DimensionType_, arg1: Internal.DimensionType_): number;
        infiniburn(): Internal.TagKey<Internal.Block>;
        effectsLocation(): ResourceLocation;
        fixedTime(): Internal.OptionalLong;
        toString(): string;
        notifyAll(): void;
        monsterSpawnBlockLightLimit(): number;
        ambientLight(): number;
        height(): number;
        static getStorageFolder(arg0: Internal.ResourceKey_<Internal.Level>, arg1: Internal.Path_): Internal.Path;
        hasCeiling(): boolean;
        hasSkyLight(): boolean;
        moonPhase(arg0: number): number;
        natural(): boolean;
        timeOfDay(arg0: number): number;
        minY(): number;
        hashCode(): number;
        logicalHeight(): number;
        ultraWarm(): boolean;
        hasRaids(): boolean;
        wait(): void;
        wait(arg0: number): void;
        monsterSpawnLightTest(): Internal.IntProvider;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly MIN_HEIGHT: (16) & (number);
        static readonly MIN_Y: (-2032) & (number);
        static readonly WAY_ABOVE_MAX_Y: (32496) & (number);
        static readonly Y_SIZE: (4064) & (number);
        static readonly MAX_Y: (2031) & (number);
        static readonly DIRECT_CODEC: Internal.Codec<Internal.DimensionType>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.DimensionType>>;
        static readonly BITS_FOR_Y: (12) & (number);
        static readonly WAY_BELOW_MIN_Y: (-32512) & (number);
        static readonly MOON_BRIGHTNESS_PER_PHASE: number[];
    }
    type DimensionType_ = DimensionType | Special.DimensionType;
    class AttackIndicatorStatus extends Internal.Enum<Internal.AttackIndicatorStatus> implements Internal.OptionEnum {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.client.AttackIndicatorStatus)"(arg0: Internal.AttackIndicatorStatus_): number;
        getKey(): string;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.AttackIndicatorStatus[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AttackIndicatorStatus>>;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.AttackIndicatorStatus;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.AttackIndicatorStatus;
        wait(arg0: number): void;
        getCaption(): net.minecraft.network.chat.Component;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static byId(arg0: number): Internal.AttackIndicatorStatus;
        compareTo(arg0: Internal.AttackIndicatorStatus_): number;
        getId(): number;
        get class(): typeof any
        get key(): string
        get declaringClass(): typeof Internal.AttackIndicatorStatus
        get caption(): net.minecraft.network.chat.Component
        get id(): number
        static readonly CROSSHAIR: (Internal.AttackIndicatorStatus) & (Internal.AttackIndicatorStatus);
        static readonly OFF: (Internal.AttackIndicatorStatus) & (Internal.AttackIndicatorStatus);
        static readonly HOTBAR: (Internal.AttackIndicatorStatus) & (Internal.AttackIndicatorStatus);
    }
    type AttackIndicatorStatus_ = "hotbar" | "crosshair" | AttackIndicatorStatus | "off";
    abstract class AEBasePoweredItem extends Internal.AEBaseItem implements Internal.IAEItemPowerStorage {
        constructor(arg0: Internal.DoubleSupplier_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getAEMaxPower(arg0: Internal.ItemStack_): number;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getPowerFlow(arg0: Internal.ItemStack_): Internal.AccessRestriction;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getAECurrentPower(arg0: Internal.ItemStack_): number;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        abstract getChargeRate(arg0: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        extractAEPower(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Actionable_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        injectAEPower(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Actionable_): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getRegistryName(): ResourceLocation;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        get registryName(): ResourceLocation
    }
    type AEBasePoweredItem_ = AEBasePoweredItem;
    class CoderResult {
        getClass(): typeof any;
        toString(): string;
        static malformedForLength(arg0: number): Internal.CoderResult;
        isError(): boolean;
        notifyAll(): void;
        isUnmappable(): boolean;
        isOverflow(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isMalformed(): boolean;
        isUnderflow(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        throwException(): void;
        equals(arg0: any): boolean;
        static unmappableForLength(arg0: number): Internal.CoderResult;
        length(): number;
        get class(): typeof any
        get error(): boolean
        get unmappable(): boolean
        get overflow(): boolean
        get malformed(): boolean
        get underflow(): boolean
        static readonly UNDERFLOW: (Internal.CoderResult) & (Internal.CoderResult);
        static readonly OVERFLOW: (Internal.CoderResult) & (Internal.CoderResult);
    }
    type CoderResult_ = CoderResult;
    class DarkOakFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_)
        getClass(): typeof any;
        hashCode(): number;
        createFoliage(arg0: Internal.LevelSimulatedReader_, arg1: Internal.FoliagePlacer$FoliageSetter_, arg2: Internal.RandomSource_, arg3: Internal.TreeConfiguration_, arg4: number, arg5: Internal.FoliagePlacer$FoliageAttachment_, arg6: number, arg7: number): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        foliageHeight(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.TreeConfiguration_): number;
        equals(arg0: any): boolean;
        notify(): void;
        foliageRadius(arg0: Internal.RandomSource_, arg1: number): number;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.DarkOakFoliagePlacer>;
    }
    type DarkOakFoliagePlacer_ = DarkOakFoliagePlacer;
    class ModelBuilder$ElementBuilder$FaceBuilder {
        getClass(): typeof any;
        end(): Internal.ModelBuilder$ElementBuilder<>;
        texture(arg0: string): this;
        toString(): string;
        tintindex(arg0: number): this;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateNormals(arg0: boolean): this;
        hashCode(): number;
        wait(): void;
        cullface(arg0: Internal.Direction_): this;
        color(arg0: number): this;
        emissivity(arg0: number, arg1: number): this;
        wait(arg0: number): void;
        rotation(arg0: Internal.ModelBuilder$FaceRotation_): this;
        ao(arg0: boolean): this;
        equals(arg0: any): boolean;
        uvs(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get class(): typeof any
    }
    type ModelBuilder$ElementBuilder$FaceBuilder_ = ModelBuilder$ElementBuilder$FaceBuilder;
    abstract class HttpAuthenticationService extends Internal.BaseAuthenticationService {
        getClass(): typeof any;
        static constantURL(arg0: string): Internal.URL;
        abstract createProfileRepository(): Internal.GameProfileRepository;
        toString(): string;
        static buildQuery(arg0: Internal.Map_<string, any>): string;
        notifyAll(): void;
        performPostRequest(arg0: Internal.URL_, arg1: string, arg2: string): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getProxy(): Internal.Proxy;
        performGetRequest(arg0: Internal.URL_, arg1: string): string;
        hashCode(): number;
        static concatenateURL(arg0: Internal.URL_, arg1: string): Internal.URL;
        wait(): void;
        abstract createMinecraftSessionService(): Internal.MinecraftSessionService;
        wait(arg0: number): void;
        performGetRequest(arg0: Internal.URL_): string;
        abstract createUserAuthentication(arg0: Internal.Agent_): Internal.UserAuthentication;
        equals(arg0: any): boolean;
        get class(): typeof any
        get proxy(): Internal.Proxy
    }
    type HttpAuthenticationService_ = HttpAuthenticationService;
    class BaseCoralFanBlock extends Internal.BaseCoralPlantTypeBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BaseCoralFanBlock_ = BaseCoralFanBlock;
    class RenderPlayerEvent$Pre extends Internal.RenderPlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.PlayerRenderer_, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getRenderer(): Internal.PlayerRenderer;
        getPartialTick(): number;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        getPackedLight(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getPoseStack(): Internal.PoseStack;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getMultiBufferSource(): Internal.MultiBufferSource;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get renderer(): Internal.PlayerRenderer
        get partialTick(): number
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        get packedLight(): number
        set result(arg0: Internal.Event$Result_)
        get poseStack(): Internal.PoseStack
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get multiBufferSource(): Internal.MultiBufferSource
    }
    type RenderPlayerEvent$Pre_ = RenderPlayerEvent$Pre;
    abstract class StorageBlockBase extends Internal.BlockBase implements Internal.IStorageBlock, Internal.ISneakItemInteractionBlock, Internal.EntityBlock {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getNeighborPos(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.List<BlockPos>;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        static "tryAddSingleUpgrade(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand,net.minecraft.world.item.ItemStack,net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper)"(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.IStorageWrapper_): boolean;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        getHorizontalDirection(arg0: Internal.BlockState_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getVerticalFacing(arg0: Internal.BlockState_): Internal.VerticalFacing;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        trySneakItemInteraction(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockState_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.BlockHitResult_, arg6: Internal.ItemStack_): boolean;
        static tryAddSingleUpgrade(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.IStorageWrapper_): boolean;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        setTicking(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        abstract "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.StorageBlockEntity;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getNumberOfInventorySlots(): number;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        "tryAddSingleUpgrade(net.minecraft.world.entity.player.Player,net.minecraft.world.InteractionHand,net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity,net.minecraft.world.item.ItemStack)"(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.StorageBlockEntity_, arg3: Internal.ItemStack_): boolean;
        tryFillUpgrades(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.ItemStack_): boolean;
        getDisplayItemsCount(arg0: Internal.List_<Internal.RenderInfo$DisplayItem>): number;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        tryAddSingleUpgrade(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.StorageBlockEntity_, arg3: Internal.ItemStack_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getNumberOfUpgradeSlots(): number;
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        hasFixedIndexDisplayItems(): boolean;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        abstract getFacing(arg0: Internal.BlockState_): Internal.Direction;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.StorageBlockEntity;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        getBaseStackSizeMultiplier(): number;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get numberOfInventorySlots(): number
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        get numberOfUpgradeSlots(): number
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get baseStackSizeMultiplier(): number
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly TICKING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type StorageBlockBase_ = StorageBlockBase;
    interface BiomeManager$NoiseBiomeSource {
        abstract getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        (arg0: number, arg1: number, arg2: number): Internal.Holder_<Internal.Biome>;
    }
    type BiomeManager$NoiseBiomeSource_ = BiomeManager$NoiseBiomeSource | ((arg0: number, arg1: number, arg2: number)=> Internal.Holder_<Internal.Biome>);
    class Scoreboard {
        constructor()
        getPlayerScores(arg0: Internal.Objective_): Internal.Collection<Internal.Score>;
        getDisplayObjective(arg0: number): Internal.Objective;
        removePlayerFromTeam(arg0: string, arg1: Internal.PlayerTeam_): void;
        notify(): void;
        static getDisplaySlotByName(arg0: string): number;
        onObjectiveChanged(arg0: Internal.Objective_): void;
        onObjectiveAdded(arg0: Internal.Objective_): void;
        onPlayerRemoved(arg0: string): void;
        removeObjective(arg0: Internal.Objective_): void;
        addObjective(arg0: string, arg1: Internal.ObjectiveCriteria_, arg2: net.minecraft.network.chat.Component_, arg3: Internal.ObjectiveCriteria$RenderType_): Internal.Objective;
        onTeamRemoved(arg0: Internal.PlayerTeam_): void;
        addPlayerTeam(arg0: string): Internal.PlayerTeam;
        onTeamChanged(arg0: Internal.PlayerTeam_): void;
        getPlayerTeam(arg0: string): Internal.PlayerTeam;
        resetPlayerScore(arg0: string, arg1: Internal.Objective_): void;
        getOrCreatePlayerScore(arg0: string, arg1: Internal.Objective_): Internal.Score;
        getPlayerTeams(): Internal.Collection<Internal.PlayerTeam>;
        wait(): void;
        getObjective(arg0: string): Internal.Objective;
        getClass(): typeof any;
        getPlayersTeam(arg0: string): Internal.PlayerTeam;
        "getPlayerScores(java.lang.String)"(arg0: string): Internal.Map<Internal.Objective, Internal.Score>;
        hasPlayerScore(arg0: string, arg1: Internal.Objective_): boolean;
        onTeamAdded(arg0: Internal.PlayerTeam_): void;
        removePlayerTeam(arg0: Internal.PlayerTeam_): void;
        wait(arg0: number, arg1: number): void;
        static getDisplaySlotName(arg0: number): string;
        onScoreChanged(arg0: Internal.Score_): void;
        getPlayerScores(arg0: string): Internal.Map<Internal.Objective, Internal.Score>;
        forAllObjectives(arg0: Internal.ObjectiveCriteria_, arg1: string, arg2: Internal.Consumer_<Internal.Score>): void;
        removePlayerFromTeam(arg0: string): boolean;
        getOrCreateObjective(arg0: string): Internal.Objective;
        toString(): string;
        "getPlayerScores(net.minecraft.world.scores.Objective)"(arg0: Internal.Objective_): Internal.Collection<Internal.Score>;
        notifyAll(): void;
        getObjectives(): Internal.Collection<Internal.Objective>;
        entityRemoved(arg0: Internal.Entity_): void;
        onPlayerScoreRemoved(arg0: string, arg1: Internal.Objective_): void;
        addPlayerToTeam(arg0: string, arg1: Internal.PlayerTeam_): boolean;
        hasObjective(arg0: string): boolean;
        getObjectiveNames(): Internal.Collection<string>;
        getTrackedPlayers(): Internal.Collection<string>;
        getTeamNames(): Internal.Collection<string>;
        hashCode(): number;
        onObjectiveRemoved(arg0: Internal.Objective_): void;
        static getDisplaySlotNames(): string[];
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setDisplayObjective(arg0: number, arg1: Internal.Objective_): void;
        get playerTeams(): Internal.Collection<Internal.PlayerTeam>
        get class(): typeof any
        get objectives(): Internal.Collection<Internal.Objective>
        get objectiveNames(): Internal.Collection<string>
        get trackedPlayers(): Internal.Collection<string>
        get teamNames(): Internal.Collection<string>
        get displaySlotNames(): string[]
        static readonly DISPLAY_SLOTS: (19) & (number);
        static readonly DISPLAY_SLOT_TEAMS_SIDEBAR_END: (18) & (number);
        static readonly DISPLAY_SLOT_SIDEBAR: (1) & (number);
        static readonly DISPLAY_SLOT_TEAMS_SIDEBAR_START: (3) & (number);
        static readonly DISPLAY_SLOT_BELOW_NAME: (2) & (number);
        static readonly DISPLAY_SLOT_LIST: (0) & (number);
    }
    type Scoreboard_ = Scoreboard;
    class NamedPackage {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type NamedPackage_ = NamedPackage;
    class HandshakeMessages$S2CRegistry extends Internal.HandshakeMessages$LoginIndexedMessage {
        constructor(arg0: ResourceLocation_, arg1: Internal.ForgeRegistry$Snapshot_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAsInt(): number;
        hashCode(): number;
        getSnapshot(): Internal.ForgeRegistry$Snapshot;
        hasSnapshot(): boolean;
        static decode(arg0: Internal.FriendlyByteBuf_): Internal.HandshakeMessages$S2CRegistry;
        wait(): void;
        getRegistryName(): ResourceLocation;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get asInt(): number
        get snapshot(): Internal.ForgeRegistry$Snapshot
        get registryName(): ResourceLocation
    }
    type HandshakeMessages$S2CRegistry_ = HandshakeMessages$S2CRegistry;
    interface TagEntry$Lookup <T> {
        abstract tag(arg0: ResourceLocation_): Internal.Collection<T>;
        abstract element(arg0: ResourceLocation_): T;
    }
    type TagEntry$Lookup_<T> = TagEntry$Lookup<T>;
    abstract class GrowingPlantBlock extends Internal.Block implements Internal.GrowingPlantBlockAccessor {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        gtceu$getGrowthDirection(): Internal.Direction;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "getStateForPlacement(net.minecraft.world.level.LevelAccessor)"(arg0: Internal.LevelAccessor_): Internal.BlockState;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        gtceu$getHeadBlock(): Internal.GrowingPlantHeadBlock;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getStateForPlacement(arg0: Internal.LevelAccessor_): Internal.BlockState;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        gtceu$getBodyBlock(): Internal.Block;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        "getStateForPlacement(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type GrowingPlantBlock_ = GrowingPlantBlock;
    abstract class Format implements Internal.Cloneable, Internal.Serializable {
        clone(): any;
        getClass(): typeof any;
        abstract format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        toString(): string;
        notifyAll(): void;
        parseObject(arg0: string): any;
        abstract parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        format(arg0: any): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Format_ = Format;
    class TrapDoorBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.BlockSetType_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly HALF: Internal.EnumProperty<Internal.Half>;
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly OPEN: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type TrapDoorBlock_ = TrapDoorBlock;
    class AbstractArrow$Pickup extends Internal.Enum<Internal.AbstractArrow$Pickup> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.AbstractArrow$Pickup;
        getClass(): typeof any;
        static values(): Internal.AbstractArrow$Pickup[];
        toString(): string;
        compareTo(arg0: Internal.AbstractArrow$Pickup_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.AbstractArrow$Pickup;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static byOrdinal(arg0: number): Internal.AbstractArrow$Pickup;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AbstractArrow$Pickup>>;
        ordinal(): number;
        wait(): void;
        "compareTo(net.minecraft.world.entity.projectile.AbstractArrow$Pickup)"(arg0: Internal.AbstractArrow$Pickup_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get declaringClass(): typeof Internal.AbstractArrow$Pickup
        get class(): typeof any
        static readonly DISALLOWED: (Internal.AbstractArrow$Pickup) & (Internal.AbstractArrow$Pickup);
        static readonly ALLOWED: (Internal.AbstractArrow$Pickup) & (Internal.AbstractArrow$Pickup);
        static readonly CREATIVE_ONLY: (Internal.AbstractArrow$Pickup) & (Internal.AbstractArrow$Pickup);
    }
    type AbstractArrow$Pickup_ = "allowed" | "disallowed" | "creative_only" | AbstractArrow$Pickup;
    class VertexFormatElement {
        constructor(arg0: number, arg1: Internal.VertexFormatElement$Type_, arg2: Internal.VertexFormatElement$Usage_, arg3: number)
        getClass(): typeof any;
        getType(): Internal.VertexFormatElement$Type;
        getCount(): number;
        getElementCount(): number;
        toString(): string;
        getUsage(): Internal.VertexFormatElement$Usage;
        notifyAll(): void;
        getIndex(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isPosition(): boolean;
        getByteSize(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setupBufferState(arg0: number, arg1: number, arg2: number): void;
        clearBufferState(arg0: number): void;
        get class(): typeof any
        get type(): Internal.VertexFormatElement$Type
        get count(): number
        get elementCount(): number
        get usage(): Internal.VertexFormatElement$Usage
        get index(): number
        get position(): boolean
        get byteSize(): number
    }
    type VertexFormatElement_ = VertexFormatElement;
    class SnifferEggBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        static hatchBoost(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        getHatchLevel(arg0: Internal.BlockState_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly MAX_HATCH_LEVEL: (2) & (number);
        static readonly HATCH: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type SnifferEggBlock_ = SnifferEggBlock;
    class ColorData {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        toString(): string;
        getGi(): number;
        notifyAll(): void;
        toRGBA(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getAi(): number;
        getBi(): number;
        getRf(): number;
        wait(): void;
        wait(arg0: number): void;
        getAf(): number;
        equals(arg0: any): boolean;
        toRGB(): number;
        getBf(): number;
        toARGB(): number;
        getGf(): number;
        getRi(): number;
        get class(): typeof any
        get gi(): number
        get ai(): number
        get bi(): number
        get rf(): number
        get af(): number
        get bf(): number
        get gf(): number
        get ri(): number
    }
    type ColorData_ = ColorData;
    class CanyonWorldCarver extends Internal.WorldCarver<Internal.CanyonCarverConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.CanyonCarverConfiguration>)
        getClass(): typeof any;
        toString(): string;
        "carve(net.minecraft.world.level.levelgen.carver.CarvingContext,net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration,net.minecraft.world.level.chunk.ChunkAccess,java.util.function.Function,net.minecraft.util.RandomSource,net.minecraft.world.level.levelgen.Aquifer,net.minecraft.world.level.ChunkPos,net.minecraft.world.level.chunk.CarvingMask)"(arg0: Internal.CarvingContext_, arg1: Internal.CanyonCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        notifyAll(): void;
        "isStartChunk(net.minecraft.world.level.levelgen.carver.CarverConfiguration,net.minecraft.util.RandomSource)"(arg0: Internal.CarverConfiguration_, arg1: Internal.RandomSource_): boolean;
        isStartChunk(arg0: Internal.CarverConfiguration_, arg1: Internal.RandomSource_): boolean;
        isStartChunk(arg0: Internal.CanyonCarverConfiguration_, arg1: Internal.RandomSource_): boolean;
        getRange(): number;
        "carve(net.minecraft.world.level.levelgen.carver.CarvingContext,net.minecraft.world.level.levelgen.carver.CarverConfiguration,net.minecraft.world.level.chunk.ChunkAccess,java.util.function.Function,net.minecraft.util.RandomSource,net.minecraft.world.level.levelgen.Aquifer,net.minecraft.world.level.ChunkPos,net.minecraft.world.level.chunk.CarvingMask)"(arg0: Internal.CarvingContext_, arg1: Internal.CarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<any, any>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        configured(arg0: Internal.CanyonCarverConfiguration_): Internal.ConfiguredWorldCarver<Internal.CanyonCarverConfiguration>;
        wait(): void;
        carve(arg0: Internal.CarvingContext_, arg1: Internal.CarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<any, any>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        "isStartChunk(net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration,net.minecraft.util.RandomSource)"(arg0: Internal.CanyonCarverConfiguration_, arg1: Internal.RandomSource_): boolean;
        wait(arg0: number): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredWorldCarver<Internal.CanyonCarverConfiguration>>;
        equals(arg0: any): boolean;
        carve(arg0: Internal.CarvingContext_, arg1: Internal.CanyonCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        get class(): typeof any
        get range(): number
    }
    type CanyonWorldCarver_ = CanyonWorldCarver;
    class ResourceContainer <T, C extends Widget> extends WidgetGroup {
        constructor(resource: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<T>, panel: Internal.ResourcePanel_)
        charTyped(codePoint: string, modifiers: number): boolean;
        getPositionY(): number;
        getAnimation(): Internal.Animation;
        getXEIIngredientOverMouse(mouseX: number, mouseY: number): any;
        addWidget(index: number, widget: Widget_): WidgetGroup;
        getSelfPositionY(): number;
        setVisible(arg0: boolean): Widget;
        drawInBackground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        getBackgroundTexture(): Internal.IGuiTexture;
        setCanGlobalChange(canGlobalChange: Internal.Predicate_<Internal.Either<string, Internal.File>>): this;
        updateScreen(): void;
        setLayoutPadding(layoutPadding: number): void;
        mouseClicked(mouseX: number, mouseY: number, button: number): boolean;
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        getFirstWidgetById(regex: string): Widget;
        isFocus(): boolean;
        setAllowXEIIngredientOverMouse(allowXEIIngredientOverMouse: boolean): void;
        setRenamePredicate(renamePredicate: Internal.Predicate_<string>): this;
        getSizeWidth(): number;
        setSelfPositionY(y: number): void;
        setGui(gui: ModularUI_): void;
        isParent(widgetGroup: WidgetGroup_): boolean;
        static "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        setOverlay(overlay: Internal.IGuiTexture_): Widget;
        getContainedWidgets(includeHidden: boolean): Internal.List<Widget>;
        getPanel(): Internal.ResourcePanel;
        getAlign(): Internal.Align;
        setParentPosition(parentPosition: GuiPos_): void;
        getLayoutPadding(): number;
        setWidgetSupplier(widgetSupplier: Internal.Function_<Internal.Either<string, Internal.File>, C>): this;
        waitToAdded(widget: Widget_): void;
        setId(id: string): Widget;
        setSizeHeight(height: number): void;
        appendHoverTooltips(tooltipText: Internal.List_<net.minecraft.network.chat.Component>): Widget;
        "appendHoverTooltips(java.util.List)"(tooltipText: Internal.List_<net.minecraft.network.chat.Component>): Widget;
        canDragIn(dragging: any): boolean;
        addWidget<T extends Widget>(widget: T, callback: Internal.Consumer_<T>): WidgetGroup;
        isDynamicSized(): boolean;
        getAllWidgetSize(): number;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        getLayout(): com.lowdragmc.lowdraglib.gui.widget.layout.Layout;
        getTooltipTexts(): Internal.List<net.minecraft.network.chat.Component>;
        getClass(): typeof any;
        getPositionX(): number;
        animation(animation: Internal.Animation_): void;
        removeWidgetAnima(widget: Widget_, animation: Internal.Transform_): void;
        static "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getSelfPositionX(): number;
        getResource(): com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<T>;
        getSizeHeight(): number;
        initWidget(): void;
        isActive(): boolean;
        setDraggingConsumer(draggingAccept: Internal.Predicate_<any>, draggingIn: Internal.Consumer_<any>, draggingOut: Internal.Consumer_<any>, draggingSuccess: Internal.Consumer_<any>): Widget;
        toRectangleBox(): Internal.Rect2i;
        getHoverElement(mouseX: number, mouseY: number): Widget;
        static isAltDown(): boolean;
        setSelfPosition(x: number, y: number): void;
        isInitialized(): boolean;
        setUiAccess(uiAccess: Internal.WidgetUIAccess_): Widget;
        getChatComponent(): net.minecraft.network.chat.Component;
        canWidgetAccepted(widget: Internal.IConfigurableWidget_): boolean;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        clearAllWidgets(): void;
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        waitToRemoved(widget: Widget_): void;
        setSize(width: number, height: number): void;
        toString(): string;
        notifyAll(): void;
        deserializeInnerNBT(nbt: Internal.CompoundTag_): void;
        onScreenSizeUpdate(screenWidth: number, screenHeight: number): void;
        getId(): string;
        getSize(): GuiSize;
        widget(): Widget;
        addSelfPosition(addX: number, addY: number): GuiPos;
        getGuiExtraAreas(guiRect: Internal.Rect2i_, list: Internal.List_<Internal.Rect2i>): Internal.List<Internal.Rect2i>;
        "addWidget(com.lowdragmc.lowdraglib.gui.widget.Widget,java.util.function.Consumer)"<T extends Widget>(widget: T, callback: Internal.Consumer_<T>): WidgetGroup;
        addWidgetAnima(widget: Widget_, animation: Internal.Transform_): void;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        getParentPosition(): GuiPos;
        static "serializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource,boolean)"(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        setSelfPosition(selfPosition: GuiPos_): void;
        wait(arg0: number): void;
        writeInitialData(buffer: Internal.FriendlyByteBuf_): void;
        static "deserializeNBT(com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurableWidget,net.minecraft.nbt.CompoundTag,com.lowdragmc.lowdraglib.gui.editor.data.Resources,boolean)"(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        mouseWheelMove(mouseX: number, mouseY: number, wheelDelta: number): boolean;
        group(): string;
        handleClientAction(id: number, buffer: Internal.FriendlyByteBuf_): void;
        getParent(): WidgetGroup;
        getRect(): Internal.Rect;
        appendHoverTooltips(...tooltipText: string[]): Widget;
        isMouseOverElement(mouseX: number, mouseY: number): boolean;
        setSize(size: GuiSize_): void;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        static isCtrlDown(): boolean;
        isAllowXEIIngredientOverMouse(): boolean;
        setHoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        isClientSideWidget(): boolean;
        notify(): void;
        readInitialData(buffer: Internal.FriendlyByteBuf_): void;
        setDrawBackgroundWhenHover(drawBackgroundWhenHover: boolean): Widget;
        mouseMoved(mouseX: number, mouseY: number): boolean;
        removeWidget(widget: Widget_): void;
        setFocus(focus: boolean): void;
        "appendHoverTooltips(net.minecraft.network.chat.Component[])"(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        getSelfPosition(): GuiPos;
        inAnimate(): boolean;
        setBackground(...backgroundTexture: Internal.IGuiTexture_[]): Widget;
        setCanEdit(canEdit: Internal.Predicate_<Internal.Either<string, Internal.File>>): this;
        onFocusChanged(lastFocus: Widget_, focus: Widget_): void;
        getPosition(): GuiPos;
        "setDragging(java.util.function.Function,org.apache.commons.lang3.function.TriFunction)"<D>(draggingMapping: Internal.Function_<Internal.Either<string, Internal.File>, D>, draggingRenderer: Internal.TriFunction_<Internal.Either<string, Internal.File>, D, GuiPos, Internal.IGuiTexture>): this;
        isVisible(): boolean;
        setSizeWidth(width: number): void;
        setClientSideWidget(): WidgetGroup;
        static isMouseOver(x: number, y: number, width: number, height: number, mouseX: number, mouseY: number): boolean;
        "appendHoverTooltips(java.lang.String[])"(...tooltipText: string[]): Widget;
        static isShiftDown(): boolean;
        setOnAdd(onAdd: Internal.Function_<string, T>): this;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        addWidgets(...widgets: Widget_[]): WidgetGroup;
        isMouseDown(button: number): boolean;
        addWidget(widget: Widget_): WidgetGroup;
        name(): string;
        serializeInnerNBT(): Internal.CompoundTag;
        wait(): void;
        getWidgetsById(regex: string): Internal.List<Widget>;
        getRegisterUI(): Internal.LDLRegister;
        setDynamicSized(dynamicSized: boolean): void;
        setHoverTexture(...hoverTexture: Internal.IGuiTexture_[]): Widget;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        setNameSupplier(nameSupplier: Internal.Supplier_<string>): this;
        getWidgets(): Internal.Map<Internal.Either<string, Internal.File>, C>;
        setDraggingProvider<T>(draggingProvider: Internal.Supplier_<T>, draggingRenderer: Internal.BiFunction_<T, GuiPos, Internal.IGuiTexture>): Widget;
        getOverlay(): Internal.IGuiTexture;
        getWidgetSupplier(): Internal.Function<Internal.Either<string, Internal.File>, C>;
        static playButtonClickSound(): void;
        getSelected(): Internal.Either<string, Internal.File>;
        setAlign(align: Internal.Align_): Widget;
        drawOverlay(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        setOnEdit(onEdit: Internal.Consumer_<Internal.Either<string, Internal.File>>): this;
        wait(arg0: number, arg1: number): void;
        detectAndSendChanges(): void;
        handleDragging(dragging: any): boolean;
        isRemote(): boolean;
        "addWidget(int,com.lowdragmc.lowdraglib.gui.widget.Widget)"(index: number, widget: Widget_): WidgetGroup;
        setLayout(layout: com.lowdragmc.lowdraglib.gui.widget.layout.Layout_): void;
        setDragging<D>(draggingMapping: Internal.Function_<Internal.Either<string, Internal.File>, D>, draggingRenderer: Internal.TriFunction_<Internal.Either<string, Internal.File>, D, GuiPos, Internal.IGuiTexture>): this;
        setDragging<D>(draggingMapping: Internal.Function_<Internal.Either<string, Internal.File>, D>, draggingRenderer: Internal.Function_<D, Internal.IGuiTexture>): this;
        isChild(widget: Widget_): boolean;
        readUpdateInfo(id: number, buffer: Internal.FriendlyByteBuf_): void;
        setCanRemove(canRemove: Internal.Predicate_<Internal.Either<string, Internal.File>>): this;
        mouseDragged(mouseX: number, mouseY: number, button: number, dragX: number, dragY: number): boolean;
        static isKeyDown(keyCode: number): boolean;
        getWidgetsByType<T extends Widget>(clazz: T): Internal.List<T>;
        initTemplate(): void;
        setSelfPositionX(x: number): void;
        drawInForeground(graphics: Internal.GuiGraphics_, mouseX: number, mouseY: number, partialTicks: number): void;
        acceptWidget(widget: Internal.IConfigurableWidget_): void;
        getPhantomTargets(ingredient: any): Internal.List<com.lowdragmc.lowdraglib.gui.ingredient.Target>;
        setOnRemove(onRemove: Internal.Consumer_<Internal.Either<string, Internal.File>>): this;
        appendHoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[]): Widget;
        "setDragging(java.util.function.Function,java.util.function.Function)"<D>(draggingMapping: Internal.Function_<Internal.Either<string, Internal.File>, D>, draggingRenderer: Internal.Function_<D, Internal.IGuiTexture>): this;
        reBuild(): void;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        mouseReleased(mouseX: number, mouseY: number, button: number): boolean;
        onWidgetRemoved(widget: Internal.IConfigurableWidget_): void;
        setOnGlobalChange(onGlobalChange: Internal.Consumer_<Internal.Either<string, Internal.File>>): this;
        setOnMenu(onMenu: Internal.BiConsumer_<Internal.Either<string, Internal.File>, Internal.TreeBuilder$Menu>): this;
        hashCode(): number;
        setActive(isActive: boolean): Widget;
        equals(arg0: any): boolean;
        getGui(): ModularUI;
        get positionY(): number
        get animation(): Internal.Animation
        get selfPositionY(): number
        set visible(arg0: boolean)
        get backgroundTexture(): Internal.IGuiTexture
        set canGlobalChange(canGlobalChange: Internal.Predicate_<Internal.Either<string, Internal.File>>)
        set layoutPadding(layoutPadding: number)
        get focus(): boolean
        set allowXEIIngredientOverMouse(allowXEIIngredientOverMouse: boolean)
        set renamePredicate(renamePredicate: Internal.Predicate_<string>)
        get sizeWidth(): number
        set selfPositionY(y: number)
        set gui(gui: ModularUI_)
        set overlay(overlay: Internal.IGuiTexture_)
        get panel(): Internal.ResourcePanel
        get align(): Internal.Align
        set parentPosition(parentPosition: GuiPos_)
        get layoutPadding(): number
        set widgetSupplier(widgetSupplier: Internal.Function_<Internal.Either<string, Internal.File>, C>)
        set id(id: string)
        set sizeHeight(height: number)
        get dynamicSized(): boolean
        get allWidgetSize(): number
        get layout(): com.lowdragmc.lowdraglib.gui.widget.layout.Layout
        get tooltipTexts(): Internal.List<net.minecraft.network.chat.Component>
        get class(): typeof any
        get positionX(): number
        get selfPositionX(): number
        get resource(): com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<T>
        get sizeHeight(): number
        get active(): boolean
        get altDown(): boolean
        get initialized(): boolean
        set uiAccess(uiAccess: Internal.WidgetUIAccess_)
        get chatComponent(): net.minecraft.network.chat.Component
        get LDLRegister(): boolean
        get id(): string
        get size(): GuiSize
        get parentPosition(): GuiPos
        set selfPosition(selfPosition: GuiPos_)
        get parent(): WidgetGroup
        get rect(): Internal.Rect
        set size(size: GuiSize_)
        get translateKey(): string
        get ctrlDown(): boolean
        get allowXEIIngredientOverMouse(): boolean
        set hoverTooltips(...tooltipText: net.minecraft.network.chat.Component_[])
        get clientSideWidget(): boolean
        set drawBackgroundWhenHover(drawBackgroundWhenHover: boolean)
        set focus(focus: boolean)
        get selfPosition(): GuiPos
        set background(...backgroundTexture: Internal.IGuiTexture_[])
        set canEdit(canEdit: Internal.Predicate_<Internal.Either<string, Internal.File>>)
        get position(): GuiPos
        get visible(): boolean
        set sizeWidth(width: number)
        get shiftDown(): boolean
        set onAdd(onAdd: Internal.Function_<string, T>)
        get registerUI(): Internal.LDLRegister
        set dynamicSized(dynamicSized: boolean)
        set hoverTexture(...hoverTexture: Internal.IGuiTexture_[])
        set nameSupplier(nameSupplier: Internal.Supplier_<string>)
        get widgets(): Internal.Map<Internal.Either<string, Internal.File>, C>
        get overlay(): Internal.IGuiTexture
        get widgetSupplier(): Internal.Function<Internal.Either<string, Internal.File>, C>
        get selected(): Internal.Either<string, Internal.File>
        set align(align: Internal.Align_)
        set onEdit(onEdit: Internal.Consumer_<Internal.Either<string, Internal.File>>)
        get remote(): boolean
        set layout(layout: com.lowdragmc.lowdraglib.gui.widget.layout.Layout_)
        set canRemove(canRemove: Internal.Predicate_<Internal.Either<string, Internal.File>>)
        set selfPositionX(x: number)
        set onRemove(onRemove: Internal.Consumer_<Internal.Either<string, Internal.File>>)
        set onGlobalChange(onGlobalChange: Internal.Consumer_<Internal.Either<string, Internal.File>>)
        set onMenu(onMenu: Internal.BiConsumer_<Internal.Either<string, Internal.File>, Internal.TreeBuilder$Menu>)
        set active(isActive: boolean)
        get gui(): ModularUI
    }
    type ResourceContainer_<T, C extends Widget> = ResourceContainer<T, C>;
    class RenderShape extends Internal.Enum<Internal.RenderShape> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.RenderShape[];
        toString(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RenderShape>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.RenderShape;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.RenderShape;
        compareTo(arg0: Internal.RenderShape_): number;
        "compareTo(net.minecraft.world.level.block.RenderShape)"(arg0: Internal.RenderShape_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.RenderShape
        static readonly ENTITYBLOCK_ANIMATED: (Internal.RenderShape) & (Internal.RenderShape);
        static readonly MODEL: (Internal.RenderShape) & (Internal.RenderShape);
        static readonly INVISIBLE: (Internal.RenderShape) & (Internal.RenderShape);
    }
    type RenderShape_ = RenderShape | "model" | "invisible" | "entityblock_animated";
    class PlayerXpEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type PlayerXpEvent_ = PlayerXpEvent;
    class Proxy {
        constructor(arg0: Internal.Proxy$Type_, arg1: Internal.SocketAddress_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        address(): Internal.SocketAddress;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        type(): Internal.Proxy$Type;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly NO_PROXY: (Internal.Proxy) & (Internal.Proxy);
    }
    type Proxy_ = Proxy;
    class FramedDrawerModelData implements Internal.INBTSerializable<Internal.CompoundTag> {
        constructor(arg0: Internal.Map_<string, Internal.Item>)
        getClass(): typeof any;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        notify(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        serializeNBT(): Internal.CompoundTag;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getDesign(): Internal.Map<string, Internal.Item>;
        getCode(): string;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get design(): Internal.Map<string, Internal.Item>
        get code(): string
        static readonly FRAMED_PROPERTY: Internal.ModelProperty<Internal.FramedDrawerModelData>;
    }
    type FramedDrawerModelData_ = FramedDrawerModelData;
    class DragSourceDropEvent extends Internal.DragSourceEvent {
        constructor(arg0: Internal.DragSourceContext_)
        constructor(arg0: Internal.DragSourceContext_, arg1: number, arg2: boolean, arg3: number, arg4: number)
        constructor(arg0: Internal.DragSourceContext_, arg1: number, arg2: boolean)
        getClass(): typeof any;
        getX(): number;
        toString(): string;
        getY(): number;
        getDragSourceContext(): Internal.DragSourceContext;
        notifyAll(): void;
        getDropSuccess(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getLocation(): Internal.Point;
        getDropAction(): number;
        getSource(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
        get x(): number
        get y(): number
        get dragSourceContext(): Internal.DragSourceContext
        get dropSuccess(): boolean
        get location(): Internal.Point
        get dropAction(): number
        get source(): any
    }
    type DragSourceDropEvent_ = DragSourceDropEvent;
    class GTRegistry$RL <V> extends Internal.GTRegistry<ResourceLocation, V> {
        constructor(arg0: ResourceLocation_)
        getOrDefaultKey(arg0: V, arg1: ResourceLocation_): ResourceLocation;
        getClass(): typeof any;
        iterator(): Internal.Iterator<V>;
        loadFromNBT(arg0: Internal.Tag_): V;
        remap(arg0: ResourceLocation_, arg1: ResourceLocation_): void;
        containKey(arg0: ResourceLocation_): boolean;
        containValue(arg0: V): boolean;
        register<T extends V>(arg0: ResourceLocation_, arg1: T): T;
        replace<T extends V>(arg0: ResourceLocation_, arg1: T): T;
        keys(): Internal.Set<ResourceLocation>;
        getOrDefault(arg0: ResourceLocation_, arg1: V): V;
        entries(): Internal.Set<Internal.Map$Entry<ResourceLocation, V>>;
        spliterator(): Internal.Spliterator<V>;
        readBuf(arg0: Internal.FriendlyByteBuf_): V;
        notify(): void;
        isFrozen(): boolean;
        wait(arg0: number, arg1: number): void;
        get(arg0: ResourceLocation_): V;
        forEach(arg0: Internal.Consumer_<V>): void;
        registry(): Internal.Map<ResourceLocation, V>;
        freeze(): void;
        toString(): string;
        saveToNBT(arg0: V): Internal.Tag;
        notifyAll(): void;
        unfreeze(): void;
        registerOrOverride<T extends V>(arg0: ResourceLocation_, arg1: T): T;
        values(): Internal.Set<V>;
        hashCode(): number;
        writeBuf(arg0: V, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        codec(): Internal.Codec<V>;
        getRegistryName(): ResourceLocation;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getKey(arg0: V): ResourceLocation;
        remove(arg0: ResourceLocation_): boolean;
        get class(): typeof any
        get frozen(): boolean
        get registryName(): ResourceLocation
    }
    type GTRegistry$RL_<V> = GTRegistry$RL<V>;
    class RenderType$CompositeState$CompositeStateBuilder {
        setLightmapState(arg0: Internal.RenderStateShard$LightmapStateShard_): this;
        getClass(): typeof any;
        setShaderState(arg0: Internal.RenderStateShard$ShaderStateShard_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setOverlayState(arg0: Internal.RenderStateShard$OverlayStateShard_): this;
        setWriteMaskState(arg0: Internal.RenderStateShard$WriteMaskStateShard_): this;
        setLayeringState(arg0: Internal.RenderStateShard$LayeringStateShard_): this;
        createCompositeState(arg0: boolean): Internal.RenderType$CompositeState;
        "createCompositeState(net.minecraft.client.renderer.RenderType$OutlineProperty)"(arg0: Internal.RenderType$OutlineProperty_): Internal.RenderType$CompositeState;
        setLineState(arg0: Internal.RenderStateShard$LineStateShard_): this;
        toString(): string;
        setCullState(arg0: Internal.RenderStateShard$CullStateShard_): this;
        setTransparencyState(arg0: Internal.RenderStateShard$TransparencyStateShard_): this;
        "createCompositeState(boolean)"(arg0: boolean): Internal.RenderType$CompositeState;
        notifyAll(): void;
        setTextureState(arg0: Internal.RenderStateShard$EmptyTextureStateShard_): this;
        setTexturingState(arg0: Internal.RenderStateShard$TexturingStateShard_): this;
        setColorLogicState(arg0: Internal.RenderStateShard$ColorLogicStateShard_): this;
        setDepthTestState(arg0: Internal.RenderStateShard$DepthTestStateShard_): this;
        hashCode(): number;
        setOutputState(arg0: Internal.RenderStateShard$OutputStateShard_): this;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        createCompositeState(arg0: Internal.RenderType$OutlineProperty_): Internal.RenderType$CompositeState;
        set lightmapState(arg0: Internal.RenderStateShard$LightmapStateShard_)
        get class(): typeof any
        set shaderState(arg0: Internal.RenderStateShard$ShaderStateShard_)
        set overlayState(arg0: Internal.RenderStateShard$OverlayStateShard_)
        set writeMaskState(arg0: Internal.RenderStateShard$WriteMaskStateShard_)
        set layeringState(arg0: Internal.RenderStateShard$LayeringStateShard_)
        set lineState(arg0: Internal.RenderStateShard$LineStateShard_)
        set cullState(arg0: Internal.RenderStateShard$CullStateShard_)
        set transparencyState(arg0: Internal.RenderStateShard$TransparencyStateShard_)
        set textureState(arg0: Internal.RenderStateShard$EmptyTextureStateShard_)
        set texturingState(arg0: Internal.RenderStateShard$TexturingStateShard_)
        set colorLogicState(arg0: Internal.RenderStateShard$ColorLogicStateShard_)
        set depthTestState(arg0: Internal.RenderStateShard$DepthTestStateShard_)
        set outputState(arg0: Internal.RenderStateShard$OutputStateShard_)
    }
    type RenderType$CompositeState$CompositeStateBuilder_ = RenderType$CompositeState$CompositeStateBuilder;
    interface ServicesKeyInfo {
        abstract keyBitCount(): number;
        abstract signature(): Internal.Signature;
        abstract validateProperty(arg0: com.mojang.authlib.properties.Property_): boolean;
        signatureBitCount(): number;
    }
    type ServicesKeyInfo_ = ServicesKeyInfo;
    interface StructureProcessorType <P extends Internal.StructureProcessor> {
        abstract codec(): Internal.Codec<P>;
        register<P extends Internal.StructureProcessor>(arg0: string, arg1: Internal.Codec_<P>): this;
        (): Internal.Codec_<P>;
        readonly LIST_CODEC: Internal.Codec<Internal.Holder<Internal.StructureProcessorList>>;
        readonly SINGLE_CODEC: Internal.Codec<Internal.StructureProcessor>;
        readonly LIST_OBJECT_CODEC: Internal.Codec<Internal.StructureProcessorList>;
        readonly BLACKSTONE_REPLACE: Internal.StructureProcessorType<Internal.BlackstoneReplaceProcessor>;
        readonly LAVA_SUBMERGED_BLOCK: Internal.StructureProcessorType<Internal.LavaSubmergedBlockProcessor>;
        readonly PROTECTED_BLOCKS: Internal.StructureProcessorType<Internal.ProtectedBlockProcessor>;
        readonly BLOCK_ROT: Internal.StructureProcessorType<Internal.BlockRotProcessor>;
        readonly CAPPED: Internal.StructureProcessorType<Internal.CappedProcessor>;
        readonly DIRECT_CODEC: Internal.Codec<Internal.StructureProcessorList>;
        readonly BLOCK_IGNORE: Internal.StructureProcessorType<Internal.BlockIgnoreProcessor>;
        readonly GRAVITY: Internal.StructureProcessorType<Internal.GravityProcessor>;
        readonly RULE: Internal.StructureProcessorType<Internal.RuleProcessor>;
        readonly NOP: Internal.StructureProcessorType<Internal.NopProcessor>;
        readonly JIGSAW_REPLACEMENT: Internal.StructureProcessorType<Internal.JigsawReplacementProcessor>;
        readonly BLOCK_AGE: Internal.StructureProcessorType<Internal.BlockAgeProcessor>;
    }
    type StructureProcessorType_<P extends Internal.StructureProcessor> = (()=> Internal.Codec_<P>) | Special.StructureProcessor | StructureProcessorType<P>;
    interface TeamArgumentProvider {
        abstract getTeam(arg0: Internal.CommandSourceStack_): dev.ftb.mods.ftbteams.api.Team;
        (arg0: Internal.CommandSourceStack): dev.ftb.mods.ftbteams.api.Team_;
    }
    type TeamArgumentProvider_ = ((arg0: Internal.CommandSourceStack)=> dev.ftb.mods.ftbteams.api.Team_) | TeamArgumentProvider;
    class ChestMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: Internal.MenuType_<any>, arg1: number, arg2: Internal.Inventory_, arg3: net.minecraft.world.Container_, arg4: number)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        getRowCount(): number;
        quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        static fiveRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        static fourRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        static oneRow(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        static threeRows(arg0: number, arg1: Internal.Inventory_, arg2: net.minecraft.world.Container_): Internal.ChestMenu;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        getContainer(): net.minecraft.world.Container;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        resumeRemoteUpdates(): void;
        static threeRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        static getQuickcraftHeader(arg0: number): number;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static sixRows(arg0: number, arg1: Internal.Inventory_, arg2: net.minecraft.world.Container_): Internal.ChestMenu;
        static getQuickcraftType(arg0: number): number;
        static sixRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        static twoRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        get rowCount(): number
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        get container(): net.minecraft.world.Container
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
    }
    type ChestMenu_ = ChestMenu;
    class DocumentClass extends Internal.AbstractDocument<Internal.DocumentClass> {
        constructor()
        getClass(): typeof any;
        merge(other: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        copy(): Internal.AbstractDocumentBase<any>;
        applyProperties(): Internal.AbstractDocumentBase<any>;
        getConstructors(): Internal.Set<Internal.DocumentConstructor>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fulfillsConditions(): boolean;
        merge(other: Internal.DocumentClass_): this;
        getInterfaces(): Internal.Set<Internal.PropertyType<any>>;
        addPropertyJson(json: Internal.JsonObject_): Internal.AbstractDocumentBase<Internal.DocumentClass>;
        setName(name: string): void;
        getName(): string;
        getMethods(): Internal.Set<Internal.DocumentMethod>;
        setParent(parent: Internal.PropertyType_<any>): void;
        deserialize(object: Internal.JsonObject_): void;
        isAbstract(): boolean;
        getMergedComment(): Internal.PropertyComment;
        toString(): string;
        "merge(com.probejs.jdoc.document.DocumentClass)"(other: Internal.DocumentClass_): this;
        notifyAll(): void;
        serialize(): Internal.JsonObject;
        isHidden(): boolean;
        isInterface(): boolean;
        setAbstract(anAbstract: boolean): void;
        findPropertiesOf<E extends Internal.AbstractProperty<any>>(property: E): Internal.List<E>;
        setInterface(anInterface: boolean): void;
        findProperty<P extends Internal.AbstractProperty<P>>(property: P): Internal.Optional<P>;
        hashCode(): number;
        findProperties(predicate: Internal.Predicate_<Internal.AbstractProperty<any>>): Internal.List<Internal.AbstractProperty<any>>;
        getParent(): Internal.PropertyType<any>;
        getFields(): Internal.Set<Internal.DocumentField>;
        wait(): void;
        wait(arg0: number): void;
        "merge(com.probejs.jdoc.document.AbstractDocumentBase)"(other: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        static fromJava(info: Internal.ClassInfo_): Internal.DocumentClass;
        equals(o: any): boolean;
        hasProperty<P extends Internal.AbstractProperty<P>>(property: P): boolean;
        getGenerics(): Internal.List<Internal.PropertyType<any>>;
        get class(): typeof any
        get constructors(): Internal.Set<Internal.DocumentConstructor>
        get interfaces(): Internal.Set<Internal.PropertyType<any>>
        set name(name: string)
        get name(): string
        get methods(): Internal.Set<Internal.DocumentMethod>
        set parent(parent: Internal.PropertyType_<any>)
        get "abstract"(): boolean
        get mergedComment(): Internal.PropertyComment
        get hidden(): boolean
        get "interface"(): boolean
        set "abstract"(anAbstract: boolean)
        set "interface"(anInterface: boolean)
        get parent(): Internal.PropertyType<any>
        get fields(): Internal.Set<Internal.DocumentField>
        get generics(): Internal.List<Internal.PropertyType<any>>
        methods: Internal.Set<Internal.DocumentMethod>;
        fields: Internal.Set<Internal.DocumentField>;
        interfaces: Internal.Set<Internal.PropertyType<any>>;
        constructors: Internal.Set<Internal.DocumentConstructor>;
    }
    type DocumentClass_ = DocumentClass;
    class GeodeCrackSettings {
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.GeodeCrackSettings>;
        readonly generateCrackChance: number;
        readonly baseCrackSize: number;
        readonly crackPointOffset: number;
    }
    type GeodeCrackSettings_ = GeodeCrackSettings;
    class SurfaceSystem {
        constructor(arg0: Internal.RandomState_, arg1: Internal.BlockState_, arg2: number, arg3: Internal.PositionalRandomFactory_)
        buildSurface(arg0: Internal.RandomState_, arg1: Internal.BiomeManager_, arg2: Internal.Registry_<Internal.Biome>, arg3: boolean, arg4: Internal.WorldGenerationContext_, arg5: Internal.ChunkAccess_, arg6: Internal.NoiseChunk_, arg7: Internal.SurfaceRules$RuleSource_): void;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        topMaterial(arg0: Internal.SurfaceRules$RuleSource_, arg1: Internal.CarvingContext_, arg2: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg3: Internal.ChunkAccess_, arg4: Internal.NoiseChunk_, arg5: BlockPos_, arg6: boolean): Internal.Optional<Internal.BlockState>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type SurfaceSystem_ = SurfaceSystem;
    class FilterTag extends Internal.BaseFilter {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        static setCompareNBT(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        static getTags(arg0: Internal.ItemStack_): Internal.List<string>;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        static setAllowList(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        static clearTags(arg0: Internal.ItemStack_): void;
        static setTags(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static getAllowList(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        static "setTags(net.minecraft.world.item.ItemStack,net.minecraft.nbt.CompoundTag)"(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getInventory(arg0: Internal.ItemStack_): Internal.FilterBasicHandler;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        static "setTags(net.minecraft.world.item.ItemStack,java.util.List)"(arg0: Internal.ItemStack_, arg1: Internal.List_<string>): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        static addTag(arg0: Internal.ItemStack_, arg1: string): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static setTags(arg0: Internal.ItemStack_, arg1: Internal.List_<string>): void;
        arch$registryName(): ResourceLocation;
        static getCompareNBT(arg0: Internal.ItemStack_): boolean;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        static setInventory(arg0: Internal.ItemStack_, arg1: Internal.FilterBasicHandler_): Internal.FilterBasicHandler;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        static removeTag(arg0: Internal.ItemStack_, arg1: string): void;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type FilterTag_ = FilterTag;
    class BlockMatchTest extends Internal.RuleTest {
        constructor(arg0: Internal.Block_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        test(arg0: Internal.BlockState_, arg1: Internal.RandomSource_): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.BlockMatchTest>;
    }
    type BlockMatchTest_ = BlockMatchTest;
    class ShapedRecipeBuilder extends Internal.CraftingRecipeBuilder implements Internal.RecipeBuilder {
        constructor(arg0: Internal.RecipeCategory_, arg1: Internal.ItemLike_, arg2: number)
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: string): void;
        getClass(): typeof any;
        static shaped(arg0: Internal.RecipeCategory_, arg1: Internal.ItemLike_, arg2: number): Internal.ShapedRecipeBuilder;
        define(arg0: string, arg1: Internal.ItemLike_): this;
        notify(): void;
        static getDefaultRecipeId(arg0: Internal.ItemLike_): ResourceLocation;
        wait(arg0: number, arg1: number): void;
        "define(java.lang.Character,net.minecraft.world.item.crafting.Ingredient)"(arg0: string, arg1: Internal.Ingredient_): this;
        "save(java.util.function.Consumer,net.minecraft.resources.ResourceLocation)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_): void;
        group(arg0: string): this;
        define(arg0: string, arg1: Internal.Ingredient_): this;
        showNotification(arg0: boolean): this;
        unlockedBy(arg0: string, arg1: Internal.CriterionTriggerInstance_): Internal.RecipeBuilder;
        static shaped(arg0: Internal.RecipeCategory_, arg1: Internal.ItemLike_): Internal.ShapedRecipeBuilder;
        toString(): string;
        notifyAll(): void;
        "define(java.lang.Character,net.minecraft.world.level.ItemLike)"(arg0: string, arg1: Internal.ItemLike_): this;
        "define(java.lang.Character,net.minecraft.tags.TagKey)"(arg0: string, arg1: Internal.TagKey_<Internal.Item>): this;
        getResult(): Internal.Item;
        hashCode(): number;
        define(arg0: string, arg1: Internal.TagKey_<Internal.Item>): this;
        wait(): void;
        "save(java.util.function.Consumer,java.lang.String)"(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: string): void;
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>): void;
        wait(arg0: number): void;
        pattern(arg0: string): this;
        equals(arg0: any): boolean;
        save(arg0: Internal.Consumer_<Internal.FinishedRecipe>, arg1: ResourceLocation_): void;
        get class(): typeof any
        get result(): Internal.Item
    }
    type ShapedRecipeBuilder_ = ShapedRecipeBuilder;
    interface ISubMenu {
        abstract getLocator(): Internal.MenuLocator;
        abstract getHost(): Internal.ISubMenuHost;
        get locator(): Internal.MenuLocator
        get host(): Internal.ISubMenuHost
    }
    type ISubMenu_ = ISubMenu;
    class QuestShape extends Internal.Icon {
        constructor(id: string)
        static reload(list: Internal.List_<string>): void;
        shouldDraw(): boolean;
        draw3D(graphics: Internal.GuiGraphics_): void;
        getClass(): typeof any;
        static "getIcon(com.google.gson.JsonElement)"(json: Internal.JsonElement_): Internal.Icon;
        withColor(color: Internal.Color4I_): Internal.Icon;
        aspectRatio(): number;
        isEmpty(): boolean;
        static empty(): Internal.Color4I;
        static getIcon(id: ResourceLocation_): Internal.Icon;
        notify(): void;
        static get(id: string): Internal.QuestShape;
        wait(arg0: number, arg1: number): void;
        combineWith(...icons: Internal.Icon_[]): Internal.Icon;
        getIngredient(): any;
        combineWith(icon: Internal.Icon_): Internal.Icon;
        withUV(u0: number, v0: number, u1: number, v1: number): Internal.Icon;
        static "getIcon(net.minecraft.resources.ResourceLocation)"(id: ResourceLocation_): Internal.Icon;
        static map(): Internal.Map<string, Internal.QuestShape>;
        getPixelBufferFrameCount(): number;
        getBackground(): Internal.ImageIcon;
        getShape(): Internal.ImageIcon;
        createPixelBuffer(): Internal.PixelBuffer;
        getOutline(): Internal.ImageIcon;
        "combineWith(dev.ftb.mods.ftblibrary.icon.Icon[])"(...icons: Internal.Icon_[]): Internal.Icon;
        getJson(): Internal.JsonElement;
        withUV(x: number, y: number, w: number, h: number, tw: number, th: number): Internal.Icon;
        withPadding(padding: number): Internal.Icon;
        toString(): string;
        withBorder(color: Internal.Color4I_, roundEdges: boolean): Internal.Icon;
        notifyAll(): void;
        withTint(color: Internal.Color4I_): Internal.Icon;
        static getIcon(json: Internal.JsonElement_): Internal.Icon;
        hasPixelBuffer(): boolean;
        static getIcon(id: string): Internal.Icon;
        "combineWith(dev.ftb.mods.ftblibrary.icon.Icon)"(icon: Internal.Icon_): Internal.Icon;
        hashCode(): number;
        drawStatic(graphics: Internal.GuiGraphics_, x: number, y: number, w: number, h: number): void;
        draw(graphics: Internal.GuiGraphics_, x: number, y: number, w: number, h: number): void;
        wait(): void;
        wait(arg0: number): void;
        static "getIcon(java.lang.String)"(id: string): Internal.Icon;
        getShapePixels(): Internal.PixelBuffer;
        equals(o: any): boolean;
        copy(): Internal.Icon;
        get class(): typeof any
        get empty(): boolean
        get ingredient(): any
        get pixelBufferFrameCount(): number
        get background(): Internal.ImageIcon
        get shape(): Internal.ImageIcon
        get outline(): Internal.ImageIcon
        get json(): Internal.JsonElement
        get shapePixels(): Internal.PixelBuffer
        static idMapWithDefault: Internal.NameMap<string>;
        static idMap: Internal.NameMap<string>;
    }
    type QuestShape_ = QuestShape;
    class MachineResult <T extends Internal.Recipe<any>> implements Internal.FinishedRecipe {
        getClass(): typeof any;
        serializeRecipeData(arg0: Internal.JsonObject_): void;
        toString(): string;
        notifyAll(): void;
        serializeAdvancement(): Internal.JsonObject;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getId(): ResourceLocation;
        getAdvancementId(): ResourceLocation;
        wait(): void;
        wait(arg0: number): void;
        getType(): Internal.RecipeSerializer<any>;
        equals(arg0: any): boolean;
        serializeRecipe(): Internal.JsonObject;
        get class(): typeof any
        get id(): ResourceLocation
        get advancementId(): ResourceLocation
        get type(): Internal.RecipeSerializer<any>
    }
    type MachineResult_<T extends Internal.Recipe<any>> = MachineResult<T>;
    class WeightedReward implements Internal.Comparable<Internal.WeightedReward> {
        constructor(reward: Internal.Reward_, weight: number)
        getClass(): typeof any;
        compareTo(o: Internal.WeightedReward_): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        static chanceString(weight: number, totalWeight: number, empty: boolean): string;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static chanceString(weight: number, totalWeight: number): string;
        getWeight(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        setWeight(weight: number): void;
        getReward(): Internal.Reward;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(dev.ftb.mods.ftbquests.quest.loot.WeightedReward)"(o: Internal.WeightedReward_): number;
        get class(): typeof any
        get weight(): number
        set weight(weight: number)
        get reward(): Internal.Reward
    }
    type WeightedReward_ = WeightedReward;
    class MinMaxBounds$Ints extends Internal.MinMaxBounds<number> {
        static fromReader(arg0: Internal.StringReader_, arg1: Internal.Function_<number, number>): Internal.MinMaxBounds$Ints;
        getClass(): typeof any;
        serializeToJson(): Internal.JsonElement;
        matches(arg0: number): boolean;
        toString(): string;
        static fromJson(arg0: Internal.JsonElement_): Internal.MinMaxBounds$Ints;
        getMax(): number;
        notifyAll(): void;
        isAny(): boolean;
        static atMost(arg0: number): Internal.MinMaxBounds$Ints;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        matchesSqr(arg0: number): boolean;
        static atLeast(arg0: number): Internal.MinMaxBounds$Ints;
        hashCode(): number;
        static exactly(arg0: number): Internal.MinMaxBounds$Ints;
        static fromReader(arg0: Internal.StringReader_): Internal.MinMaxBounds$Ints;
        getMin(): number;
        wait(): void;
        wait(arg0: number): void;
        static between(arg0: number, arg1: number): Internal.MinMaxBounds$Ints;
        equals(arg0: any): boolean;
        get class(): typeof any
        get max(): number
        get any(): boolean
        get min(): number
        static readonly ANY: (Internal.MinMaxBounds$Ints) & (Internal.MinMaxBounds$Ints);
    }
    type MinMaxBounds$Ints_ = MinMaxBounds$Ints;
    class EnumProperty <T extends Internal.Enum<T> & Internal.StringRepresentable> extends Internal.Property<T> {
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T): Internal.EnumProperty<T>;
        getClass(): typeof any;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Predicate_<T>): Internal.EnumProperty<T>;
        generateHashCode(): number;
        "value(java.lang.Object)"(arg0: T): Internal.Property$Value<T>;
        getName(arg0: T): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        value(arg0: Internal.StateHolder_<any, any>): Internal.Property$Value<T>;
        static "create(java.lang.String,java.lang.Class,java.lang.Object[])"<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, ...arg2: T[]): Internal.EnumProperty<T>;
        getName(): string;
        "getName(java.lang.Comparable)"(arg0: Internal.Comparable_<any>): string;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, ...arg2: T[]): Internal.EnumProperty<T>;
        "value(net.minecraft.world.level.block.state.StateHolder)"(arg0: Internal.StateHolder_<any, any>): Internal.Property$Value<T>;
        static "create(java.lang.String,java.lang.Class,java.util.function.Predicate)"<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Predicate_<T>): Internal.EnumProperty<T>;
        getValueClass(): T;
        toString(): string;
        getPossibleValues(): Internal.Collection<T>;
        notifyAll(): void;
        valueCodec(): Internal.Codec<Internal.Property$Value<T>>;
        static "create(java.lang.String,java.lang.Class,java.util.Collection)"<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Collection_<T>): Internal.EnumProperty<T>;
        getName(arg0: Internal.Comparable_<any>): string;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Collection_<T>): Internal.EnumProperty<T>;
        "getName(java.lang.Object)"(arg0: T): string;
        parseValue<U, S extends Internal.StateHolder<any, S>>(arg0: Internal.DynamicOps_<U>, arg1: S, arg2: U): Internal.DataResult<S>;
        hashCode(): number;
        codec(): Internal.Codec<T>;
        wait(): void;
        wait(arg0: number): void;
        getValue(arg0: string): Internal.Optional<T>;
        value(arg0: T): Internal.Property$Value<T>;
        equals(arg0: any): boolean;
        getAllValues(): Internal.Stream<Internal.Property$Value<T>>;
        get class(): typeof any
        get name(): string
        get valueClass(): T
        get possibleValues(): Internal.Collection<T>
        get allValues(): Internal.Stream<Internal.Property$Value<T>>
    }
    type EnumProperty_<T extends Internal.Enum<T> & Internal.StringRepresentable> = EnumProperty<T>;
    class FilterLogic extends Internal.FilterLogicBase {
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number, arg3: string)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number, arg3: Internal.Predicate_<Internal.ItemStack>, arg4: string)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.ItemStack>, arg2: number, arg3: Internal.Predicate_<Internal.ItemStack>)
        getClass(): typeof any;
        setMatchDurability(arg0: boolean): void;
        setPrimaryMatch(arg0: Internal.PrimaryMatch_): void;
        addTag(arg0: Internal.TagKey_<Internal.Item>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setMatchNbt(arg0: boolean): void;
        setMatchAnyTag(arg0: boolean): void;
        getFilterHandler(): Internal.FilterLogic$ObservableFilterItemStackHandler;
        shouldMatchAnyTag(): boolean;
        getPrimaryMatch(): Internal.PrimaryMatch;
        stackMatchesFilter(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        toString(): string;
        notifyAll(): void;
        isAllowList(): boolean;
        shouldMatchDurability(): boolean;
        setAllowByDefault(arg0: boolean): void;
        setAllowList(arg0: boolean): void;
        shouldMatchNbt(): boolean;
        hashCode(): number;
        setEmptyAllowListMatchesEverything(): void;
        wait(): void;
        getTagKeys(): Internal.Set<Internal.TagKey<Internal.Item>>;
        removeTagName(arg0: Internal.TagKey_<Internal.Item>): void;
        wait(arg0: number): void;
        getParentTagKey(): string;
        equals(arg0: any): boolean;
        matchesFilter(arg0: Internal.ItemStack_): boolean;
        get class(): typeof any
        set matchDurability(arg0: boolean)
        set primaryMatch(arg0: Internal.PrimaryMatch_)
        set matchNbt(arg0: boolean)
        set matchAnyTag(arg0: boolean)
        get filterHandler(): Internal.FilterLogic$ObservableFilterItemStackHandler
        get primaryMatch(): Internal.PrimaryMatch
        get allowList(): boolean
        set allowByDefault(arg0: boolean)
        set allowList(arg0: boolean)
        get tagKeys(): Internal.Set<Internal.TagKey<Internal.Item>>
        get parentTagKey(): string
    }
    type FilterLogic_ = FilterLogic;
    class ShovelItem extends Internal.DiggerItem implements Internal.ShovelItemAccessor, Internal.IMixinShovelItem {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        static getPathStates(): Internal.Map<Internal.Block, Internal.BlockState>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        static tweakeroo_getPathStates(): Internal.Map<Internal.Block, Internal.BlockState>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        static getPathStates_$md$7ee279$1(): Internal.Map<any, any>;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getAttackDamage(): number;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        static getShovelPathingState(arg0: Internal.BlockState_): Internal.BlockState;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        static tweakeroo_getPathStates_$md$7ee279$0(): Internal.Map<any, any>;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        get pathStates(): Internal.Map<Internal.Block, Internal.BlockState>
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get pathStates_$md$7ee279$1(): Internal.Map<any, any>
        get attackDamage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static FLATTENABLES: ({[key: Internal.MyceliumBlock]: Internal.BlockState, [key: Internal.GrassBlock]: Internal.BlockState, [key: Internal.Block]: Internal.BlockState, [key: Internal.RootedDirtBlock]: Internal.BlockState, [key: Internal.Block]: Internal.BlockState, [key: Internal.SnowyDirtBlock]: Internal.BlockState}) & (Internal.Map<Internal.Block, Internal.BlockState>);
    }
    type ShovelItem_ = ShovelItem;
    interface Kind1$Mu extends Internal.K1 {
    }
    type Kind1$Mu_ = Kind1$Mu;
    class SoundManager extends Internal.SimplePreparableReloadListener<any> {
        constructor(arg0: Internal.Options_)
        getClass(): typeof any;
        play(arg0: Internal.SoundInstance_): void;
        updateSourceVolume(arg0: Internal.SoundSource_, arg1: number): void;
        getAvailableSounds(): Internal.Collection<ResourceLocation>;
        destroy(): void;
        stop(arg0: Internal.SoundInstance_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        addListener(arg0: Internal.SoundEventListener_): void;
        playDelayed(arg0: Internal.SoundInstance_, arg1: number): void;
        getName(): string;
        stop(arg0: ResourceLocation_, arg1: Internal.SoundSource_): void;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        updateSource(arg0: Internal.Camera_): void;
        reload(): void;
        queueTickingSound(arg0: Internal.TickableSoundInstance_): void;
        getSoundEvent(arg0: ResourceLocation_): Internal.WeighedSoundEvents;
        toString(): string;
        notifyAll(): void;
        resume(): void;
        getAvailableSoundDevices(): Internal.List<string>;
        getDebugString(): string;
        hashCode(): number;
        removeListener(arg0: Internal.SoundEventListener_): void;
        wait(): void;
        stop(): void;
        tick(arg0: boolean): void;
        isActive(arg0: Internal.SoundInstance_): boolean;
        wait(arg0: number): void;
        pause(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get availableSounds(): Internal.Collection<ResourceLocation>
        get name(): string
        get availableSoundDevices(): Internal.List<string>
        get debugString(): string
        static readonly EMPTY_SOUND: (Internal.Sound) & (Internal.Sound);
        static readonly INTENTIONALLY_EMPTY_SOUND: (Internal.Sound) & (Internal.Sound);
        static readonly INTENTIONALLY_EMPTY_SOUND_LOCATION: (ResourceLocation) & (ResourceLocation);
        static readonly INTENTIONALLY_EMPTY_SOUND_EVENT: (Internal.WeighedSoundEvents) & (Internal.WeighedSoundEvents);
    }
    type SoundManager_ = SoundManager;
    class WindowsFileSystem extends Internal.FileSystem {
        getClass(): typeof any;
        getSeparator(): string;
        getRootDirectories(): Internal.Iterable<Internal.Path>;
        toString(): string;
        getFileStores(): Internal.Iterable<Internal.FileStore>;
        newWatchService(): Internal.WatchService;
        notifyAll(): void;
        getPath(arg0: string, ...arg1: string[]): Internal.Path;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        supportedFileAttributeViews(): Internal.Set<string>;
        isOpen(): boolean;
        wait(): void;
        close(): void;
        getUserPrincipalLookupService(): Internal.UserPrincipalLookupService;
        wait(arg0: number): void;
        provider(): Internal.FileSystemProvider;
        getPathMatcher(arg0: string): Internal.PathMatcher;
        isReadOnly(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get separator(): string
        get rootDirectories(): Internal.Iterable<Internal.Path>
        get fileStores(): Internal.Iterable<Internal.FileStore>
        get open(): boolean
        get userPrincipalLookupService(): Internal.UserPrincipalLookupService
        get readOnly(): boolean
    }
    type WindowsFileSystem_ = WindowsFileSystem;
    class FireworksJS {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        static of(o: any): Internal.FireworksJS;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createFireworkRocket(w: Internal.Level_, x: number, y: number, z: number): Internal.FireworkRocketEntity;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        lifetime: number;
        readonly explosions: Internal.List<Internal.FireworksJS$Explosion>;
        flight: number;
    }
    type FireworksJS_ = FireworksJS;
    class BlockEntityWithoutLevelRenderer implements Internal.ResourceManagerReloadListener {
        constructor(arg0: Internal.BlockEntityRenderDispatcher_, arg1: Internal.EntityModelSet_)
        getClass(): typeof any;
        toString(): string;
        renderByItem(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number, arg5: number): void;
        notifyAll(): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get class(): typeof any
        get name(): string
    }
    type BlockEntityWithoutLevelRenderer_ = BlockEntityWithoutLevelRenderer;
    interface IntToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type IntToLongFunction_ = IntToLongFunction | ((arg0: number)=> number);
    class DiscFragmentItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getDisplayName(): Internal.MutableComponent;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get displayName(): Internal.MutableComponent
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type DiscFragmentItem_ = DiscFragmentItem;
    class MachineDefinition implements Internal.Supplier<Internal.IMachineBlock> {
        constructor(arg0: ResourceLocation_)
        getRotationState(): RotationState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.BlockEntity>;
        defaultRenderState(): Internal.MachineRenderState;
        getRecipeTypes(): Internal.GTRecipeType[];
        setShape(arg0: Internal.VoxelShape_): void;
        notify(): void;
        setBeforeWorking(arg0: Internal.BiPredicate_<Internal.IRecipeLogicMachine, Internal.GTRecipe>): void;
        getAppearance(): Internal.Supplier<Internal.BlockState>;
        static setBuilt(arg0: Internal.MachineDefinition_): void;
        getId(): ResourceLocation;
        setTooltipBuilder(arg0: Internal.BiConsumer_<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>): void;
        isRenderWorldPreview(): boolean;
        isAlwaysTryModifyRecipe(): boolean;
        getDescriptionId(): string;
        getStateDefinition(): Internal.StateDefinition<Internal.MachineDefinition, Internal.MachineRenderState>;
        setEditableUI(arg0: Internal.EditableMachineUI_): void;
        getEditableUI(): Internal.EditableMachineUI;
        setRotationState(arg0: RotationState_): void;
        isRegressWhenWaiting(): boolean;
        setRecipeTypes(arg0: Internal.GTRecipeType_[]): void;
        setAppearance(arg0: Internal.Supplier_<Internal.BlockState>): void;
        getOnWorking(): Internal.Predicate<Internal.IRecipeLogicMachine>;
        getRecipeModifier(): Internal.RecipeModifier;
        asStack(arg0: number): Internal.ItemStack;
        isAllowExtendedFacing(): boolean;
        defaultBlockState(): Internal.BlockState;
        getTooltipBuilder(): Internal.BiConsumer<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>;
        setRecipeOutputLimits(arg0: Internal.Reference2IntMap_<RecipeCapability<any>>): void;
        isAllowCoverOnFront(): boolean;
        static clearBuilt(): void;
        setTier(arg0: number): void;
        getRecipeOutputLimits(): Internal.Reference2IntMap<RecipeCapability<any>>;
        wait(): void;
        setStateDefinition(arg0: Internal.StateDefinition_<Internal.MachineDefinition, Internal.MachineRenderState>): void;
        setOnWorking(arg0: Internal.Predicate_<Internal.IRecipeLogicMachine>): void;
        getBlock(): Internal.Block;
        setAllowCoverOnFront(arg0: boolean): void;
        getClass(): typeof any;
        getOnWaiting(): Internal.Consumer<Internal.IRecipeLogicMachine>;
        get(): any;
        getLangValue(): string;
        setRecipeModifier(arg0: Internal.RecipeModifier_): void;
        setRegressWhenWaiting(arg0: boolean): void;
        setItemSupplier(arg0: Internal.Supplier_<Internal.MetaMachineItem>): void;
        setBlockEntityTypeSupplier(arg0: Internal.Supplier_<Internal.BlockEntityType<Internal.BlockEntity>>): void;
        wait(arg0: number, arg1: number): void;
        setDefaultPaintingColor(arg0: number): void;
        createMetaMachine(arg0: Internal.IMachineBlockEntity_): Internal.MetaMachine;
        setAllowExtendedFacing(arg0: boolean): void;
        setMachineSupplier(arg0: Internal.Function_<Internal.IMachineBlockEntity, Internal.MetaMachine>): void;
        setAlwaysTryModifyRecipe(arg0: boolean): void;
        getName(): string;
        setOnWaiting(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>): void;
        getDefaultPaintingColor(): number;
        setLangValue(arg0: string): void;
        toString(): string;
        getTier(): number;
        notifyAll(): void;
        isRenderXEIPreview(): boolean;
        registerDefaultState(arg0: Internal.MachineRenderState_): void;
        setAfterWorking(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>): void;
        getShape(arg0: Internal.Direction_): Internal.VoxelShape;
        setRenderXEIPreview(arg0: boolean): void;
        hashCode(): number;
        getAfterWorking(): Internal.Consumer<Internal.IRecipeLogicMachine>;
        setBlockSupplier(arg0: Internal.Supplier_<Internal.Block>): void;
        wait(arg0: number): void;
        getBeforeWorking(): Internal.BiPredicate<Internal.IRecipeLogicMachine, Internal.GTRecipe>;
        static getBuilt(): Internal.MachineDefinition;
        getItem(): Internal.MetaMachineItem;
        equals(arg0: any): boolean;
        setRenderWorldPreview(arg0: boolean): void;
        asStack(): Internal.ItemStack;
        get rotationState(): RotationState
        get blockEntityType(): Internal.BlockEntityType<Internal.BlockEntity>
        get recipeTypes(): Internal.GTRecipeType[]
        set shape(arg0: Internal.VoxelShape_)
        set beforeWorking(arg0: Internal.BiPredicate_<Internal.IRecipeLogicMachine, Internal.GTRecipe>)
        get appearance(): Internal.Supplier<Internal.BlockState>
        set built(arg0: Internal.MachineDefinition_)
        get id(): ResourceLocation
        set tooltipBuilder(arg0: Internal.BiConsumer_<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>)
        get renderWorldPreview(): boolean
        get alwaysTryModifyRecipe(): boolean
        get descriptionId(): string
        get stateDefinition(): Internal.StateDefinition<Internal.MachineDefinition, Internal.MachineRenderState>
        set editableUI(arg0: Internal.EditableMachineUI_)
        get editableUI(): Internal.EditableMachineUI
        set rotationState(arg0: RotationState_)
        get regressWhenWaiting(): boolean
        set recipeTypes(arg0: Internal.GTRecipeType_[])
        set appearance(arg0: Internal.Supplier_<Internal.BlockState>)
        get onWorking(): Internal.Predicate<Internal.IRecipeLogicMachine>
        get recipeModifier(): Internal.RecipeModifier
        get allowExtendedFacing(): boolean
        get tooltipBuilder(): Internal.BiConsumer<Internal.ItemStack, Internal.List<net.minecraft.network.chat.Component>>
        set recipeOutputLimits(arg0: Internal.Reference2IntMap_<RecipeCapability<any>>)
        get allowCoverOnFront(): boolean
        set tier(arg0: number)
        get recipeOutputLimits(): Internal.Reference2IntMap<RecipeCapability<any>>
        set stateDefinition(arg0: Internal.StateDefinition_<Internal.MachineDefinition, Internal.MachineRenderState>)
        set onWorking(arg0: Internal.Predicate_<Internal.IRecipeLogicMachine>)
        get block(): Internal.Block
        set allowCoverOnFront(arg0: boolean)
        get class(): typeof any
        get onWaiting(): Internal.Consumer<Internal.IRecipeLogicMachine>
        get langValue(): string
        set recipeModifier(arg0: Internal.RecipeModifier_)
        set regressWhenWaiting(arg0: boolean)
        set itemSupplier(arg0: Internal.Supplier_<Internal.MetaMachineItem>)
        set blockEntityTypeSupplier(arg0: Internal.Supplier_<Internal.BlockEntityType<Internal.BlockEntity>>)
        set defaultPaintingColor(arg0: number)
        set allowExtendedFacing(arg0: boolean)
        set machineSupplier(arg0: Internal.Function_<Internal.IMachineBlockEntity, Internal.MetaMachine>)
        set alwaysTryModifyRecipe(arg0: boolean)
        get name(): string
        set onWaiting(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>)
        get defaultPaintingColor(): number
        set langValue(arg0: string)
        get tier(): number
        get renderXEIPreview(): boolean
        set afterWorking(arg0: Internal.Consumer_<Internal.IRecipeLogicMachine>)
        set renderXEIPreview(arg0: boolean)
        get afterWorking(): Internal.Consumer<Internal.IRecipeLogicMachine>
        set blockSupplier(arg0: Internal.Supplier_<Internal.Block>)
        get beforeWorking(): Internal.BiPredicate<Internal.IRecipeLogicMachine, Internal.GTRecipe>
        get built(): Internal.MachineDefinition
        get item(): Internal.MetaMachineItem
        set renderWorldPreview(arg0: boolean)
        static readonly RENDER_STATE_REGISTRY: Internal.IdMapper<Internal.MachineRenderState>;
    }
    type MachineDefinition_ = MachineDefinition;
    interface LootTablePools {
        abstract getPools(): Internal.LootPool[];
        get pools(): Internal.LootPool[]
        (): Internal.LootPool_[];
    }
    type LootTablePools_ = (()=> Internal.LootPool_[]) | LootTablePools;
    class WorldStem extends Internal.Record implements Internal.AutoCloseable {
        constructor(arg0: Internal.CloseableResourceManager_, arg1: Internal.ReloadableServerResources_, arg2: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg3: Internal.WorldData_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        dataPackResources(): Internal.ReloadableServerResources;
        wait(): void;
        resourceManager(): Internal.CloseableResourceManager;
        close(): void;
        registries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        worldData(): Internal.WorldData;
        get class(): typeof any
    }
    type WorldStem_ = WorldStem;
    interface IToolable {
        abstract onToolClick(arg0: Internal.Set_<GTToolType>, arg1: Internal.ItemStack_, arg2: Internal.UseOnContext_): com.mojang.datafixers.util.Pair<GTToolType, Internal.InteractionResult>;
        (arg0: Internal.Set<GTToolType>, arg1: Internal.ItemStack, arg2: Internal.UseOnContext): com.mojang.datafixers.util.Pair_<GTToolType, Internal.InteractionResult>;
    }
    type IToolable_ = IToolable | ((arg0: Internal.Set<GTToolType>, arg1: Internal.ItemStack, arg2: Internal.UseOnContext)=> com.mojang.datafixers.util.Pair_<GTToolType, Internal.InteractionResult>);
    interface TelemetryEvent extends Internal.TelemetryPropertyContainer {
        abstract addProperty(arg0: string, arg1: boolean): void;
        abstract "addProperty(java.lang.String,java.lang.String)"(arg0: string, arg1: string): void;
        abstract addNullProperty(arg0: string): void;
        abstract "addProperty(java.lang.String,long)"(arg0: string, arg1: number): void;
        abstract "addProperty(java.lang.String,int)"(arg0: string, arg1: number): void;
        forJsonObject(arg0: Internal.JsonObject_): Internal.TelemetryPropertyContainer;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: string): void;
        abstract send(): void;
        abstract "addProperty(java.lang.String,boolean)"(arg0: string, arg1: boolean): void;
        readonly EMPTY: Internal.TelemetryEvent;
    }
    type TelemetryEvent_ = TelemetryEvent;
    class RecipesUpdatedEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.RecipeManager_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getRecipeManager(): Internal.RecipeManager;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get recipeManager(): Internal.RecipeManager
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type RecipesUpdatedEvent_ = RecipesUpdatedEvent;
    interface Short2ReferenceFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Short2LongFunction;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Short2DoubleFunction;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2ReferenceFunction<V>;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ReferenceFunction<V>;
        "apply(java.lang.Short)"(arg0: number): V;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2ReferenceFunction<V>;
        apply(arg0: number): V;
        "containsKey(short)"(arg0: number): boolean;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Short2ReferenceFunction<T>;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Short2CharFunction;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2ReferenceFunction<V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        containsKey(arg0: number): boolean;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2ReferenceFunction<V>;
        put(arg0: number, arg1: V): V;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Short2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "getOrDefault(short,java.lang.Object)"(arg0: number, arg1: V): V;
        "put(short,java.lang.Object)"(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Short2IntFunction;
        "remove(short)"(arg0: number): V;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Object)"(arg0: number, arg1: V): V;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2ReferenceFunction<V>;
        abstract get(arg0: number): V;
        clear(): void;
        abstract "get(short)"(arg0: number): V;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
    }
    type Short2ReferenceFunction_<V> = Short2ReferenceFunction<V>;
    interface FloatBinaryOperator extends Internal.DoubleBinaryOperator, Internal.BinaryOperator<number> {
        /**
         * @deprecated
        */
        apply(arg0: number, arg1: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.BiFunction<number, number, V>;
        /**
         * @deprecated
        */
        apply(arg0: any, arg1: any): any;
        abstract apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number, arg1: number): number;
        abstract "apply(float,float)"(arg0: number, arg1: number): number;
        maxBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        minBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        /**
         * @deprecated
        */
        "apply(java.lang.Float,java.lang.Float)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "apply(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
    }
    type FloatBinaryOperator_ = FloatBinaryOperator;
    class Minecart extends Internal.AbstractMinecart {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        getPos(arg0: number, arg1: number, arg2: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        setHurtTime(arg0: number): void;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        static registerCollisionHandler(arg0: Internal.IMinecartCollisionHandler_): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMaxSpeedAirLateral(arg0: number): void;
        setMotionZ(z: number): void;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        shouldDoRailFunctions(): boolean;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getDamage(): number;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        getDisplayBlockState(): Internal.BlockState;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getCollisionHandler(): Internal.IMinecartCollisionHandler;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setDamage(arg0: number): void;
        getDisplayOffset(): number;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        setCanUseRail(arg0: boolean): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        markFusionRecomputeModels(): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): Internal.Entity;
        abstract sdl$getDynamicLightY(): number;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        getFirstPassenger(): Internal.Entity;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        setHurtDir(arg0: number): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        gtceu$setFireImmune(arg0: boolean): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getHurtDir(): number;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getMaxSpeedAirLateral(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        ejectPassengers(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setCustomDisplay(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        baseTick(): void;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getComparatorLevel(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFacing(): Internal.Direction;
        hasCustomDisplay(): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        setDisplayOffset(arg0: number): void;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        setMaxSpeedAirVertical(arg0: number): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        getDefaultDisplayOffset(): number;
        acceptsFailure(): boolean;
        getMaxSpeedAirVertical(): number;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canUseRail(): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getCurrentRailPosition(): BlockPos;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        static createMinecart(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.AbstractMinecart$Type_): Internal.AbstractMinecart;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        setDragAir(arg0: number): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getMaxCartSpeedOnRail(): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        getSlopeAdjustment(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        getBbHeight(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getMinecartType(): Internal.AbstractMinecart$Type;
        hasControllingPassenger(): boolean;
        moveMinecartOnRail(arg0: BlockPos_): void;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        destroy(arg0: DamageSource_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        discard(): void;
        setYBodyRot(arg0: number): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        isPoweredCart(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getDragAir(): number;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        abstract sdl$resetDynamicLight(): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getDefaultDisplayBlockState(): Internal.BlockState;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getHurtTime(): number;
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        getCurrentCartSpeedCapOnRail(): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        getMaxSpeedWithRail(): number;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setDisplayBlockState(arg0: Internal.BlockState_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        set hurtTime(arg0: number)
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set maxSpeedAirLateral(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get damage(): number
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get displayBlockState(): Internal.BlockState
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get collisionHandler(): Internal.IMinecartCollisionHandler
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set damage(arg0: number)
        get displayOffset(): number
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        set canUseRail(arg0: boolean)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        get underWater(): boolean
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        set currentCartSpeedCapOnRail(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get firstPassenger(): Internal.Entity
        get addedToWorld(): boolean
        set hurtDir(arg0: number)
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get hurtDir(): number
        get lookAngle(): Vec3d
        get maxSpeedAirLateral(): number
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set customDisplay(arg0: boolean)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get comparatorLevel(): number
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        set displayOffset(arg0: number)
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get inWater(): boolean
        get portalWaitTime(): number
        set maxSpeedAirVertical(arg0: number)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        get defaultDisplayOffset(): number
        get maxSpeedAirVertical(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get currentRailPosition(): BlockPos
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        set dragAir(arg0: number)
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get maxCartSpeedOnRail(): number
        get ticksRequiredToFreeze(): number
        get slopeAdjustment(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get minecartType(): Internal.AbstractMinecart$Type
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get poweredCart(): boolean
        get dragAir(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get defaultDisplayBlockState(): Internal.BlockState
        get passenger(): boolean
        get hurtTime(): number
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get currentCartSpeedCapOnRail(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get maxSpeedWithRail(): number
        get fullyFrozen(): boolean
        set displayBlockState(arg0: Internal.BlockState_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type Minecart_ = Minecart;
    interface ArmorProperty$CustomTextureGetter {
        abstract getCustomTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: boolean): ResourceLocation;
        (arg0: Internal.ItemStack, arg1: Internal.Entity, arg2: Internal.EquipmentSlot, arg3: boolean): ResourceLocation_;
    }
    type ArmorProperty$CustomTextureGetter_ = ArmorProperty$CustomTextureGetter | ((arg0: Internal.ItemStack, arg1: Internal.Entity, arg2: Internal.EquipmentSlot, arg3: boolean)=> ResourceLocation_);
    interface PathIterator {
        abstract next(): void;
        abstract "currentSegment(float[])"(arg0: number[]): number;
        abstract "currentSegment(double[])"(arg0: number[]): number;
        abstract isDone(): boolean;
        abstract getWindingRule(): number;
        abstract currentSegment(arg0: number[]): number;
        abstract currentSegment(arg0: number[]): number;
        get done(): boolean
        get windingRule(): number
        readonly SEG_MOVETO: (0) & (number);
        readonly WIND_NON_ZERO: (1) & (number);
        readonly SEG_LINETO: (1) & (number);
        readonly SEG_CUBICTO: (3) & (number);
        readonly WIND_EVEN_ODD: (0) & (number);
        readonly SEG_QUADTO: (2) & (number);
        readonly SEG_CLOSE: (4) & (number);
    }
    type PathIterator_ = PathIterator;
    class PopupMenu extends Internal.Menu {
        constructor()
        constructor(arg0: string)
        /**
         * @deprecated
        */
        countItems(): number;
        paramString(): string;
        getLabel(): string;
        setEnabled(arg0: boolean): void;
        setFont(arg0: Internal.Font_): void;
        getItem(arg0: number): Internal.MenuItem;
        notify(): void;
        dispatchEvent(arg0: Internal.AWTEvent_): void;
        getItemCount(): number;
        addActionListener(arg0: Internal.ActionListener_): void;
        getParent(): Internal.MenuContainer;
        remove(arg0: number): void;
        setName(arg0: string): void;
        /**
         * @deprecated
        */
        abstract postEvent(arg0: Internal.Event_): boolean;
        "insert(java.awt.MenuItem,int)"(arg0: Internal.MenuItem_, arg1: number): void;
        setShortcut(arg0: Internal.MenuShortcut_): void;
        deleteShortcut(): void;
        addSeparator(): void;
        "remove(java.awt.MenuComponent)"(arg0: Internal.MenuComponent_): void;
        "insert(java.lang.String,int)"(arg0: string, arg1: number): void;
        setActionCommand(arg0: string): void;
        wait(): void;
        add(arg0: string): void;
        removeActionListener(arg0: Internal.ActionListener_): void;
        getActionListeners(): Internal.ActionListener[];
        getClass(): typeof any;
        /**
         * @deprecated
        */
        disable(): void;
        insertSeparator(arg0: number): void;
        add(arg0: Internal.MenuItem_): Internal.MenuItem;
        getListeners<T extends Internal.EventListener>(arg0: T): T[];
        insert(arg0: Internal.MenuItem_, arg1: number): void;
        wait(arg0: number, arg1: number): void;
        abstract getFont(): Internal.Font;
        isEnabled(): boolean;
        getName(): string;
        getActionCommand(): string;
        /**
         * @deprecated
        */
        enable(arg0: boolean): void;
        addNotify(): void;
        "remove(int)"(arg0: number): void;
        remove(arg0: Internal.MenuComponent_): void;
        removeAll(): void;
        show(arg0: Internal.Component_, arg1: number, arg2: number): void;
        "add(java.lang.String)"(arg0: string): void;
        toString(): string;
        notifyAll(): void;
        isTearOff(): boolean;
        getAccessibleContext(): Internal.AccessibleContext;
        /**
         * @deprecated
        */
        enable(): void;
        getShortcut(): Internal.MenuShortcut;
        hashCode(): number;
        removeNotify(): void;
        "add(java.awt.MenuItem)"(arg0: Internal.MenuItem_): Internal.MenuItem;
        setLabel(arg0: string): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        insert(arg0: string, arg1: number): void;
        get label(): string
        set enabled(arg0: boolean)
        set font(arg0: Internal.Font_)
        get itemCount(): number
        get parent(): Internal.MenuContainer
        set name(arg0: string)
        set shortcut(arg0: Internal.MenuShortcut_)
        set actionCommand(arg0: string)
        get actionListeners(): Internal.ActionListener[]
        get class(): typeof any
        get font(): Internal.Font
        get enabled(): boolean
        get name(): string
        get actionCommand(): string
        get tearOff(): boolean
        get accessibleContext(): Internal.AccessibleContext
        get shortcut(): Internal.MenuShortcut
        set label(arg0: string)
    }
    type PopupMenu_ = PopupMenu;
    abstract class IntBuffer extends Internal.Buffer implements Internal.Comparable<Internal.IntBuffer> {
        put(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        reset(): Internal.Buffer;
        abstract isDirect(): boolean;
        limit(): number;
        notify(): void;
        compareTo(arg0: any): number;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.IntBuffer;
        abstract order(): Internal.ByteOrder;
        "put(int,java.nio.IntBuffer,int,int)"(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        static wrap(arg0: number[]): Internal.IntBuffer;
        clear(): this;
        flip(): this;
        mismatch(arg0: Internal.IntBuffer_): number;
        abstract put(arg0: number): this;
        "get(int[])"(arg0: number[]): this;
        "put(int,int[])"(arg0: number, arg1: number[]): this;
        abstract "put(int)"(arg0: number): this;
        position(): number;
        abstract duplicate(): this;
        "compareTo(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): number;
        "put(int,int[],int,int)"(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        wait(): void;
        put(arg0: number[], arg1: number, arg2: number): this;
        abstract put(arg0: number, arg1: number): this;
        abstract isReadOnly(): boolean;
        position(arg0: number): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        get(arg0: number[], arg1: number, arg2: number): this;
        abstract get(): number;
        getClass(): typeof any;
        "put(int[])"(arg0: number[]): this;
        capacity(): number;
        arrayOffset(): number;
        wait(arg0: number, arg1: number): void;
        put(arg0: Internal.IntBuffer_): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        hasArray(): boolean;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        compareTo(arg0: Internal.IntBuffer_): number;
        rewind(): this;
        put(arg0: number[]): this;
        toString(): string;
        remaining(): number;
        "put(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        notifyAll(): void;
        static allocate(arg0: number): Internal.IntBuffer;
        abstract compact(): this;
        mark(): Internal.Buffer;
        hashCode(): number;
        abstract slice(): this;
        hasRemaining(): boolean;
        abstract "put(int,int)"(arg0: number, arg1: number): this;
        get(arg0: number, arg1: number[]): this;
        wait(arg0: number): void;
        abstract get(arg0: number): number;
        abstract asReadOnlyBuffer(): this;
        put(arg0: number, arg1: number[]): this;
        get(arg0: number[]): this;
        limit(arg0: number): this;
        slice(arg0: number, arg1: number): Internal.Buffer;
        equals(arg0: any): boolean;
        abstract "get(int)"(arg0: number): number;
        array(): number[];
        get direct(): boolean
        get readOnly(): boolean
        get class(): typeof any
    }
    type IntBuffer_ = IntBuffer;
    class ChunkStatus$ChunkType extends Internal.Enum<Internal.ChunkStatus$ChunkType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.level.chunk.ChunkStatus$ChunkType)"(arg0: Internal.ChunkStatus$ChunkType_): number;
        static values(): Internal.ChunkStatus$ChunkType[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChunkStatus$ChunkType>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.ChunkStatus$ChunkType;
        getDeclaringClass(): typeof Internal.ChunkStatus$ChunkType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.ChunkStatus$ChunkType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.ChunkStatus$ChunkType
        static readonly PROTOCHUNK: (Internal.ChunkStatus$ChunkType) & (Internal.ChunkStatus$ChunkType);
        static readonly LEVELCHUNK: (Internal.ChunkStatus$ChunkType) & (Internal.ChunkStatus$ChunkType);
    }
    type ChunkStatus$ChunkType_ = ChunkStatus$ChunkType | "levelchunk" | "protochunk";
    class CanBeReplacedCallbackJS {
        constructor(blockPlaceContext: Internal.BlockPlaceContext_, state: Internal.BlockState_)
        getClass(): typeof any;
        getClickedFace(): Internal.Direction;
        getHorizontalDirection(): Internal.Direction;
        getRotation(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getNearestLookingDirection(): Internal.Direction;
        getClickLocation(): Vec3d;
        isSecondaryUseActive(): boolean;
        getNearestLookingVerticalDirection(): Internal.Direction;
        isClickedPosIn(fluid: Internal.Fluid_): boolean;
        getHand(): Internal.InteractionHand;
        getClickedPos(): BlockPos;
        getPlayer(): Internal.Player;
        isInside(): boolean;
        toString(): string;
        getClickedBlock(): Internal.BlockContainerJS;
        getNearestLookingDirections(): Internal.Direction[];
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getFluidStateAtClickedPos(): Internal.FluidState;
        canBeReplaced(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get clickedFace(): Internal.Direction
        get horizontalDirection(): Internal.Direction
        get rotation(): number
        get level(): Internal.Level
        get nearestLookingDirection(): Internal.Direction
        get clickLocation(): Vec3d
        get secondaryUseActive(): boolean
        get nearestLookingVerticalDirection(): Internal.Direction
        get hand(): Internal.InteractionHand
        get clickedPos(): BlockPos
        get player(): Internal.Player
        get inside(): boolean
        get clickedBlock(): Internal.BlockContainerJS
        get nearestLookingDirections(): Internal.Direction[]
        get item(): Internal.ItemStack
        get fluidStateAtClickedPos(): Internal.FluidState
    }
    type CanBeReplacedCallbackJS_ = CanBeReplacedCallbackJS;
    class NonNullList <E> extends Internal.AbstractList<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static createWithCapacity<E>(arg0: number): Internal.NonNullList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        notify(): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        "remove(int)"(arg0: number): E;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        subList(arg0: number, arg1: number): Internal.List<E>;
        indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        get(arg0: number): E;
        add(arg0: E): boolean;
        listIterator(): Internal.ListIterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        set(arg0: number, arg1: E): E;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        static "of(java.lang.Object,java.lang.Object[])"<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.List<E>;
        remove(arg0: number): E;
        static create<E>(): Internal.NonNullList<E>;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        size(): number;
        hashCode(): number;
        static withSize<E>(arg0: number, arg1: E): Internal.NonNullList<E>;
        clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type NonNullList_<E> = NonNullList<E>;
    class Matrix2f implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix2fc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        normal(): this;
        rotate(arg0: number, arg1: Internal.Matrix2f_): this;
        m00(): number;
        normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        setRow(arg0: number, arg1: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRow(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        getColumn(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        lerp(arg0: Internal.Matrix2fc_, arg1: number, arg2: Internal.Matrix2f_): this;
        scaling(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        rotateLocal(arg0: number): this;
        "set(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        mulComponentWise(arg0: Internal.Matrix2fc_): this;
        sub(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        transformTranspose(arg0: Internal.Vector2f_): Internal.Vector2f;
        get(arg0: number[]): number[];
        "scaling(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "scale(float,float)"(arg0: number, arg1: number): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformTranspose(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        setFromAddress(arg0: number): this;
        m00(arg0: number): this;
        m01(): number;
        mulLocal(arg0: Internal.Matrix2fc_): this;
        clone(): any;
        getClass(): typeof any;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRotation(): number;
        add(arg0: Internal.Matrix2fc_): this;
        getScale(arg0: Internal.Vector2f_): Internal.Vector2f;
        set(arg0: Internal.ByteBuffer_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        toString(): string;
        equals(arg0: Internal.Matrix2fc_, arg1: number): boolean;
        notifyAll(): void;
        "scale(org.joml.Vector2fc,org.joml.Matrix2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number): this;
        "scale(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "scale(float)"(arg0: number): this;
        m01(arg0: number): this;
        getToAddress(arg0: number): Internal.Matrix2fc;
        wait(arg0: number): void;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        "scaling(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        setColumn(arg0: number, arg1: Internal.Vector2fc_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        invert(arg0: Internal.Matrix2f_): this;
        scale(arg0: number, arg1: number): this;
        "get(org.joml.Matrix3f)"(arg0: Matrix3f_): Matrix3f;
        scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        scaling(arg0: Internal.Vector2fc_): this;
        notify(): void;
        get(arg0: Internal.Matrix2f_): this;
        isFinite(): boolean;
        transform(arg0: Internal.Vector2f_): Internal.Vector2f;
        positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        mul(arg0: Internal.Matrix2fc_): this;
        set(arg0: Internal.FloatBuffer_): this;
        normal(arg0: Internal.Matrix2f_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        m10(arg0: number): this;
        set(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        m10(): number;
        sub(arg0: Internal.Matrix2fc_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        readExternal(arg0: Internal.ObjectInput_): void;
        mulComponentWise(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        set(arg0: Internal.Matrix3fc_): this;
        rotation(arg0: number): this;
        get(arg0: Matrix3f_): Matrix3f;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: number): number;
        wait(): void;
        lerp(arg0: Internal.Matrix2fc_, arg1: number): this;
        transform(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        determinant(): number;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mulLocal(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        "set(org.joml.Vector2fc,org.joml.Vector2fc)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        add(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2f_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        wait(arg0: number, arg1: number): void;
        rotate(arg0: number): this;
        set(arg0: Internal.Matrix2fc_): this;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        "get(float[])"(arg0: number[]): number[];
        positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        "get(org.joml.Matrix2f)"(arg0: Internal.Matrix2f_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        zero(): this;
        scaling(arg0: number): this;
        set(arg0: number[]): this;
        transpose(): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "set(float[])"(arg0: number[]): this;
        m11(arg0: number): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        "get(org.joml.Matrix3x2f)"(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        "scale(float,org.joml.Matrix2f)"(arg0: number, arg1: Internal.Matrix2f_): this;
        m11(): number;
        scale(arg0: number, arg1: Internal.Matrix2f_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        identity(): this;
        invert(): this;
        scaleLocal(arg0: number, arg1: number): this;
        hashCode(): number;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        transpose(arg0: Internal.Matrix2f_): this;
        swap(arg0: Internal.Matrix2f_): this;
        scale(arg0: Internal.Vector2fc_): this;
        equals(arg0: any): boolean;
        set "(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        get class(): typeof any
        get rotation(): number
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        get finite(): boolean
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(float[])"(arg0: number[])
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m10: number;
        m01: number;
        m00: number;
        m11: number;
    }
    type Matrix2f_ = Matrix2f;
    interface RenderableImage {
        abstract getSources(): Internal.Vector<Internal.RenderableImage>;
        abstract getMinY(): number;
        abstract getHeight(): number;
        abstract getMinX(): number;
        abstract getPropertyNames(): string[];
        abstract createDefaultRendering(): Internal.RenderedImage;
        abstract createScaledRendering(arg0: number, arg1: number, arg2: Internal.RenderingHints_): Internal.RenderedImage;
        abstract getProperty(arg0: string): any;
        abstract isDynamic(): boolean;
        abstract getWidth(): number;
        abstract createRendering(arg0: Internal.RenderContext_): Internal.RenderedImage;
        get sources(): Internal.Vector<Internal.RenderableImage>
        get minY(): number
        get height(): number
        get minX(): number
        get propertyNames(): string[]
        get dynamic(): boolean
        get width(): number
        readonly HINTS_OBSERVED: ("HINTS_OBSERVED") & (string);
    }
    type RenderableImage_ = RenderableImage;
    interface WindowStateListener extends Internal.EventListener {
        abstract windowStateChanged(arg0: Internal.WindowEvent_): void;
        (arg0: Internal.WindowEvent): void;
    }
    type WindowStateListener_ = ((arg0: Internal.WindowEvent)=> void) | WindowStateListener;
    class Matrix2d implements Internal.Cloneable, Internal.Matrix2dc, Internal.Externalizable {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix2dc_)
        "scale(double,org.joml.Matrix2d)"(arg0: number, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        normal(): this;
        scaling(arg0: Internal.Vector2dc_): this;
        m01(): number;
        positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        sub(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        "set(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "scale(double)"(arg0: number): this;
        "get(double[])"(arg0: number[]): number[];
        sub(arg0: Internal.Matrix2dc_): this;
        equals(arg0: Internal.Matrix2dc_, arg1: number): boolean;
        toString(arg0: Internal.NumberFormat_): string;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaling(arg0: number, arg1: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        scaling(arg0: number): this;
        transformTranspose(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        swap(arg0: Internal.Matrix2d_): this;
        rotation(arg0: number): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2d_): this;
        setFromAddress(arg0: number): this;
        "set(double[])"(arg0: number[]): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: Internal.Matrix2dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        invert(arg0: Internal.Matrix2d_): this;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        "set(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        m01(arg0: number): this;
        getRow(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: Internal.ByteBuffer_): this;
        getColumn(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        "scaling(double)"(arg0: number): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix2d_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transform(arg0: Internal.Vector2d_): Internal.Vector2d;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        m00(): number;
        set(arg0: Internal.Matrix3x2dc_): this;
        get(arg0: number[]): number[];
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        normal(arg0: Internal.Matrix2d_): this;
        determinant(): number;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        scale(arg0: number, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        toString(): string;
        notifyAll(): void;
        "mul(org.joml.Matrix2fc,org.joml.Matrix2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: number): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        m11(): number;
        "get(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        wait(arg0: number): void;
        scale(arg0: Internal.Vector2dc_): this;
        scale(arg0: number): this;
        scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        setRow(arg0: number, arg1: Internal.Vector2dc_): this;
        "mul(org.joml.Matrix2dc,org.joml.Matrix2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        notify(): void;
        m00(arg0: number): this;
        get(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        getScale(arg0: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: Internal.DoubleBuffer_): this;
        isFinite(): boolean;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mul(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix2dc_): this;
        rotate(arg0: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        readExternal(arg0: Internal.ObjectInput_): void;
        getRotation(): number;
        m11(arg0: number): this;
        scaleLocal(arg0: number, arg1: number): this;
        mulComponentWise(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number): this;
        m10(): number;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transpose(arg0: Internal.Matrix2d_): this;
        transform(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getToAddress(arg0: number): Internal.Matrix2dc;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        add(arg0: Internal.Matrix2dc_): this;
        mulLocal(arg0: Internal.Matrix2dc_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Matrix2d_): this;
        mulLocal(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        add(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number, arg2: Internal.Matrix2d_): this;
        "scale(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number[]): this;
        set(arg0: Internal.Matrix2fc_): this;
        wait(arg0: number, arg1: number): void;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        "get(org.joml.Matrix2d)"(arg0: Internal.Matrix2d_): this;
        transpose(): this;
        zero(): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "scaling(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "get(org.joml.Matrix3x2d)"(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: number): number;
        "set(org.joml.Vector2dc,org.joml.Vector2dc)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        transformTranspose(arg0: Internal.Vector2d_): Internal.Vector2d;
        m10(arg0: number): this;
        hashCode(): number;
        "scale(org.joml.Vector2dc,org.joml.Matrix2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        identity(): this;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        equals(arg0: any): boolean;
        "scale(double,double)"(arg0: number, arg1: number): this;
        invert(): this;
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_)
        set fromAddress(arg0: number)
        set "(double[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get class(): typeof any
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set "(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_)
        get finite(): boolean
        get rotation(): number
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m10: number;
        m00: number;
        m11: number;
    }
    type Matrix2d_ = Matrix2d;
    class LongConfig extends Internal.NumberConfig<number> {
        constructor(mn: number, mx: number)
        setNameKey(key: string): Internal.ConfigValue<number>;
        "getColor(java.lang.Long)"(v: number): Internal.Color4I;
        setCanEdit(e: boolean): Internal.ConfigValue<number>;
        getValue(): number;
        getStringFromValue(v: number): string;
        onClicked(clicked: Internal.Widget_, button: Internal.MouseButton_, callback: Internal.ConfigCallback_): void;
        getTooltip(): string;
        getDefaultValue(): number;
        notify(): void;
        compareTo(arg0: any): number;
        "getColor(java.lang.Object)"(arg0: any): Internal.Color4I;
        copy(value: number): number;
        getStringForGUI(v: number): net.minecraft.network.chat.Component;
        isEqual(v1: number, v2: number): boolean;
        getStringForGUI(): net.minecraft.network.chat.Component;
        scrollValue(arg0: any, arg1: boolean): Internal.Optional<any>;
        init(group: Internal.ConfigGroup_, id: string, value: number, setter: Internal.Consumer_<number>, defaultValue: number): Internal.ConfigValue<number>;
        applyValue(): void;
        canScroll(): boolean;
        getColor(arg0: any): Internal.Color4I;
        getColor(v: number): Internal.Color4I;
        "scrollValue(java.lang.Long,boolean)"(currentValue: number, forward: boolean): Internal.Optional<number>;
        wait(): void;
        getNameKey(): string;
        "compareTo(java.lang.Object)"(arg0: any): number;
        setCurrentValue(v: number): boolean;
        getClass(): typeof any;
        withScrollIncrement(increment: number): Internal.NumberConfig<number>;
        addInfo(list: Internal.TooltipList_): void;
        wait(arg0: number, arg1: number): void;
        scrollValue(currentValue: number, forward: boolean): Internal.Optional<number>;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<number>): number;
        setDefaultValue(defaultValue: number): void;
        getIcon(): Internal.Icon;
        "getStringForGUI(java.lang.Long)"(v: number): net.minecraft.network.chat.Component;
        getName(): string;
        setValue(value: number): void;
        getGroup(): Internal.ConfigGroup;
        getIcon(v: number): Internal.Icon;
        getStringForGUI(arg0: any): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        "getStringForGUI(java.lang.Object)"(arg0: any): net.minecraft.network.chat.Component;
        getPath(): string;
        fader(v: boolean): Internal.NumberConfig<number>;
        "scrollValue(java.lang.Object,boolean)"(arg0: any, arg1: boolean): Internal.Optional<any>;
        toString(): string;
        parse(callback: Internal.Consumer_<number>, string: string): boolean;
        notifyAll(): void;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        compareTo(o: Internal.ConfigValue_<number>): number;
        hashCode(): number;
        setIcon(i: Internal.Icon_): Internal.ConfigValue<number>;
        setOrder(o: number): Internal.ConfigValue<number>;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        equals(arg0: any): boolean;
        set nameKey(key: string)
        set canEdit(e: boolean)
        get value(): number
        get tooltip(): string
        get defaultValue(): number
        get stringForGUI(): net.minecraft.network.chat.Component
        get nameKey(): string
        set currentValue(v: number)
        get class(): typeof any
        set defaultValue(defaultValue: number)
        get icon(): Internal.Icon
        get name(): string
        set value(value: number)
        get group(): Internal.ConfigGroup
        get color(): Internal.Color4I
        get path(): string
        set icon(i: Internal.Icon_)
        set order(o: number)
        get canEdit(): boolean
    }
    type LongConfig_ = LongConfig;
    interface AccessibleValue {
        abstract getMinimumAccessibleValue(): number;
        abstract getMaximumAccessibleValue(): number;
        abstract setCurrentAccessibleValue(arg0: number): boolean;
        abstract getCurrentAccessibleValue(): number;
        get minimumAccessibleValue(): number
        get maximumAccessibleValue(): number
        set currentAccessibleValue(arg0: number)
        get currentAccessibleValue(): number
    }
    type AccessibleValue_ = AccessibleValue;
    interface GameMasterBlock {
    }
    type GameMasterBlock_ = GameMasterBlock;
    abstract class BlockableEventLoop <R extends Internal.Runnable> implements Internal.ProfilerMeasured, Internal.Executor, Internal.ProcessorHandle<R> {
        executeIfPossible(arg0: Internal.Runnable_): void;
        getClass(): typeof any;
        "tell(java.lang.Runnable)"(arg0: R): void;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "submit(java.util.function.Supplier)"<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        "tell(java.lang.Object)"(arg0: any): void;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        tell(arg0: R): void;
        tell(arg0: any): void;
        toString(): string;
        executeBlocking(arg0: Internal.Runnable_): void;
        notifyAll(): void;
        getPendingTasksCount(): number;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, R>): Internal.CompletableFuture<Source>;
        name(): string;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, R>): Internal.CompletableFuture<Source>;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSameThread(): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get pendingTasksCount(): number
        get sameThread(): boolean
    }
    type BlockableEventLoop_<R extends Internal.Runnable> = BlockableEventLoop<R>;
    class ItemComponents$2 implements Internal.RecipeComponentWithParent<InputItem[]> {
        getClass(): typeof any;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem[]>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem[]>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem[];
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem[]>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem[]>;
        checkEmpty(key: Internal.RecipeKey_<InputItem[]>, value: InputItem_[]): string;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        key(name: string): Internal.RecipeKey<InputItem[]>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<InputItem[]>;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        asArray(): Internal.ArrayRecipeComponent<InputItem[]>;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem[], O>;
        notifyAll(): void;
        write(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        hashCode(): number;
        checkValueHasChanged(oldValue: InputItem_[], newValue: InputItem_[]): boolean;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem[])"(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem[], O>;
        wait(): void;
        parentComponent(): Internal.RecipeComponent<InputItem[]>;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        read(recipe: Internal.RecipeJS_, from: any): InputItem[];
        equals(arg0: any): boolean;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem[];
        get class(): typeof any
    }
    type ItemComponents$2_ = ItemComponents$2;
    class ItemComponents$1 implements Internal.RecipeComponent<InputItem> {
        getClass(): typeof any;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,dev.latvian.mods.kubejs.item.InputItem)"(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem, O>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem>;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem>;
        checkValueHasChanged(oldValue: InputItem_, newValue: InputItem_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem, O>;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem)"(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<InputItem>;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        orSelf(): Internal.RecipeComponent<InputItem>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem>>;
        asArray(): Internal.ArrayRecipeComponent<InputItem>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        static builder(): Internal.RecipeComponentBuilder;
        checkEmpty(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        write(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.InputItem,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem>>;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ItemComponents$1_ = ItemComponents$1;
    class ItemComponents$4 implements Internal.RecipeComponentWithParent<OutputItem> {
        read(recipe: Internal.RecipeJS_, from: any): OutputItem;
        getClass(): typeof any;
        parentComponent(): Internal.RecipeComponent<OutputItem>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        hashCode(): number;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        wait(): void;
        wait(arg0: number): void;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        equals(arg0: any): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
        get class(): typeof any
    }
    type ItemComponents$4_ = ItemComponents$4;
    interface RecipeFilter extends Internal.Predicate<Internal.RecipeKJS> {
        test(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.RecipeKJS>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        "test(java.lang.Object)"(arg0: any): boolean;
        or(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        and(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        abstract test(arg0: Internal.RecipeKJS_): boolean;
        of(cx: Internal.Context_, o: any): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        abstract "test(dev.latvian.mods.kubejs.core.RecipeKJS)"(arg0: Internal.RecipeKJS_): boolean;
        readonly PARSE: dev.architectury.event.Event<Internal.RecipeFilterParseEvent>;
    }
    type RecipeFilter_ = RegExp | RecipeFilter | "-" | Internal.RecipeFilter_[] | {exact?: boolean, output?: Internal.Ingredient_, id?: Special.RecipeId|RegExp, input?: Internal.Ingredient_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_[], group?: string} | "*" | {output?: Internal.ReplacementMatch_, id?: Special.RecipeId, input?: Internal.ReplacementMatch_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_, group?: string};
    class ItemComponents$3 implements Internal.RecipeComponent<OutputItem> {
        getClass(): typeof any;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,dev.latvian.mods.kubejs.item.OutputItem)"(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.OutputItem,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        static builder(): Internal.RecipeComponentBuilder;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,dev.latvian.mods.kubejs.item.OutputItem)"(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        wait(): void;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        equals(arg0: any): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
        get class(): typeof any
    }
    type ItemComponents$3_ = ItemComponents$3;
    class EnderMan extends Internal.Monster implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.EnderMan>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        isCreepy(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getRemainingPersistentAngerTime(): number;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        abstract setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        isAngry(): boolean;
        setRotation(yaw: number, pitch: number): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        setCarriedBlock(arg0: Internal.BlockState_): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        setRemainingPersistentAngerTime(arg0: number): void;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        playerDied(arg0: Internal.Player_): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        playStareSound(): void;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        hasBeenStaredAt(): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        abstract getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        startPersistentAngerTimer(): void;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        setBeingStaredAt(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        stopBeingAngry(): void;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getCarriedBlock(): Internal.BlockState;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getPersistentAngerTarget(): Internal.UUID;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get creepy(): boolean
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get remainingPersistentAngerTime(): number
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get angry(): boolean
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set carriedBlock(arg0: Internal.BlockState_)
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set remainingPersistentAngerTime(arg0: number)
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get carriedBlock(): Internal.BlockState
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get persistentAngerTarget(): Internal.UUID
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set persistentAngerTarget(arg0: Internal.UUID_)
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type EnderMan_ = EnderMan;
    interface IForgeRegistry$CreateCallback <V> {
        abstract onCreate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager): void;
    }
    type IForgeRegistry$CreateCallback_<V> = ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager)=> void) | IForgeRegistry$CreateCallback<V>;
    class RecipeIngredientRole extends Internal.Enum<Internal.RecipeIngredientRole> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(mezz.jei.api.recipe.RecipeIngredientRole)"(arg0: Internal.RecipeIngredientRole_): number;
        static values(): Internal.RecipeIngredientRole[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.RecipeIngredientRole;
        name(): string;
        compareTo(arg0: Internal.RecipeIngredientRole_): number;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.RecipeIngredientRole;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RecipeIngredientRole>>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RecipeIngredientRole
        static readonly CATALYST: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly OUTPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly RENDER_ONLY: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly INPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
    }
    type RecipeIngredientRole_ = "output" | "input" | "catalyst" | RecipeIngredientRole | "render_only";
    class SortBy extends Internal.Enum<Internal.SortBy> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SortBy>>;
        static fromName(arg0: string): Internal.SortBy;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        compareTo(arg0: Internal.SortBy_): number;
        static values(): Internal.SortBy[];
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        next(): this;
        toString(): string;
        notifyAll(): void;
        "compareTo(net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy)"(arg0: Internal.SortBy_): number;
        static valueOf(arg0: string): Internal.SortBy;
        name(): string;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.SortBy;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.SortBy
        static readonly NAME: (Internal.SortBy) & (Internal.SortBy);
        static readonly MOD: (Internal.SortBy) & (Internal.SortBy);
        static readonly TAGS: (Internal.SortBy) & (Internal.SortBy);
        static readonly COUNT: (Internal.SortBy) & (Internal.SortBy);
    }
    type SortBy_ = "mod" | "tags" | "count" | "name" | SortBy;
    class DyeItem extends Internal.Item implements Internal.SignApplicator {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        getDyeColor(): Internal.DyeColor;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        tryApplyToSign(arg0: Internal.Level_, arg1: Internal.SignBlockEntity_, arg2: boolean, arg3: Internal.Player_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        canApplyToSign(arg0: Internal.SignText_, arg1: Internal.Player_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static byColor(arg0: Internal.DyeColor_): Internal.DyeItem;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        get dyeColor(): Internal.DyeColor
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type DyeItem_ = DyeItem;
    class Matrix3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix3dc {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: Internal.Matrix2dc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        "transform(org.joml.Vector3f)"(arg0: Vector3f_): Vector3f;
        mapXZnY(arg0: Internal.Matrix3d_): this;
        reflect(arg0: Internal.Quaterniondc_): this;
        rotationX(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix3d_): this;
        mapnYXnZ(arg0: Internal.Matrix3d_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mapnZnXY(): this;
        mapZXnY(): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): number;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        lerp(arg0: Internal.Matrix3dc_, arg1: number, arg2: Internal.Matrix3d_): this;
        quadraticFormProduct(arg0: Internal.Vector3dc_): number;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        set(arg0: Internal.Matrix4fc_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        mapnZYnX(): this;
        "mul(org.joml.Matrix3dc,org.joml.Matrix3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        "get(double[])"(arg0: number[]): number[];
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapYZnX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnYnZnX(): this;
        normal(arg0: Internal.Matrix3d_): this;
        "reflection(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        set(arg0: Internal.Matrix3fc_): this;
        obliqueZ(arg0: number, arg1: number): this;
        rotationY(arg0: number): this;
        equals(arg0: Internal.Matrix3dc_, arg1: number): boolean;
        "scale(double)"(arg0: number): this;
        mapYXnZ(arg0: Internal.Matrix3d_): this;
        mapYnZnX(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapZnYX(): this;
        mapYnXnZ(arg0: Internal.Matrix3d_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.Matrix2dc_): this;
        mapZXY(arg0: Internal.Matrix3d_): this;
        mapnYnXnZ(arg0: Internal.Matrix3d_): this;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        "mul(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        setTransposed(arg0: Internal.Matrix3fc_): this;
        set(arg0: Internal.Matrix4x3dc_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix3d_): this;
        get(arg0: Internal.Matrix3d_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        transform(arg0: Vector3f_): Vector3f;
        "get(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): this;
        wait(arg0: number): void;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapZYnX(): this;
        set(arg0: Internal.FloatBuffer_): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        rotationZ(arg0: number): this;
        transformTranspose(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3dc_): this;
        quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        isFinite(): boolean;
        mapYXZ(arg0: Internal.Matrix3d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        reflect(arg0: number, arg1: number, arg2: number): this;
        setSkewSymmetric(arg0: number, arg1: number, arg2: number): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        set(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "setTransposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mapYnXZ(): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        reflection(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Matrix3dc_): this;
        mapYnZX(arg0: Internal.Matrix3d_): this;
        transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        get(arg0: number[], arg1: number): number[];
        mapnYnXZ(arg0: Internal.Matrix3d_): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        m02(): number;
        mapZnYX(arg0: Internal.Matrix3d_): this;
        quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        mapnZXnY(): this;
        mapYXnZ(): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        setTransposed(arg0: Internal.Matrix3dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        getToAddress(arg0: number): Internal.Matrix3dc;
        equals(arg0: any): boolean;
        mapZYX(arg0: Internal.Matrix3d_): this;
        mapnYnZX(arg0: Internal.Matrix3d_): this;
        scale(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix3d_): this;
        mapXZY(): this;
        "mul(org.joml.Matrix3fc,org.joml.Matrix3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        mapnZXY(): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        m10(arg0: number): this;
        mapXZnY(): this;
        lerp(arg0: Internal.Matrix3dc_, arg1: number): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        mul(arg0: Internal.Matrix3fc_): this;
        negateY(): this;
        mapnXZY(): this;
        setFromAddress(arg0: number): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: Internal.Quaternionfc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        mapYZnX(arg0: Internal.Matrix3d_): this;
        setRow(arg0: number, arg1: number, arg2: number, arg3: number): this;
        normal(): this;
        m21(arg0: number): this;
        mapnYXnZ(): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        mapnZXnY(arg0: Internal.Matrix3d_): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        get(arg0: number[], arg1: number): number[];
        "reflect(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        mapYZX(): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transpose(arg0: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYXZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(arg0: number): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        notify(): void;
        "set(int,int,double)"(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        mapnYZnX(): this;
        scaling(arg0: Internal.Vector3dc_): this;
        rotateY(arg0: number, arg1: Internal.Matrix3d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        mapnZYX(arg0: Internal.Matrix3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        mapnZYX(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        mapYZX(arg0: Internal.Matrix3d_): this;
        cofactor(arg0: Internal.Matrix3d_): this;
        mapnYZnX(arg0: Internal.Matrix3d_): this;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapXnZY(arg0: Internal.Matrix3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        mapZnXY(arg0: Internal.Matrix3d_): this;
        mapnYXZ(arg0: Internal.Matrix3d_): this;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        reflection(arg0: Internal.Quaterniondc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZnXY(): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        "get(float[])"(arg0: number[]): number[];
        negateX(arg0: Internal.Matrix3d_): this;
        cofactor(): this;
        rotateZ(arg0: number, arg1: Internal.Matrix3d_): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        mapXnZY(): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: number): number;
        "setTransposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        hashCode(): number;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        zero(): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapXZY(arg0: Internal.Matrix3d_): this;
        set(arg0: number[]): this;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        setRow(arg0: number, arg1: Internal.Vector3dc_): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapZnYnX(arg0: Internal.Matrix3d_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "mul(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        m20(): number;
        swap(arg0: Internal.Matrix3d_): this;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapXnYnZ(): this;
        negateY(arg0: Internal.Matrix3d_): this;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        rotateLocalY(arg0: number): this;
        m02(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "scaling(double)"(arg0: number): this;
        rotateY(arg0: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapnZnYnX(arg0: Internal.Matrix3d_): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXZY(arg0: Internal.Matrix3d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        getClass(): typeof any;
        mapZYX(): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        transformTranspose(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        add(arg0: Internal.Matrix3dc_): this;
        mulLocal(arg0: Internal.Matrix3dc_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        mapYnZX(): this;
        mapnXnYnZ(): this;
        mapnXnYZ(): this;
        rotateX(arg0: number, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        rotateX(arg0: number): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mulComponentWise(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        negateZ(arg0: Internal.Matrix3d_): this;
        "set(double[])"(arg0: number[]): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix3dc_): this;
        scale(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalX(arg0: number): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulLocal(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        m01(arg0: number): this;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        mapnXYnZ(): this;
        mapnXnZY(arg0: Internal.Matrix3d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        getRowColumn(arg0: number, arg1: number): number;
        rotateLocalX(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        m12(arg0: number): this;
        set(arg0: Internal.AxisAngle4f_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        mapnYZX(): this;
        mapnXnZnY(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mapXnZnY(): this;
        mapZnXnY(arg0: Internal.Matrix3d_): this;
        sub(arg0: Internal.Matrix3dc_): this;
        "scale(double,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        m00(arg0: number): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix3d_): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnXnYZ(arg0: Internal.Matrix3d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        invert(): this;
        mapnZYnX(arg0: Internal.Matrix3d_): this;
        scale(arg0: Internal.Vector3dc_): this;
        negateZ(): this;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        mapnXnZY(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        set(arg0: number[]): this;
        m22(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix3d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapnZnXnY(arg0: Internal.Matrix3d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        mapnYnZnX(arg0: Internal.Matrix3d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        identity(): this;
        m01(): number;
        mapnZnXY(arg0: Internal.Matrix3d_): this;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transform(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZXnY(arg0: Internal.Matrix3d_): this;
        mapnZnYnX(): this;
        mapXnYnZ(arg0: Internal.Matrix3d_): this;
        mapZnYnX(): this;
        get(arg0: number[]): number[];
        "reflection(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        m12(): number;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        clone(): any;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        mapnZnXnY(): this;
        mapnXZnY(): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnYnXZ(): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m00(): number;
        get(arg0: number[]): number[];
        determinant(): number;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        invert(arg0: Internal.Matrix3d_): this;
        toString(): string;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        notifyAll(): void;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnZnYX(): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m11(): number;
        "transform(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapYnXZ(arg0: Internal.Matrix3d_): this;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m22(): number;
        mapZnXnY(): this;
        "reflect(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapXnZnY(arg0: Internal.Matrix3d_): this;
        mapYXZ(): this;
        reflect(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): number;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        scaling(arg0: number, arg1: number, arg2: number): this;
        setColumn(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXnZnY(arg0: Internal.Matrix3d_): this;
        m10(): number;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnXZnY(arg0: Internal.Matrix3d_): this;
        wait(arg0: number, arg1: number): void;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXnZ(): this;
        m21(): number;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "transform(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZYnX(arg0: Internal.Matrix3d_): this;
        rotateLocalZ(arg0: number): this;
        reflection(arg0: Internal.Vector3dc_): this;
        set(arg0: Internal.Matrix2fc_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapZXY(): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        mapYnXnZ(): this;
        mapnXYnZ(arg0: Internal.Matrix3d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        set(arg0: Internal.Quaternionfc_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYnZnX(arg0: Internal.Matrix3d_): this;
        mapnXnYnZ(arg0: Internal.Matrix3d_): this;
        mapnZnYX(arg0: Internal.Matrix3d_): this;
        "reflect(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set transposed(arg0: Internal.Matrix3fc_)
        get finite(): boolean
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set "transposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set floats(arg0: Internal.ByteBuffer_)
        set transposed(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set fromAddress(arg0: number)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(float[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "transposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m12: number;
        m02: number;
        m10: number;
        m21: number;
        m00: number;
        m11: number;
        m22: number;
        m20: number;
    }
    type Matrix3d_ = Matrix3d;
    class BlockPositionSource$Type implements Internal.PositionSourceType<Internal.BlockPositionSource> {
        constructor()
        getClass(): typeof any;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.BlockPositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        toString(): string;
        notifyAll(): void;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.PositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.PositionSourceType<T>, T extends Internal.PositionSource>(arg0: string, arg1: S): S;
        hashCode(): number;
        static toNetwork<T extends Internal.PositionSource>(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        codec(): Internal.Codec<Internal.BlockPositionSource>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        wait(arg0: number): void;
        read(arg0: Internal.FriendlyByteBuf_): Internal.BlockPositionSource;
        equals(arg0: any): boolean;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        get class(): typeof any
    }
    type BlockPositionSource$Type_ = BlockPositionSource$Type;
    interface IntStream extends Internal.BaseStream<number, Internal.IntStream> {
        concat(arg0: Internal.IntStream_, arg1: Internal.IntStream_): this;
        range(arg0: number, arg1: number): this;
        abstract min(): Internal.OptionalInt;
        abstract map(arg0: Internal.IntUnaryOperator_): this;
        abstract isParallel(): boolean;
        abstract onClose(arg0: Internal.Runnable_): this;
        generate(arg0: Internal.IntSupplier_): this;
        builder(): Internal.IntStream$Builder;
        abstract sum(): number;
        abstract findFirst(): Internal.OptionalInt;
        abstract max(): Internal.OptionalInt;
        dropWhile(arg0: Internal.IntPredicate_): this;
        rangeClosed(arg0: number, arg1: number): this;
        abstract count(): number;
        abstract findAny(): Internal.OptionalInt;
        mapMulti(arg0: Internal.IntStream$IntMapMultiConsumer_): this;
        abstract reduce(arg0: Internal.IntBinaryOperator_): Internal.OptionalInt;
        of(arg0: number): this;
        abstract mapToLong(arg0: Internal.IntToLongFunction_): Internal.LongStream;
        iterate(arg0: number, arg1: Internal.IntUnaryOperator_): this;
        spliterator(): Internal.Spliterator<any>;
        abstract reduce(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        iterate(arg0: number, arg1: Internal.IntPredicate_, arg2: Internal.IntUnaryOperator_): this;
        abstract filter(arg0: Internal.IntPredicate_): this;
        abstract anyMatch(arg0: Internal.IntPredicate_): boolean;
        abstract distinct(): this;
        takeWhile(arg0: Internal.IntPredicate_): this;
        abstract peek(arg0: Internal.IntConsumer_): this;
        "of(int)"(arg0: number): this;
        abstract collect<R>(arg0: Internal.Supplier_<R>, arg1: Internal.ObjIntConsumer_<R>, arg2: Internal.BiConsumer_<R, R>): R;
        abstract mapToDouble(arg0: Internal.IntToDoubleFunction_): Internal.DoubleStream;
        abstract sorted(): this;
        abstract forEach(arg0: Internal.IntConsumer_): void;
        abstract flatMap(arg0: Internal.IntFunction_<Internal.IntStream>): this;
        abstract noneMatch(arg0: Internal.IntPredicate_): boolean;
        abstract toArray(): number[];
        abstract iterator(): Internal.PrimitiveIterator$OfInt;
        abstract unordered(): this;
        sequential(): Internal.BaseStream<any, any>;
        empty(): this;
        abstract mapToObj<U>(arg0: Internal.IntFunction_<U>): Internal.Stream<U>;
        "of(int[])"(...arg0: number[]): this;
        abstract limit(arg0: number): this;
        abstract asDoubleStream(): Internal.DoubleStream;
        of(...arg0: number[]): this;
        abstract allMatch(arg0: Internal.IntPredicate_): boolean;
        abstract asLongStream(): Internal.LongStream;
        abstract forEachOrdered(arg0: Internal.IntConsumer_): void;
        abstract boxed(): Internal.Stream<number>;
        abstract close(): void;
        abstract summaryStatistics(): Internal.IntSummaryStatistics;
        abstract average(): Internal.OptionalDouble;
        parallel(): Internal.BaseStream<any, any>;
        abstract skip(arg0: number): this;
        get parallel(): boolean
    }
    type IntStream_ = IntStream;
    interface ClimateProperties {
        abstract getDownfall(): number;
        abstract getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        abstract getTemperature(): number;
        abstract hasPrecipitation(): boolean;
        get downfall(): number
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get temperature(): number
    }
    type ClimateProperties_ = ClimateProperties;
    class Insets implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        clone(): any;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        right: number;
        top: number;
        bottom: number;
        left: number;
    }
    type Insets_ = Insets;
    interface IConfigurable {
        abstract getConfigElement<T>(...arg0: string[]): Internal.Optional<T>;
        abstract getConfigList(...arg0: string[]): Internal.List<Internal.IConfigurable>;
    }
    type IConfigurable_ = IConfigurable;
    class AbstractUniform {
        constructor()
        getClass(): typeof any;
        set(arg0: number): void;
        setMat3x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        "setSafe(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "set(int,int)"(arg0: number, arg1: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "set(float,float)"(arg0: number, arg1: number): void;
        setMat4x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: number, arg1: number): void;
        setMat4x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        "set(int,int,int)"(arg0: number, arg1: number, arg2: number): void;
        "set(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vector3f_): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec4f_): void;
        "set(org.joml.Matrix4f)"(arg0: Matrix4f_): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number): void;
        "set(float,float,float)"(arg0: number, arg1: number, arg2: number): void;
        setMat2x2(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        setMat3x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        toString(): string;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        notifyAll(): void;
        "set(org.joml.Matrix3f)"(arg0: Matrix3f_): void;
        set(arg0: number): void;
        set(arg0: number[]): void;
        setMat4x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        "set(org.joml.Vector4f)"(arg0: Vec4f_): void;
        "setSafe(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "set(float[])"(arg0: number[]): void;
        "set(org.joml.Vector3f)"(arg0: Vector3f_): void;
        hashCode(): number;
        set(arg0: Matrix4f_): void;
        "set(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat2x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: Matrix3f_): void;
        wait(): void;
        "set(float)"(arg0: number): void;
        wait(arg0: number): void;
        setMat2x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        equals(arg0: any): boolean;
        "set(int)"(arg0: number): void;
        get class(): typeof any
        set "(org.joml.Matrix4f)"(arg0: Matrix4f_)
        set "(org.joml.Matrix3f)"(arg0: Matrix3f_)
        set "(org.joml.Vector4f)"(arg0: Vec4f_)
        set "(float[])"(arg0: number[])
        set "(org.joml.Vector3f)"(arg0: Vector3f_)
        set "(float)"(arg0: number)
        set "(int)"(arg0: number)
    }
    type AbstractUniform_ = AbstractUniform;
    class WildcardIngredient extends Internal.KubeJSIngredient {
        getDisplayStacks(): Internal.ItemStackSet;
        toJson(json: Internal.JsonObject_): void;
        "test(net.minecraft.world.item.ItemStack)"(stack: Internal.ItemStack_): boolean;
        asStack(): InputItem;
        notify(): void;
        toJson(): Internal.JsonElement;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.level.ItemLike[])"(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        isWildcard(): boolean;
        /**
         * @deprecated
        */
        static "of(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        "or(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        static create_$md$7ee279$0(arg0: Internal.Stream_<any>): Internal.Ingredient;
        "and(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        negate(): Internal.Predicate<Internal.ItemStack>;
        write(buf: Internal.FriendlyByteBuf_): void;
        /**
         * @deprecated
        */
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        /**
         * @deprecated
        */
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        "toJson()"(): Internal.JsonElement;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        wait(): void;
        test(stack: Internal.ItemStack_): boolean;
        getValues(): Internal.Ingredient$Value[];
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        static create(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        /**
         * @deprecated
        */
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        isVanilla(): boolean;
        /**
         * @deprecated
        */
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        static invalidateAll(): void;
        isSimple(): boolean;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        toJson(): Internal.JsonObject;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        static of(): Internal.Ingredient;
        getItemTypes(): Internal.Set<Internal.Item>;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "test(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        static "of(java.util.stream.Stream)"(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        toString(): string;
        "toJson()"(): Internal.JsonObject;
        self(): Internal.Ingredient;
        notifyAll(): void;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        getStackingIds(): Internal.IntList;
        hashCode(): number;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        wait(arg0: number): void;
        getFirst(): Internal.ItemStack;
        equals(arg0: any): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get values(): Internal.Ingredient$Value[]
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get class(): typeof any
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get stackingIds(): Internal.IntList
        get first(): Internal.ItemStack
        static INSTANCE: (Internal.WildcardIngredient) & (Internal.WildcardIngredient);
        static readonly SERIALIZER: Internal.KubeJSIngredientSerializer<Internal.WildcardIngredient>;
    }
    type WildcardIngredient_ = WildcardIngredient;
    class CardCloner extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setSettings(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        static getSettings(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        static setPasteNetworkSettings(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        static getCopiedNodeContents(arg0: Internal.ItemStack_): Internal.ItemHandlerUtil$InventoryCardCounts;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        static setItemType(arg0: Internal.ItemStack_, arg1: string): void;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        static getNodeData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        static getCopiedCardFilter(arg0: Internal.ItemStack_): Internal.ItemStack;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static getItemType(arg0: Internal.ItemStack_): string;
        static setNodeData(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static getCopiedCardOverclocker(arg0: Internal.ItemStack_): Internal.ItemStack;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static getPasteNetworkSettings(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly PASTE_MODE_MESSAGES: Internal.MutableComponent[];
    }
    type CardCloner_ = CardCloner;
    interface BorderChangeListener {
        abstract onBorderSetDamageSafeZOne(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSizeLerping(arg0: Internal.WorldBorder_, arg1: number, arg2: number, arg3: number): void;
        abstract onBorderCenterSet(arg0: Internal.WorldBorder_, arg1: number, arg2: number): void;
        abstract onBorderSizeSet(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetDamagePerBlock(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningBlocks(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningTime(arg0: Internal.WorldBorder_, arg1: number): void;
    }
    type BorderChangeListener_ = BorderChangeListener;
    class HurtBySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        get class(): typeof any
    }
    type HurtBySensor_ = HurtBySensor;
    class Matrix4d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4dc {
        constructor()
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        constructor(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_)
        "rotateAffine(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        invertOrtho(arg0: Internal.Matrix4d_): this;
        determinant3x3(): number;
        "transpose3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4dc_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        projectedGridRange(arg0: Internal.Matrix4dc_, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        zero(): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotateAffine(arg0: Internal.Quaterniondc_): this;
        mapnXZnY(arg0: Internal.Matrix4d_): this;
        rotationX(arg0: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveNear(): number;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "reflection(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateAroundAffine(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapnXnZnY(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnYXZ(arg0: Internal.Matrix4d_): this;
        mapZYnX(): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleMulAffine(arg0: Internal.Vector3fc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4d_): this;
        "scale(double)"(arg0: number): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        "transformProject(org.joml.Vector4dc,org.joml.Vector3d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapYXnZ(arg0: Internal.Matrix4d_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(): this;
        mapYXZ(arg0: Internal.Matrix4d_): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        set(arg0: number[], arg1: number): this;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        "perspectiveRect(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number): this;
        isFinite(): boolean;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotateTowardsXY(arg0: number, arg1: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        rotationZ(arg0: number): this;
        invertAffine(arg0: Internal.Matrix4d_): this;
        perspectiveInvOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformTranspose(arg0: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        mapnZnXnY(): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXZ(arg0: Internal.Matrix4d_): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "frustum(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4x3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateAffine(arg0: Internal.Quaternionfc_): this;
        transformProject(arg0: Internal.Vector4d_): Internal.Vector4d;
        "perspectiveLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        mapYZnX(): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        m02(): number;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        "translateLocal(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mul(arg0: Matrix4f_): this;
        "orthoSymmetric(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        m13(): number;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "ortho(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "mul(org.joml.Matrix4x3fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        negateZ(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnXZY(): this;
        mapYZnX(arg0: Internal.Matrix4d_): this;
        setColumn(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        m22(arg0: number): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(arg0: Internal.Matrix4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get4x3Transposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number, arg1: Internal.Matrix4d_): this;
        mapXZY(): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        m33(arg0: number): this;
        add(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(arg0: Internal.Matrix4d_): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4d_): this;
        getToAddress(arg0: number): Internal.Matrix4dc;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapYXnZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "set4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        invertOrtho(): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3dc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get4x3Transposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        translation(arg0: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        mapYZX(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        notify(): void;
        lerp(arg0: Internal.Matrix4dc_, arg1: number): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapXnZY(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        m20(arg0: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "translateLocal(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        mapZnXY(arg0: Internal.Matrix4d_): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateX(arg0: number, arg1: Internal.Matrix4d_): this;
        m31(arg0: number): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "frustumLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "get(float[])"(arg0: number[]): number[];
        cofactor3x3(): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapZnXY(): this;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        "scale(double,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Matrix4d_): this;
        mapnYnZX(arg0: Internal.Matrix4d_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_): this;
        cofactor3x3(arg0: Internal.Matrix4d_): this;
        get(arg0: number, arg1: number): number;
        transformProject(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        hashCode(): number;
        translation(arg0: Internal.Vector3fc_): this;
        "transformProject(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m03(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateZ(arg0: number): this;
        "cofactor3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapZYX(): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        get3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        perspectiveOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXnYnZ(): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        negateX(arg0: Internal.Matrix4d_): this;
        invertPerspective(): this;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        rotateLocalX(arg0: number): this;
        scale(arg0: number): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        "mul(org.joml.Matrix3x2fc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_): this;
        mapnZnYnX(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        mapnXYnZ(): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "get4x3Transposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: number[], arg1: number): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateX(arg0: number): this;
        mapZnYnX(arg0: Internal.Matrix4d_): this;
        m30(): number;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        "set3x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        mapXnYnZ(): this;
        "reflection(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        sub4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        "orthoSymmetricLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "invertPerspectiveView(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        m01(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        shadow(arg0: Internal.Vector4d_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        rotationTowardsXY(arg0: number, arg1: number): this;
        frustumAabb(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_): this;
        "transformProject(double,double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        "set4x3(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4d_): this;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_): this;
        mapnYZX(): this;
        m12(arg0: number): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number): this;
        "rotateAffine(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        negateZ(arg0: Internal.Matrix4d_): this;
        invert(): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        "invertPerspectiveView(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        m23(arg0: number): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mulPerspectiveAffine(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        "transformProject(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "mulPerspectiveAffine(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "shadow(org.joml.Vector4dc,double,double,double,double)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        invert(arg0: Internal.Matrix4d_): this;
        isAffine(): boolean;
        get4x3Transposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "translateLocal(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapYnXnZ(): this;
        m01(): number;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix4dc_): this;
        invertFrustum(): this;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapYnZnX(arg0: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        sub(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set4x3(arg0: Internal.Matrix4x3fc_): this;
        identity(): this;
        m12(): number;
        mapnZnXY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnYnXnZ(): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        mapXnYnZ(arg0: Internal.Matrix4d_): this;
        clone(): any;
        mapZnYnX(): this;
        mapnZnYX(): this;
        "normal(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        m23(): number;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        mul0(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        get(arg0: number[]): number[];
        "mul(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        determinant(): number;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        properties(): number;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        toString(): string;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        "perspective(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZnYnX(): this;
        mapnYnXZ(): this;
        mapZYnX(arg0: Internal.Matrix4d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        orthoCrop(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        mapnXYnZ(arg0: Internal.Matrix4d_): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_): this;
        "project(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        get4x3Transposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnXnYnZ(arg0: Internal.Matrix4d_): this;
        mapnZnYX(arg0: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "project(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotateTowardsXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "frustum(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapYnZnX(): this;
        "unproject(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "mul(org.joml.Matrix3x2dc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "normalize3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        mapYnXnZ(arg0: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        rotateLocalZ(arg0: number): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapZXY(): this;
        equals(arg0: Internal.Matrix4dc_, arg1: number): boolean;
        trapezoidCrop(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "perspectiveRect(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scaleLocal(arg0: number): this;
        mapnYnZnX(): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        m21(): number;
        mulLocal(arg0: Internal.Matrix4dc_): this;
        translationRotateScaleMulAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4d_): this;
        perspectiveFar(): number;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        "getRow(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapnYnZnX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4dc_): this;
        static perspectiveOffCenterViewFromRectangle(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_, arg4: number, arg5: boolean, arg6: Internal.Matrix4d_, arg7: Internal.Matrix4d_): void;
        m32(): number;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        scaleXY(arg0: number, arg1: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: number, arg1: number, arg2: number): this;
        mapZXY(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapnZYnX(): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix4d_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        normal(arg0: Internal.Matrix4d_): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        "add4x3(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4d_): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number): this;
        "get(double[])"(arg0: number[]): number[];
        mapZXnY(): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        invertFrustum(arg0: Internal.Matrix4d_): this;
        "normal(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        set(arg0: Internal.Matrix4x3dc_): this;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        sub4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "add4x3(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapXZnY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotationY(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix4d_): this;
        mapnYXnZ(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getRow(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapXnZnY(arg0: Internal.Matrix4d_): this;
        scaling(arg0: Internal.Vector3dc_): this;
        mapZnXnY(): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        wait(arg0: number): void;
        invertPerspectiveView(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        getColumn(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        m03(): number;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mapZYX(arg0: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        mapYnZX(arg0: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "transformDirection(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "transformDirection(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Matrix4fc_): this;
        add4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        get(arg0: number[], arg1: number): number[];
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mulTranslationAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        withLookAtUp(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "transpose3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        invertPerspective(arg0: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnZnXY(): this;
        assume(arg0: number): this;
        transformAffine(arg0: Internal.Vector4d_): Internal.Vector4d;
        "transformDirection(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        equals(arg0: any): boolean;
        setFromAddress(arg0: number): this;
        scale(arg0: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        mulAffine(arg0: Internal.Matrix4dc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector3d_): Internal.Vector3d;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnZXY(): this;
        "set3x3(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        m10(arg0: number): this;
        scaleLocal(arg0: number, arg1: Internal.Matrix4d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get(arg0: number[], arg1: number): number[];
        "perspectiveLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "unprojectInv(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        mapXZnY(): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        mapnXnYZ(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        negateY(): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix4dc_): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m21(arg0: number): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        mapnYXnZ(): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        transpose3x3(): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4dc_, arg2: Internal.Matrix4d_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transpose3x3(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_): this;
        rotateZYX(arg0: Internal.Vector3d_): this;
        "orthoSymmetricLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul0(arg0: Internal.Matrix4dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m32(arg0: number): this;
        mapYZX(): this;
        transpose(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        originAffine(arg0: Internal.Vector3d_): Internal.Vector3d;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        mapnZYX(arg0: Internal.Matrix4d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        unprojectRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        set(arg0: number[]): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        "set4x3(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnZYX(): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(arg0: Internal.Matrix4d_): this;
        normal(): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Matrix4x3fc_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "frustumLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapXZY(arg0: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mulAffineR(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotateAffine(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "orthoSymmetric(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        m30(arg0: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateY(arg0: number, arg1: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        mapXnZY(): this;
        "transformDirection(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalY(arg0: number): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        "scaling(double)"(arg0: number): this;
        set(arg0: number[]): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        translationRotateScaleInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(): number;
        "project(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnZnXnY(arg0: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        "unprojectInv(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        perspectiveFov(): number;
        "project(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotateY(arg0: number): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        m31(): number;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        unprojectInvRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotate(arg0: Internal.AxisAngle4d_): this;
        getClass(): typeof any;
        rotate(arg0: Internal.Quaterniondc_): this;
        sub(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        determineProperties(): this;
        mapZnXnY(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        transformAffine(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapXnZnY(): this;
        "mul(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotateAffine(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        m02(arg0: number): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        "set(float[],int)"(arg0: number[], arg1: number): this;
        mapnXnZY(arg0: Internal.Matrix4d_): this;
        mapnXnYZ(): this;
        translate(arg0: Internal.Vector3dc_): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapYnZX(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "rotateTranslation(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m13(arg0: number): this;
        "shadow(org.joml.Vector4dc,double,double,double,double,org.joml.Matrix4d)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        "translateLocal(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        swap(arg0: Internal.Matrix4d_): this;
        negateY(arg0: Internal.Matrix4d_): this;
        "set(double[])"(arg0: number[]): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mapnXnZnY(): this;
        perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        getRowColumn(arg0: number, arg1: number): number;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        set(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_): this;
        transformTranspose(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        set(arg0: Internal.AxisAngle4f_): this;
        transformDirection(arg0: Vector3f_): Vector3f;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZYnX(arg0: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        "rotateTranslation(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        add(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        transformPosition(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        m00(arg0: number): this;
        mapnXZY(arg0: Internal.Matrix4d_): this;
        get4x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        "mul(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "get4x3Transposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix4dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        withLookAtUp(arg0: Internal.Vector3dc_): this;
        "get(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4d_): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "translate(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        add4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        "orthoLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        invertPerspectiveView(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapnXnZY(): this;
        add4x3(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mulComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        invertAffine(): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number[]): number[];
        toString(arg0: Internal.NumberFormat_): string;
        setFromIntrinsic(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        "transformProject(double,double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "normalize3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "mul(org.joml.Matrix4f)"(arg0: Matrix4f_): this;
        "orthoLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        frustumRayDir(arg0: number, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m00(): number;
        mapYnXZ(): this;
        "unproject(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        affineSpan(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        "transformProject(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        "translate(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapYnXZ(arg0: Internal.Matrix4d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        notifyAll(): void;
        mapnXZnY(): this;
        add4x3(arg0: Internal.Matrix4fc_): this;
        setTransposed(arg0: Internal.Matrix4dc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        m11(): number;
        determinantAffine(): number;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number): this;
        m22(): number;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        set(arg0: Internal.Quaternionfc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "cofactor3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "mul(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        "perspective(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "ortho(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "transformDirection(org.joml.Vector3f)"(arg0: Vector3f_): Vector3f;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        m33(): number;
        mapYXZ(): this;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        scaling(arg0: number, arg1: number, arg2: number): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        wait(arg0: number, arg1: number): void;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transformProject(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        frustumCorner(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "transformDirection(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mulAffineR(arg0: Internal.Matrix4dc_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        "mul(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        set3x3(arg0: Internal.Matrix3dc_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "set(double[],int)"(arg0: number[], arg1: number): this;
        mapZXnY(arg0: Internal.Matrix4d_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        get finite(): boolean
        set floats(arg0: Internal.ByteBuffer_)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        get affine(): boolean
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_)
        set translation(arg0: Internal.Vector3dc_)
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set fromAddress(arg0: number)
        set "(float[])"(arg0: number[])
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set transposed(arg0: Internal.Matrix4dc_)
    }
    type Matrix4d_ = Matrix4d;
    interface IAEMultiBlock <Cluster extends Internal.IAECluster> {
        abstract isValid(): boolean;
        abstract disconnect(arg0: boolean): void;
        abstract getCluster(): Cluster;
        get valid(): boolean
        get cluster(): Cluster
    }
    type IAEMultiBlock_<Cluster extends Internal.IAECluster> = IAEMultiBlock<Cluster>;
    interface LongFunction <R> {
        abstract apply(arg0: number): R;
        (arg0: number): R;
    }
    type LongFunction_<R> = ((arg0: number)=> R) | LongFunction<R>;
    interface Saddleable {
        getSaddleSoundEvent(): Internal.SoundEvent;
        abstract equipSaddle(arg0: Internal.SoundSource_): void;
        abstract isSaddled(): boolean;
        abstract isSaddleable(): boolean;
        get saddleSoundEvent(): Internal.SoundEvent
        get saddled(): boolean
        get saddleable(): boolean
    }
    type Saddleable_ = Saddleable;
    class ProtectedBlockProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.TagKey_<Internal.Block>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        processEntity(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.StructureTemplate$StructureEntityInfo_, arg3: Internal.StructureTemplate$StructureEntityInfo_, arg4: Internal.StructurePlaceSettings_, arg5: Internal.StructureTemplate_): Internal.StructureTemplate$StructureEntityInfo;
        wait(): void;
        process(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_, arg6: Internal.StructureTemplate_): Internal.StructureTemplate$StructureBlockInfo;
        wait(arg0: number): void;
        processBlock(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_): Internal.StructureTemplate$StructureBlockInfo;
        finalizeProcessing(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructurePlaceSettings_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ProtectedBlockProcessor>;
        readonly cannotReplace: Internal.TagKey<Internal.Block>;
    }
    type ProtectedBlockProcessor_ = ProtectedBlockProcessor;
    class RecipeTypeFunction extends Internal.BaseFunction implements Internal.WrappedJS {
        constructor(event: Internal.RecipesEventJS_, schemaType: Internal.RecipeSchemaType_)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        setImmunePrototypeProperty(value: any): void;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract get(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        abstract setParentScope(arg0: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        abstract getIds(arg0: Internal.Context_): any[];
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        associateValue(key: any, value: any): any;
        abstract getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        getLength(): number;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        createRecipe(args: any[]): Internal.RecipeJS;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        abstract "delete(dev.latvian.mods.rhino.Context,int)"(arg0: Internal.Context_, arg1: number): void;
        call(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Scriptable_, arg3: any[]): any;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        abstract put(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        "initPrototypeMethod(java.lang.Object,int,java.lang.String,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract has(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "initPrototypeValue(int,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        getArity(): number;
        toString(): string;
        notifyAll(): void;
        "initPrototypeValue(int,java.lang.String,java.lang.Object,int)"(id: number, name: string, value: any, attributes: number): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        size(): number;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract "delete"(arg0: Internal.Context_, arg1: number): void;
        "initPrototypeMethod(java.lang.Object,int,dev.latvian.mods.rhino.Symbol,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        abstract getPrototype(arg0: Internal.Context_): Internal.Scriptable;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        abstract "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        abstract "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, key: Internal.Symbol_): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        isExtensible(): boolean;
        wait(): void;
        abstract setPrototype(arg0: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        activatePrototypeMap(maxPrototypeId: number): void;
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, key: any, desc: Internal.ScriptableObject_): void;
        getFunctionName(): string;
        abstract getDefaultValue(arg0: Internal.Context_, arg1: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        getMod(): string;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        equals(obj: any): boolean;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        set immunePrototypeProperty(value: any)
        set parentScope(arg0: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get length(): number
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get arity(): number
        get className(): string
        get extensible(): boolean
        set prototype(arg0: Internal.Scriptable_)
        get empty(): boolean
        get functionName(): string
        get mod(): string
        get externalArrayLength(): any
        readonly schemaType: Internal.RecipeSchemaType;
        static readonly SKIP_ERROR: (Internal.Pattern) & (Internal.Pattern);
        readonly id: ResourceLocation;
        readonly idString: string;
        readonly event: Internal.RecipesEventJS;
    }
    type RecipeTypeFunction_ = RecipeTypeFunction;
    class LayerDefinition {
        constructor(arg0: Internal.MeshDefinition_, arg1: any_)
        getClass(): typeof any;
        hashCode(): number;
        bakeRoot(): Internal.ModelPart;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static create(arg0: Internal.MeshDefinition_, arg1: number, arg2: number): Internal.LayerDefinition;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type LayerDefinition_ = LayerDefinition;
    class WeightedStateProvider extends Internal.BlockStateProvider {
        constructor(arg0: any_<Internal.BlockState>)
        constructor(arg0: any_<Internal.BlockState>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static simple(arg0: Internal.Block_): Internal.SimpleStateProvider;
        hashCode(): number;
        static simple(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(): void;
        static "simple(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(arg0: number): void;
        getState(arg0: Internal.RandomSource_, arg1: BlockPos_): Internal.BlockState;
        equals(arg0: any): boolean;
        static "simple(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.SimpleStateProvider;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.WeightedStateProvider>;
    }
    type WeightedStateProvider_ = WeightedStateProvider;
    class StructureBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getSeed(): number;
        requestModelDataUpdate(): void;
        hasStructureName(): boolean;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getStructureName(): string;
        isStructureLoadable(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        getMode(): Internal.StructureMode;
        getMetaData(): string;
        saveWithoutMetadata(): Internal.CompoundTag;
        getStructureSize(): Vec3i;
        setRemoved(): void;
        setSeed(arg0: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        saveStructure(arg0: boolean): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        setStructurePos(arg0: BlockPos_): void;
        setMode(arg0: Internal.StructureMode_): void;
        clearRemoved(): void;
        setShowBoundingBox(arg0: boolean): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        sdl$getDynamicLightX(): number;
        getStructurePath(): string;
        setIgnoreEntities(arg0: boolean): void;
        getPersistentData(): Internal.CompoundTag;
        setMetaData(arg0: string): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        setStructureSize(arg0: Vec3i_): void;
        sdl$dynamicLightTick(): void;
        wait(arg0: number): void;
        reviveCaps(): void;
        getStructurePos(): BlockPos;
        getShowBoundingBox(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean, arg2: Internal.StructureTemplate_): boolean;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        isPowered(): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        usedBy(arg0: Internal.Player_): boolean;
        "setStructureName(java.lang.String)"(arg0: string): void;
        getRotation(): Internal.Rotation;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        setStructureName(arg0: string): void;
        setPowered(arg0: boolean): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setRotation(arg0: Internal.Rotation_): void;
        createdBy(arg0: Internal.LivingEntity_): void;
        static createRandom(arg0: number): Internal.RandomSource;
        setIntegrity(arg0: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        loadStructure(arg0: Internal.ServerLevel_): boolean;
        saveWithId(): Internal.CompoundTag;
        detectSize(): boolean;
        "setStructureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getMirror(): Internal.Mirror;
        onlyOpCanSetNbt(): boolean;
        getIntegrity(): number;
        setShowAir(arg0: boolean): void;
        serializeNBT(): Internal.Tag;
        saveStructure(): boolean;
        unloadStructure(): void;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        isIgnoreEntities(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        getShowAir(): boolean;
        equals(arg0: any): boolean;
        setStructureName(arg0: ResourceLocation_): void;
        setMirror(arg0: Internal.Mirror_): void;
        get seed(): number
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get structureName(): string
        get structureLoadable(): boolean
        get mode(): Internal.StructureMode
        get metaData(): string
        get structureSize(): Vec3i
        set seed(arg0: number)
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        set structurePos(arg0: BlockPos_)
        set mode(arg0: Internal.StructureMode_)
        set showBoundingBox(arg0: boolean)
        get updatePacket(): Internal.Packet<any>
        get structurePath(): string
        set ignoreEntities(arg0: boolean)
        get persistentData(): Internal.CompoundTag
        set metaData(arg0: string)
        set structureSize(arg0: Vec3i_)
        get structurePos(): BlockPos
        get showBoundingBox(): boolean
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get powered(): boolean
        get blockState(): Internal.BlockState
        set "structureName(java.lang.String)"(arg0: string)
        get rotation(): Internal.Rotation
        set structureName(arg0: string)
        set powered(arg0: boolean)
        set rotation(arg0: Internal.Rotation_)
        set integrity(arg0: number)
        set "structureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_)
        get level(): Internal.Level
        get mirror(): Internal.Mirror
        get integrity(): number
        set showAir(arg0: boolean)
        get ignoreEntities(): boolean
        get modelData(): Internal.ModelData
        get showAir(): boolean
        set structureName(arg0: ResourceLocation_)
        set mirror(arg0: Internal.Mirror_)
        static readonly MAX_OFFSET_PER_AXIS: (48) & (number);
        static readonly MAX_SIZE_PER_AXIS: (48) & (number);
        static readonly AUTHOR_TAG: ("author") & (string);
    }
    type StructureBlockEntity_ = StructureBlockEntity;
    class ObjectCompletedEvent$ChapterEvent extends Internal.ObjectCompletedEvent<Internal.Chapter> {
        constructor(d: Internal.QuestProgressEventData_<Internal.Chapter>)
        getObject(): Internal.Chapter;
        getClass(): typeof any;
        getTime(): Internal.Date;
        toString(): string;
        getNotifiedPlayers(): Internal.List<Internal.ServerPlayer>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChapter(): Internal.Chapter;
        getOnlineMembers(): Internal.List<Internal.ServerPlayer>;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getData(): Internal.TeamData;
        equals(arg0: any): boolean;
        get object(): Internal.Chapter
        get class(): typeof any
        get time(): Internal.Date
        get notifiedPlayers(): Internal.List<Internal.ServerPlayer>
        get chapter(): Internal.Chapter
        get onlineMembers(): Internal.List<Internal.ServerPlayer>
        get cancelable(): boolean
        get data(): Internal.TeamData
    }
    type ObjectCompletedEvent$ChapterEvent_ = ObjectCompletedEvent$ChapterEvent;
    class CustomFilterItemEventJS extends Internal.EventJS {
        constructor(event: any_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        addStacks(stacks: Internal.Collection_<Internal.ItemStack>): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        addStack(stack: Internal.ItemStack_): void;
        get class(): typeof any
    }
    type CustomFilterItemEventJS_ = CustomFilterItemEventJS;
    interface Float2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.DoubleToIntFunction {
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Float2IntFunction;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2CharFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        abstract "get(float)"(arg0: number): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2CharFunction;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        "containsKey(float)"(arg0: number): boolean;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2CharFunction<T>;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2CharFunction;
        "remove(float)"(arg0: number): string;
        getOrDefault(arg0: number, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Float2LongFunction;
        abstract get(arg0: number): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Float2DoubleFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): string;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        "getOrDefault(float,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        defaultReturnValue(arg0: string): void;
        containsKey(arg0: number): boolean;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2CharFunction;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Float2ByteFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2CharFunction;
        apply(arg0: number): string;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        size(): number;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Float2FloatFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Float,java.lang.Character)"(arg0: number, arg1: string): string;
        "put(float,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
    }
    type Float2CharFunction_ = Float2CharFunction;
}
declare namespace com.gregtechceu.gtceu.api.block {
    abstract class PipeBlock <PipeType extends Internal.Enum<PipeType> & Internal.IPipeType<NodeDataType>, NodeDataType, WorldPipeNetType extends Internal.LevelPipeNet<NodeDataType, Internal.PipeNet<NodeDataType>>> extends Internal.Block implements Internal.SimpleWaterloggedBlock, Internal.IBlockRendererProvider, Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: PipeType)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        abstract getBlockEntityType(): Internal.BlockEntityType<Internal.PipeBlockEntity<PipeType, NodeDataType>>;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        abstract getFallbackType(): NodeDataType;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.PipeBlockEntity<PipeType, NodeDataType>;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        createProperties(arg0: Internal.BlockState_, arg1: Internal.ItemStack_): NodeDataType;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getModelState(world: Internal.BlockAndTintGetter_, pos: BlockPos_, state: Internal.BlockState_): Internal.ModelState;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        canConnect(arg0: Internal.IPipeNode_<PipeType, NodeDataType>, arg1: Internal.Direction_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        abstract createRawData(arg0: Internal.BlockState_, arg1: Internal.ItemStack_): NodeDataType;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        updateActiveNodeStatus(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.IPipeNode_<PipeType, NodeDataType>): void;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getPipeTile(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.IPipeNode<PipeType, NodeDataType>;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        abstract createProperties(arg0: Internal.IPipeNode_<PipeType, NodeDataType>): NodeDataType;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        abstract getWorldPipeNet(arg0: Internal.ServerLevel_): WorldPipeNetType;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightMap(world: Internal.BlockAndTintGetter_, state: Internal.BlockState_, pos: BlockPos_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getPipeTuneTool(): GTToolType;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        "newBlockEntity(net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState)"(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.PipeBlockEntity<PipeType, NodeDataType>;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        abstract canPipesConnect(arg0: Internal.IPipeNode_<PipeType, NodeDataType>, arg1: Internal.Direction_, arg2: Internal.IPipeNode_<PipeType, NodeDataType>): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRenderer(arg0: Internal.BlockState_): Internal.IRenderer;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        abstract canPipeConnectToBlock(arg0: Internal.IPipeNode_<PipeType, NodeDataType>, arg1: Internal.Direction_, arg2: Internal.BlockEntity_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get blockEntityType(): Internal.BlockEntityType<Internal.PipeBlockEntity<PipeType, NodeDataType>>
        get fallbackType(): NodeDataType
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        get pipeTuneTool(): GTToolType
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        readonly pipeType: PipeType;
    }
    type PipeBlock_<PipeType extends Internal.Enum<PipeType> & Internal.IPipeType<NodeDataType>, NodeDataType, WorldPipeNetType extends Internal.LevelPipeNet<NodeDataType, Internal.PipeNet<NodeDataType>>> = PipeBlock<PipeType, NodeDataType, WorldPipeNetType>;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntUnaryOperator extends Internal.IntUnaryOperator, Internal.UnaryOperator<number> {
        /**
         * @deprecated
        */
        "apply(java.lang.Integer)"(arg0: number): number;
        abstract apply(arg0: number): number;
        /**
         * @deprecated
        */
        apply(arg0: any): any;
        /**
         * @deprecated
        */
        "apply(java.lang.Object)"(arg0: any): any;
        "andThen(java.util.function.Function)"<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        /**
         * @deprecated
        */
        apply(arg0: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        compose<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        "compose(java.util.function.Function)"<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        identity(): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        abstract "apply(int)"(arg0: number): number;
        negation(): this;
    }
    type IntUnaryOperator_ = IntUnaryOperator;
}
declare namespace de.maxhenkel.pipez.blocks {
    class FluidPipeBlock extends de.maxhenkel.pipez.blocks.PipeBlock {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setExtracting(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: boolean): void;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): Internal.VoxelShape;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        isDisconnected(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getProperty(arg0: Internal.Direction_): Internal.BooleanProperty;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getBlockReachDistance(arg0: Internal.Player_): number;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        "getShape(net.minecraft.world.level.BlockGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,boolean)"(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): Internal.VoxelShape;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isExtracting(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConnected(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        isAbleToConnect(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getTileEntity(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.PipeTileEntity;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        onWrenchClicked(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_, arg6: Internal.Direction_): Internal.InteractionResult;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getSelection(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): de.maxhenkel.pipez.corelib.helpers.Pair<Internal.Direction, Internal.VoxelShape>;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getSelectionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): Internal.VoxelShape;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        toItem(): Internal.Item;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        "getShape(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.BlockGetter,net.minecraft.core.BlockPos,net.minecraft.world.phys.shapes.CollisionContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setHasData(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        isPipe(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        onPipeSideForceActivated(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_, arg6: Internal.Direction_): Internal.InteractionResult;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        onPipeSideActivated(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_, arg6: Internal.Direction_): Internal.InteractionResult;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        setDisconnected(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: boolean): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canConnectTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type FluidPipeBlock_ = FluidPipeBlock;
}
