/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class BlockGoldFurnace extends Internal.BlockIronFurnaceBase {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
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
        getComparatorInputOverride(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
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
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_, arg1: Internal.List_<number>): number;
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
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
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
        static readonly GOLD_FURNACE: ("gold_furnace") & (string);
    }
    type BlockGoldFurnace_ = BlockGoldFurnace;
    class StringSplitter implements Internal.StringSplitterAccessor {
        constructor(arg0: Internal.StringSplitter$WidthProvider_)
        plainIndexAtWidth(arg0: string, arg1: number, arg2: Internal.Style_): number;
        getClass(): typeof any;
        stringWidth(arg0: Internal.FormattedText_): number;
        stringWidth(arg0: string): number;
        "stringWidth(net.minecraft.network.chat.FormattedText)"(arg0: Internal.FormattedText_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "componentStyleAtWidth(net.minecraft.util.FormattedCharSequence,int)"(arg0: Internal.FormattedCharSequence_, arg1: number): Internal.Style;
        headByWidth(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.FormattedText;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.FormattedText_): Internal.List<Internal.FormattedText>;
        componentStyleAtWidth(arg0: Internal.FormattedCharSequence_, arg1: number): Internal.Style;
        stringWidth(arg0: Internal.FormattedCharSequence_): number;
        "stringWidth(net.minecraft.util.FormattedCharSequence)"(arg0: Internal.FormattedCharSequence_): number;
        findLineBreak(arg0: string, arg1: number, arg2: Internal.Style_): number;
        "splitLines(net.minecraft.network.chat.FormattedText,int,net.minecraft.network.chat.Style)"(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        plainTailByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        toString(): string;
        plainHeadByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        notifyAll(): void;
        "stringWidth(java.lang.String)"(arg0: string): number;
        "splitLines(net.minecraft.network.chat.FormattedText,int,net.minecraft.network.chat.Style,net.minecraft.network.chat.FormattedText)"(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.FormattedText_): Internal.List<Internal.FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        "splitLines(net.minecraft.network.chat.FormattedText,int,net.minecraft.network.chat.Style,java.util.function.BiConsumer)"(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.BiConsumer_<Internal.FormattedText, boolean>): void;
        splitLines(arg0: string, arg1: number, arg2: Internal.Style_, arg3: boolean, arg4: Internal.StringSplitter$LinePosConsumer_): void;
        componentStyleAtWidth(arg0: Internal.FormattedText_, arg1: number): Internal.Style;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: Internal.Style_): string;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getWidthProvider(): Internal.StringSplitter$WidthProvider;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: Internal.Style_): number;
        "componentStyleAtWidth(net.minecraft.network.chat.FormattedText,int)"(arg0: Internal.FormattedText_, arg1: number): Internal.Style;
        equals(arg0: any): boolean;
        splitLines(arg0: Internal.FormattedText_, arg1: number, arg2: Internal.Style_, arg3: Internal.BiConsumer_<Internal.FormattedText, boolean>): void;
        "splitLines(java.lang.String,int,net.minecraft.network.chat.Style)"(arg0: string, arg1: number, arg2: Internal.Style_): Internal.List<Internal.FormattedText>;
        get class(): typeof any
        get widthProvider(): Internal.StringSplitter$WidthProvider
    }
    type StringSplitter_ = StringSplitter;
    interface IScreenWrapper extends Internal.IOpenableScreen {
        closeGui(): void;
        openGui(): void;
        closeContextMenu(): void;
        closeGui(openPrevScreen: boolean): void;
        run(): void;
        abstract getGui(): Internal.BaseScreen;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        openGuiLater(): void;
        get gui(): Internal.BaseScreen
        (): Internal.BaseScreen_;
    }
    type IScreenWrapper_ = (()=> Internal.BaseScreen_) | IScreenWrapper;
    interface CustomJavaToJsWrapperProvider <T> {
        abstract create(arg0: T): Internal.CustomJavaToJsWrapper;
        (arg0: T): Internal.CustomJavaToJsWrapper_;
        readonly NONE: Internal.CustomJavaToJsWrapperProvider<any>;
    }
    type CustomJavaToJsWrapperProvider_<T> = ((arg0: T)=> Internal.CustomJavaToJsWrapper_) | CustomJavaToJsWrapperProvider<T>;
    interface WithPersistentData extends Internal.MessageSenderKJS {
        getDisplayName(): net.minecraft.network.chat.Component;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getPersistentData(): Internal.CompoundTag;
        getName(): net.minecraft.network.chat.Component;
        runCommandSilent(command: string): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        runCommand(command: string): number;
        get displayName(): net.minecraft.network.chat.Component
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get persistentData(): Internal.CompoundTag
        get name(): net.minecraft.network.chat.Component
    }
    type WithPersistentData_ = WithPersistentData;
    class EndRodBlock extends Internal.RodBlock {
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
    type EndRodBlock_ = EndRodBlock;
    class ClientboundOpenBookPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.InteractionHand_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getHand(): Internal.InteractionHand;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get hand(): Internal.InteractionHand
    }
    type ClientboundOpenBookPacket_ = ClientboundOpenBookPacket;
    class ClassWrapper <T> extends Internal.Record implements Internal.CustomJavaToJsWrapper {
        constructor(wrappedClass: T)
        getClass(): typeof any;
        hashCode(): number;
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        wrappedClass(): T;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ClassWrapper_<T> = ClassWrapper<T>;
    interface PropertyDispatch$QuadFunction <P1, P2, P3, P4, R> {
        abstract apply(arg0: P1, arg1: P2, arg2: P3, arg3: P4): R;
        (arg0: P1, arg1: P2, arg2: P3, arg3: P4): R;
    }
    type PropertyDispatch$QuadFunction_<P1, P2, P3, P4, R> = ((arg0: P1, arg1: P2, arg2: P3, arg3: P4)=> R) | PropertyDispatch$QuadFunction<P1, P2, P3, P4, R>;
    interface Object2IntFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        put(arg0: K, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        defaultReturnValue(): number;
        removeInt(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Object2IntFunction_<K> = ((arg0: any)=> number) | Object2IntFunction<K>;
    interface BiomeFTBC {
        abstract setFTBCBiomeColorIndex(arg0: number): void;
        abstract getFTBCBiomeColorIndex(): number;
        set FTBCBiomeColorIndex(arg0: number)
        get FTBCBiomeColorIndex(): number
    }
    type BiomeFTBC_ = BiomeFTBC;
    class BlockModel$GuiLight extends Internal.Enum<Internal.BlockModel$GuiLight> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BlockModel$GuiLight>>;
        "compareTo(net.minecraft.client.renderer.block.model.BlockModel$GuiLight)"(arg0: Internal.BlockModel$GuiLight_): number;
        toString(): string;
        lightLikeBlock(): boolean;
        getSerializedName(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.BlockModel$GuiLight;
        notify(): void;
        static values(): Internal.BlockModel$GuiLight[];
        compareTo(arg0: Internal.BlockModel$GuiLight_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static getByName(arg0: string): Internal.BlockModel$GuiLight;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.BlockModel$GuiLight;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.BlockModel$GuiLight
        static readonly SIDE: (Internal.BlockModel$GuiLight) & (Internal.BlockModel$GuiLight);
        static readonly FRONT: (Internal.BlockModel$GuiLight) & (Internal.BlockModel$GuiLight);
    }
    type BlockModel$GuiLight_ = "side" | BlockModel$GuiLight | "front";
    class CableBusRenderState {
        constructor()
        getClass(): typeof any;
        setCableColor(arg0: Internal.AEColor_): void;
        setCoreType(arg0: Internal.CableCoreType_): void;
        getCableBusAdjacent(): Internal.EnumSet<Internal.Direction>;
        setChannelsOnSide(arg0: Internal.EnumMap_<Internal.Direction, number>): void;
        getBoundingBoxes(): Internal.List<Internal.AABB>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        getCableType(): Internal.AECableType;
        getAttachmentConnections(): Internal.EnumMap<Internal.Direction, number>;
        setConnectionTypes(arg0: Internal.EnumMap_<Internal.Direction, Internal.AECableType>): void;
        setCableBusAdjacent(arg0: Internal.EnumSet_<Internal.Direction>): void;
        getFacades(): Internal.EnumMap<Internal.Direction, Internal.FacadeRenderState>;
        getCableColor(): Internal.AEColor;
        toString(): string;
        setPos(arg0: BlockPos_): void;
        notifyAll(): void;
        getCoreType(): Internal.CableCoreType;
        getAttachments(): Internal.EnumMap<Internal.Direction, Internal.IPartModel>;
        hashCode(): number;
        getChannelsOnSide(): Internal.EnumMap<Internal.Direction, number>;
        wait(): void;
        setCableType(arg0: Internal.AECableType_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getConnectionTypes(): Internal.EnumMap<Internal.Direction, Internal.AECableType>;
        getPartModelData(): Internal.EnumMap<Internal.Direction, Internal.ModelData>;
        get class(): typeof any
        set cableColor(arg0: Internal.AEColor_)
        set coreType(arg0: Internal.CableCoreType_)
        get cableBusAdjacent(): Internal.EnumSet<Internal.Direction>
        set channelsOnSide(arg0: Internal.EnumMap_<Internal.Direction, number>)
        get boundingBoxes(): Internal.List<Internal.AABB>
        get pos(): BlockPos
        get cableType(): Internal.AECableType
        get attachmentConnections(): Internal.EnumMap<Internal.Direction, number>
        set connectionTypes(arg0: Internal.EnumMap_<Internal.Direction, Internal.AECableType>)
        set cableBusAdjacent(arg0: Internal.EnumSet_<Internal.Direction>)
        get facades(): Internal.EnumMap<Internal.Direction, Internal.FacadeRenderState>
        get cableColor(): Internal.AEColor
        set pos(arg0: BlockPos_)
        get coreType(): Internal.CableCoreType
        get attachments(): Internal.EnumMap<Internal.Direction, Internal.IPartModel>
        get channelsOnSide(): Internal.EnumMap<Internal.Direction, number>
        set cableType(arg0: Internal.AECableType_)
        get connectionTypes(): Internal.EnumMap<Internal.Direction, Internal.AECableType>
        get partModelData(): Internal.EnumMap<Internal.Direction, Internal.ModelData>
        static readonly PROPERTY: Internal.ModelProperty<Internal.CableBusRenderState>;
    }
    type CableBusRenderState_ = CableBusRenderState;
    abstract class ActiveTile <T extends Internal.ActiveTile<T>> extends Internal.BasicTile<T> implements Internal.ITickableBlockEntity<T>, Internal.IContainerAddonProvider, Internal.MenuProvider, Internal.IScreenAddonProvider, Internal.IHasAssetProvider, Internal.IFacingComponentHarness, Internal.IButtonHandler {
        constructor(arg0: Internal.BasicTileBlock_<T>, arg1: Internal.BlockEntityType_<any>, arg2: BlockPos_, arg3: Internal.BlockState_)
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_): void;
        addFilter(arg0: Internal.IFilter_<any>): void;
        getFacingDirection(): Internal.Direction;
        requestModelDataUpdate(): void;
        onNeighborChanged(arg0: Internal.Block_, arg1: BlockPos_): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        addTank(arg0: Internal.FluidTankComponent_<T>): void;
        canInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        markComponentForUpdate(arg0: boolean): void;
        handleButtonMessage(arg0: number, arg1: Internal.Player_, arg2: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,com.hrznstudio.titanium.block.tile.ActiveTile)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        setChanged(): void;
        initClient(): void;
        getMultiButtonComponent(): Internal.MultiButtonComponent;
        updateNeigh(): void;
        addBundle(arg0: Internal.IComponentBundle_): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.Packet<any>;
        serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        getTitleColor(): number;
        abstract getSelf(): T;
        setRemoved(): void;
        onActivated(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Direction_, arg3: number, arg4: number, arg5: number): Internal.InteractionResult;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        addGuiAddonFactory(arg0: Internal.IFactory_<Internal.IScreenAddon>): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        addContainerAddonFactory(arg0: Internal.IFactory_<Internal.IContainerAddon>): void;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        getCapability<U>(arg0: Internal.Capability_<U>, arg1: Internal.Direction_): Internal.LazyOptional<U>;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        clearRemoved(): void;
        isServer(): boolean;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getComponentWorld(): Internal.Level;
        sdl$getDynamicLightX(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        getFacingHandlerWorkAmount(): number;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        getBasicTileBlock(): Internal.BasicTileBlock<T>;
        sdl$dynamicLightTick(): void;
        getMultiTankComponent(): Internal.MultiTankComponent<T>;
        getHandlerFromName(arg0: string): Internal.IFacingComponent;
        getAssetProvider(): Internal.IAssetProvider;
        syncObject(arg0: any): void;
        getMultiInventoryComponent(): Internal.MultiInventoryComponent<T>;
        wait(arg0: number): void;
        reviveCaps(): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        markComponentDirty(): void;
        openGui(arg0: Internal.Player_): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        handleSyncObject(arg0: Internal.CompoundTag_): void;
        onLoad(): void;
        getContainerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        isClient(): boolean;
        getBlockState(): Internal.BlockState;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        getTitleXPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getScreenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>;
        saveWithId(): Internal.CompoundTag;
        addButton(arg0: Internal.ButtonComponent_): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getWorldPosCallable(): Internal.ContainerLevelAccess;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        addInventory(arg0: Internal.InventoryComponent_<T>): void;
        sdl$getDynamicLightZ(): number;
        clientTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        addProgressBar(arg0: Internal.ProgressBarComponent_<T>): void;
        getTitleYPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        getMultiFilterComponent(): Internal.MultiFilterComponent;
        getFacingHandlerWorkTime(): number;
        equals(arg0: any): boolean;
        "serverTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.block.entity.BlockEntity)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockEntity_): void;
        get facingDirection(): Internal.Direction
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get multiButtonComponent(): Internal.MultiButtonComponent
        get "updatePacket()"(): Internal.Packet<any>
        get titleColor(): number
        get self(): T
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get server(): boolean
        get updatePacket(): Internal.Packet<any>
        get componentWorld(): Internal.Level
        get persistentData(): Internal.CompoundTag
        get facingHandlerWorkAmount(): number
        get basicTileBlock(): Internal.BasicTileBlock<T>
        get multiTankComponent(): Internal.MultiTankComponent<T>
        get assetProvider(): Internal.IAssetProvider
        get multiInventoryComponent(): Internal.MultiInventoryComponent<T>
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get containerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>
        get client(): boolean
        get blockState(): Internal.BlockState
        get screenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>
        get level(): Internal.Level
        get worldPosCallable(): Internal.ContainerLevelAccess
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        get multiFilterComponent(): Internal.MultiFilterComponent
        get facingHandlerWorkTime(): number
    }
    type ActiveTile_<T extends Internal.ActiveTile<T>> = ActiveTile<T>;
    class ObjectCompletedEvent <T extends Internal.QuestObject> extends Internal.ObjectProgressEvent<T> {
        getClass(): typeof any;
        getTime(): Internal.Date;
        toString(): string;
        getNotifiedPlayers(): Internal.List<Internal.ServerPlayer>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getOnlineMembers(): Internal.List<Internal.ServerPlayer>;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getData(): Internal.TeamData;
        getObject(): T;
        equals(arg0: any): boolean;
        get class(): typeof any
        get time(): Internal.Date
        get notifiedPlayers(): Internal.List<Internal.ServerPlayer>
        get onlineMembers(): Internal.List<Internal.ServerPlayer>
        get cancelable(): boolean
        get data(): Internal.TeamData
        get object(): T
        static readonly GENERIC: dev.architectury.event.Event<Internal.EventActor<Internal.ObjectCompletedEvent<any>>>;
        static readonly TASK: dev.architectury.event.Event<Internal.EventActor<Internal.ObjectCompletedEvent$TaskEvent>>;
        static readonly QUEST: dev.architectury.event.Event<Internal.EventActor<Internal.ObjectCompletedEvent$QuestEvent>>;
        static readonly FILE: dev.architectury.event.Event<Internal.EventActor<Internal.ObjectCompletedEvent$FileEvent>>;
        static readonly CHAPTER: dev.architectury.event.Event<Internal.EventActor<Internal.ObjectCompletedEvent$ChapterEvent>>;
    }
    type ObjectCompletedEvent_<T extends Internal.QuestObject> = ObjectCompletedEvent<T>;
    interface MenuAccess <T extends Internal.AbstractContainerMenu> {
        abstract getMenu(): T;
        get menu(): T
        (): T;
    }
    type MenuAccess_<T extends Internal.AbstractContainerMenu> = MenuAccess<T> | (()=> T);
    class ExistingFileHelper {
        constructor(arg0: Internal.Collection_<Internal.Path>, arg1: Internal.Set_<string>, arg2: boolean, arg3: string, arg4: Internal.File_)
        getResource(arg0: ResourceLocation_, arg1: Internal.PackType_, arg2: string, arg3: string): Internal.Resource;
        getClass(): typeof any;
        trackGenerated(arg0: ResourceLocation_, arg1: Internal.ExistingFileHelper$IResourceType_): void;
        toString(): string;
        "exists(net.minecraft.resources.ResourceLocation,net.minecraftforge.common.data.ExistingFileHelper$IResourceType)"(arg0: ResourceLocation_, arg1: Internal.ExistingFileHelper$IResourceType_): boolean;
        exists(arg0: ResourceLocation_, arg1: Internal.PackType_): boolean;
        notifyAll(): void;
        "exists(net.minecraft.resources.ResourceLocation,net.minecraft.server.packs.PackType)"(arg0: ResourceLocation_, arg1: Internal.PackType_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getResourceStack(arg0: ResourceLocation_, arg1: Internal.PackType_): Internal.List<Internal.Resource>;
        hashCode(): number;
        getResource(arg0: ResourceLocation_, arg1: Internal.PackType_): Internal.Resource;
        wait(): void;
        exists(arg0: ResourceLocation_, arg1: Internal.ExistingFileHelper$IResourceType_): boolean;
        exists(arg0: ResourceLocation_, arg1: Internal.PackType_, arg2: string, arg3: string): boolean;
        wait(arg0: number): void;
        trackGenerated(arg0: ResourceLocation_, arg1: Internal.PackType_, arg2: string, arg3: string): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get enabled(): boolean
    }
    type ExistingFileHelper_ = ExistingFileHelper;
    class WirelessTerminalItem extends Internal.AEBasePoweredItem implements Internal.IMenuItem, Internal.IUpgradeableItem {
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
        abstract asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        getLinkedPosition(arg0: Internal.ItemStack_): Internal.GlobalPos;
        hasPower(arg0: Internal.Player_, arg1: number, arg2: Internal.ItemStack_): boolean;
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
        openFromInventory(arg0: Internal.Player_, arg1: number): boolean;
        getPowerFlow(arg0: Internal.ItemStack_): Internal.AccessRestriction;
        usePower(arg0: Internal.Player_, arg1: number, arg2: Internal.ItemStack_): boolean;
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
        getChargeRate(arg0: Internal.ItemStack_): number;
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
        getMenuHost(arg0: Internal.Player_, arg1: number, arg2: Internal.ItemStack_, arg3: BlockPos_): Internal.ItemMenuHost;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        getMenuType(): Internal.MenuType<any>;
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
        getUpgrades(arg0: Internal.ItemStack_): Internal.IUpgradeInventory;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        getConfigManager(arg0: Internal.ItemStack_): Internal.IConfigManager;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getRegistryName(): ResourceLocation;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        getLinkedGrid(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): Internal.IGrid;
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
        get menuType(): Internal.MenuType<any>
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
        static readonly LINKABLE_HANDLER: (Internal.WirelessTerminalItem$LinkableHandler) & (Internal.IGridLinkableHandler);
    }
    type WirelessTerminalItem_ = WirelessTerminalItem;
    interface PrimitiveIterator <T, T_CONS> extends Internal.Iterator<T> {
        abstract "forEachRemaining(java.lang.Object)"(arg0: T_CONS): void;
        remove(): void;
        abstract forEachRemaining(arg0: T_CONS): void;
        forEachRemaining(arg0: Internal.Consumer_<T>): void;
        abstract next(): T;
        abstract hasNext(): boolean;
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<T>): void;
    }
    type PrimitiveIterator_<T, T_CONS> = PrimitiveIterator<T, T_CONS>;
    abstract class ProjectileWeaponItem extends Internal.Item {
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
        abstract getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
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
        abstract getDefaultProjectileRange(): number;
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
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
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
        get defaultProjectileRange(): number
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
        static readonly ARROW_OR_FIREWORK: Internal.Predicate<Internal.ItemStack>;
        static readonly ARROW_ONLY: Internal.Predicate<Internal.ItemStack>;
    }
    type ProjectileWeaponItem_ = ProjectileWeaponItem;
    interface PointFreeRule {
        rewriteOrNop<A>(arg0: Internal.PointFree_<A>): Internal.PointFree<A>;
        seq(...arg0: Internal.PointFreeRule_[]): this;
        once(arg0: Internal.PointFreeRule_): this;
        choice(...arg0: Internal.PointFreeRule_[]): this;
        one(arg0: Internal.PointFreeRule_): this;
        everywhere(arg0: Internal.PointFreeRule_, arg1: Internal.PointFreeRule_): this;
        many(arg0: Internal.PointFreeRule_): this;
        all(arg0: Internal.PointFreeRule_): this;
        nop(): this;
        abstract rewrite<A>(arg0: Internal.PointFree_<A>): Internal.Optional<Internal.PointFree<A>>;
        (arg0: Internal.PointFree<A>): Internal.Optional_<Internal.PointFree<A>>;
    }
    type PointFreeRule_ = PointFreeRule | ((arg0: Internal.PointFree<A>)=> Internal.Optional_<Internal.PointFree<A>>);
    interface Reference2CharFunction <K> extends it.unimi.dsi.fastutil.Function<K, string>, Internal.ToIntFunction<K> {
        put(arg0: K, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        removeChar(arg0: any): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        defaultReturnValue(): string;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, string>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Reference2LongFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Reference2ByteFunction<K>;
        "getOrDefault(java.lang.Object,char)"(arg0: any, arg1: string): string;
        containsKey(arg0: any): boolean;
        abstract getChar(arg0: any): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: string): string;
        defaultReturnValue(arg0: string): void;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        "put(java.lang.Object,char)"(arg0: K, arg1: string): string;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2CharFunction<T>;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Reference2IntFunction<K>;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2CharFunction;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2CharFunction<T>;
        apply(arg0: K): string;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Reference2FloatFunction<K>;
        applyAsInt(arg0: K): number;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2CharFunction;
        size(): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Character)"(arg0: K, arg1: string): string;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2CharFunction;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<K, T>;
        identity<T>(): Internal.Function<T, T>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2CharFunction;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Reference2ShortFunction<K>;
        (arg0: any): string;
    }
    type Reference2CharFunction_<K> = ((arg0: any)=> string) | Reference2CharFunction<K>;
    interface FlavorListener extends Internal.EventListener {
        abstract flavorsChanged(arg0: Internal.FlavorEvent_): void;
        (arg0: Internal.FlavorEvent): void;
    }
    type FlavorListener_ = ((arg0: Internal.FlavorEvent)=> void) | FlavorListener;
    interface DoubleSupplier {
        abstract getAsDouble(): number;
        get asDouble(): number
        (): number;
    }
    type DoubleSupplier_ = DoubleSupplier | (()=> number);
    class ScreenCharTypedEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: string, arg1: number)
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
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        readonly character: string;
        readonly modifiers: number;
    }
    type ScreenCharTypedEvent_ = ScreenCharTypedEvent;
    abstract class Particle {
        constructor(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
        getClass(): typeof any;
        getLifetime(): number;
        setLifetime(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        notify(): void;
        scale(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        abstract getRenderType(): Internal.ParticleRenderType;
        remove(): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        isAlive(): boolean;
        shouldCull(): boolean;
        toString(): string;
        getParticleGroup(): Internal.Optional<Internal.ParticleGroup>;
        notifyAll(): void;
        abstract render(arg0: Internal.VertexConsumer_, arg1: Internal.Camera_, arg2: number): void;
        tick(): void;
        move(arg0: number, arg1: number, arg2: number): void;
        hashCode(): number;
        getBoundingBox(): Internal.AABB;
        wait(): void;
        wait(arg0: number): void;
        setParticleSpeed(arg0: number, arg1: number, arg2: number): void;
        getPos(): Vec3d;
        equals(arg0: any): boolean;
        setPower(arg0: number): this;
        get class(): typeof any
        get lifetime(): number
        set lifetime(arg0: number)
        set boundingBox(arg0: Internal.AABB_)
        get renderType(): Internal.ParticleRenderType
        get alive(): boolean
        get particleGroup(): Internal.Optional<Internal.ParticleGroup>
        get boundingBox(): Internal.AABB
        get pos(): Vec3d
        set power(arg0: number)
    }
    type Particle_ = Particle;
    class FurnaceMenu extends Internal.AbstractFurnaceMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: net.minecraft.world.Container_, arg3: Internal.ContainerData_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        clearCraftingContent(): void;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        getResultSlotIndex(): number;
        getSize(): number;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        getGridHeight(): number;
        setData(arg0: number, arg1: number): void;
        getLitProgress(): number;
        getSlot(arg0: number): Internal.Slot;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        recipeMatches(arg0: Internal.Recipe_<net.minecraft.world.Container>): boolean;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        handlePlacement(arg0: boolean, arg1: Internal.Recipe_<any>, arg2: Internal.ServerPlayer_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        getGridWidth(): number;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        resumeRemoteUpdates(): void;
        getRecipeBookCategories(): Internal.List<Internal.RecipeBookCategories>;
        static getQuickcraftHeader(arg0: number): number;
        getBurnProgress(): number;
        fillCraftSlotsStackedContents(arg0: Internal.StackedContents_): void;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        shouldMoveToInventory(arg0: number): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        getRecipeBookType(): Internal.RecipeBookType;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        isLit(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get resultSlotIndex(): number
        get size(): number
        get gridHeight(): number
        get litProgress(): number
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        get gridWidth(): number
        set carried(arg0: Internal.ItemStack_)
        get recipeBookCategories(): Internal.List<Internal.RecipeBookCategories>
        get burnProgress(): number
        get recipeBookType(): Internal.RecipeBookType
        get stateId(): number
        get lit(): boolean
    }
    type FurnaceMenu_ = FurnaceMenu;
    interface TextureAtlasSpriteExtension {
        abstract setFusionTextureType(type: Internal.TextureType_<any>): void;
        abstract getFusionTextureType(): Internal.TextureType<any>;
        set fusionTextureType(type: Internal.TextureType_<any>)
        get fusionTextureType(): Internal.TextureType<any>
    }
    type TextureAtlasSpriteExtension_ = TextureAtlasSpriteExtension;
    abstract class FileChannel extends Internal.AbstractInterruptibleChannel implements Internal.SeekableByteChannel, Internal.ScatteringByteChannel, Internal.GatheringByteChannel {
        getClass(): typeof any;
        lock(): Internal.FileLock;
        abstract transferFrom(arg0: Internal.ReadableByteChannel_, arg1: number, arg2: number): number;
        abstract position(): number;
        notify(): void;
        read(arg0: Internal.ByteBuffer_[]): number;
        wait(arg0: number, arg1: number): void;
        abstract read(arg0: Internal.ByteBuffer_, arg1: number): number;
        abstract read(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract write(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        static open(arg0: Internal.Path_, ...arg1: Internal.OpenOption_[]): Internal.FileChannel;
        isOpen(): boolean;
        abstract truncate(arg0: number): this;
        write(arg0: Internal.ByteBuffer_[]): number;
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        static open(arg0: Internal.Path_, arg1: Internal.Set_<Internal.OpenOption>, ...arg2: any_<any>[]): Internal.FileChannel;
        toString(): string;
        abstract "read(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): number;
        abstract lock(arg0: number, arg1: number, arg2: boolean): Internal.FileLock;
        tryLock(): Internal.FileLock;
        notifyAll(): void;
        position(arg0: number): Internal.SeekableByteChannel;
        abstract size(): number;
        abstract map(arg0: Internal.FileChannel$MapMode_, arg1: number, arg2: number): Internal.MappedByteBuffer;
        hashCode(): number;
        "read(java.nio.ByteBuffer[])"(arg0: Internal.ByteBuffer_[]): number;
        abstract "write(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): number;
        wait(): void;
        close(): void;
        abstract tryLock(arg0: number, arg1: number, arg2: boolean): Internal.FileLock;
        abstract transferTo(arg0: number, arg1: number, arg2: Internal.WritableByteChannel_): number;
        wait(arg0: number): void;
        abstract force(arg0: boolean): void;
        equals(arg0: any): boolean;
        "write(java.nio.ByteBuffer[])"(arg0: Internal.ByteBuffer_[]): number;
        abstract write(arg0: Internal.ByteBuffer_, arg1: number): number;
        get class(): typeof any
        get open(): boolean
    }
    type FileChannel_ = FileChannel;
    class WorldPreset {
        constructor(arg0: Internal.Map_<Internal.ResourceKey<Internal.LevelStem>, Internal.LevelStem>)
        getClass(): typeof any;
        overworld(): Internal.Optional<Internal.LevelStem>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        createWorldDimensions(): Internal.WorldDimensions;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly DIRECT_CODEC: Internal.Codec<Internal.WorldPreset>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.WorldPreset>>;
    }
    type WorldPreset_ = WorldPreset | Special.WorldPreset;
    class ActiveBlock extends Internal.Block {
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
        isActive(arg0: Internal.BlockState_): boolean;
        changeActive(arg0: Internal.BlockState_, arg1: boolean): Internal.BlockState;
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
    type ActiveBlock_ = ActiveBlock;
    interface DirectoryStream <T> extends Internal.Closeable, Internal.Iterable<T> {
        forEach(arg0: Internal.Consumer_<T>): void;
        abstract close(): void;
        spliterator(): Internal.Spliterator<T>;
        abstract iterator(): Internal.Iterator<T>;
    }
    type DirectoryStream_<T> = DirectoryStream<T>;
    class ProgressMeter {
        constructor(arg0: string, arg1: number, arg2: number, arg3: Internal.Message_)
        getClass(): typeof any;
        label(): Internal.Message;
        toString(): string;
        notifyAll(): void;
        increment(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        current(): number;
        hashCode(): number;
        wait(): void;
        steps(): number;
        wait(arg0: number): void;
        progress(): number;
        equals(arg0: any): boolean;
        setAbsolute(arg0: number): void;
        complete(): void;
        label(arg0: string): void;
        get class(): typeof any
        set absolute(arg0: number)
    }
    type ProgressMeter_ = ProgressMeter;
    class ItemFrame extends Internal.HangingEntity implements Internal.ItemFrameEntityKJS {
        constructor(arg0: Internal.EntityType_<Internal.ItemFrame>, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_)
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_)
        constructor(arg0: Internal.EntityType_<Internal.ItemFrame>, arg1: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getAddItemSound(): Internal.SoundEvent;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
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
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
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
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        getRotateItemSound(): Internal.SoundEvent;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        "getItem()"(): Internal.ItemStack;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        isAmbientCreature(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        getPos(): BlockPos;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
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
        dropItem(arg0: Internal.Entity_): void;
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
        getPlaceSound(): Internal.SoundEvent;
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
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getWidth(): number;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        setRotation(arg0: number): void;
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
        getRotation(): number;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        abstract sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        getAnalogOutput(): number;
        playSound(id: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        markFusionRecomputeModels(): void;
        isPeacefulCreature(): boolean;
        getDimensionChangingDelay(): number;
        setOnGround(arg0: boolean): void;
        hasFramedMap(): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setYaw(arg0: number): void;
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
        self(): Internal.Entity;
        refreshDimensions(): void;
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
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        gtceu$setFireImmune(arg0: boolean): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        getFramedMapId(): Internal.OptionalInt;
        checkSlowFallDistance(): void;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
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
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        setItem(arg0: Internal.ItemStack_): void;
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
        isPlayer(): boolean;
        isAnimal(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        survives(): boolean;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
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
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        getHeight(): number;
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
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        abstract sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
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
        setItem(arg0: Internal.ItemStack_, arg1: boolean): void;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        getRemoveItemSound(): Internal.SoundEvent;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
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
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
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
        hasControllingPassenger(): boolean;
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
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        getBreakSound(): Internal.SoundEvent;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        isWaterCreature(): boolean;
        getEntityType(): Internal.EntityType<any>;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        discard(): void;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        abstract sdl$resetDynamicLight(): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getLightProbePosition(arg0: number): Vec3d;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
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
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        playPlacementSound(): void;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        unRide(): void;
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
        runCommand(command: string): number;
        isFullyFrozen(): boolean;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get addItemSound(): Internal.SoundEvent
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
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
        get rotateItemSound(): Internal.SoundEvent
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get "item()"(): Internal.ItemStack
        get steppingCarefully(): boolean
        get ambientCreature(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get pos(): BlockPos
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
        get placeSound(): Internal.SoundEvent
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get width(): number
        get myRidingOffset(): number
        set rotation(arg0: number)
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
        get rotation(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get analogOutput(): number
        get onRails(): boolean
        get peacefulCreature(): boolean
        get dimensionChangingDelay(): number
        set onGround(arg0: boolean)
        set yaw(arg0: number)
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
        get framedMapId(): Internal.OptionalInt
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set item(arg0: Internal.ItemStack_)
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
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get facing(): Internal.Direction
        get height(): number
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get inWater(): boolean
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get removeItemSound(): Internal.SoundEvent
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        get breakSound(): Internal.SoundEvent
        set pose(arg0: Internal.Pose_)
        get waterCreature(): boolean
        get entityType(): Internal.EntityType<any>
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        get type(): string
        set id(arg0: number)
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        static readonly NUM_ROTATIONS: (8) & (number);
    }
    type ItemFrame_ = ItemFrame;
    interface ItemSteerable {
        abstract boost(): boolean;
        (): boolean;
    }
    type ItemSteerable_ = (()=> boolean) | ItemSteerable;
    class MapColor {
        getClass(): typeof any;
        toString(): string;
        static byId(arg0: number): Internal.MapColor;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static getColorFromPackedId(arg0: number): number;
        hashCode(): number;
        calculateRGBColor(arg0: Internal.MapColor$Brightness_): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getPackedId(arg0: Internal.MapColor$Brightness_): number;
        get class(): typeof any
        static readonly FIRE: (Internal.MapColor) & (Internal.MapColor);
        static readonly CRIMSON_NYLIUM: (Internal.MapColor) & (Internal.MapColor);
        static readonly GOLD: (Internal.MapColor) & (Internal.MapColor);
        static readonly DEEPSLATE: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_GRAY: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_MAGENTA: (Internal.MapColor) & (Internal.MapColor);
        static readonly DIAMOND: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_BLACK: (Internal.MapColor) & (Internal.MapColor);
        static readonly WOOL: (Internal.MapColor) & (Internal.MapColor);
        static readonly RAW_IRON: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_BROWN: (Internal.MapColor) & (Internal.MapColor);
        readonly id: number;
        static readonly QUARTZ: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_BLUE: (Internal.MapColor) & (Internal.MapColor);
        static readonly WOOD: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_MAGENTA: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_LIGHT_GREEN: (Internal.MapColor) & (Internal.MapColor);
        static readonly EMERALD: (Internal.MapColor) & (Internal.MapColor);
        static readonly DIRT: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_RED: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_CYAN: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_GREEN: (Internal.MapColor) & (Internal.MapColor);
        static readonly METAL: (Internal.MapColor) & (Internal.MapColor);
        static readonly WARPED_WART_BLOCK: (Internal.MapColor) & (Internal.MapColor);
        static readonly NETHER: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_PURPLE: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_GRAY: (Internal.MapColor) & (Internal.MapColor);
        static readonly WARPED_STEM: (Internal.MapColor) & (Internal.MapColor);
        static readonly STONE: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_CYAN: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_LIGHT_GRAY: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_GREEN: (Internal.MapColor) & (Internal.MapColor);
        static readonly GLOW_LICHEN: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_YELLOW: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_BLACK: (Internal.MapColor) & (Internal.MapColor);
        static readonly CRIMSON_HYPHAE: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_BROWN: (Internal.MapColor) & (Internal.MapColor);
        static readonly SAND: (Internal.MapColor) & (Internal.MapColor);
        static readonly NONE: (Internal.MapColor) & (Internal.MapColor);
        static readonly ICE: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_LIGHT_GRAY: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_ORANGE: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_WHITE: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_BLUE: (Internal.MapColor) & (Internal.MapColor);
        static readonly WARPED_NYLIUM: (Internal.MapColor) & (Internal.MapColor);
        static readonly PLANT: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_LIGHT_BLUE: (Internal.MapColor) & (Internal.MapColor);
        static readonly LAPIS: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_YELLOW: (Internal.MapColor) & (Internal.MapColor);
        static readonly CRIMSON_STEM: (Internal.MapColor) & (Internal.MapColor);
        static readonly WARPED_HYPHAE: (Internal.MapColor) & (Internal.MapColor);
        static readonly SNOW: (Internal.MapColor) & (Internal.MapColor);
        static readonly WATER: (Internal.MapColor) & (Internal.MapColor);
        static readonly PODZOL: (Internal.MapColor) & (Internal.MapColor);
        static readonly CLAY: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_PURPLE: (Internal.MapColor) & (Internal.MapColor);
        static readonly GRASS: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_LIGHT_BLUE: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_ORANGE: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_RED: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_LIGHT_GREEN: (Internal.MapColor) & (Internal.MapColor);
        static readonly COLOR_PINK: (Internal.MapColor) & (Internal.MapColor);
        static readonly TERRACOTTA_PINK: (Internal.MapColor) & (Internal.MapColor);
        readonly col: number;
    }
    type MapColor_ = MapColor;
    class ServerboundPickItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getSlot(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get slot(): number
    }
    type ServerboundPickItemPacket_ = ServerboundPickItemPacket;
    class RestockUpgradeItem extends Internal.UpgradeItemBase<Internal.RestockUpgradeWrapper> {
        constructor(arg0: Internal.IntSupplier_)
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
        getUpgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        checkThisForConflictsWithExistingUpgrades(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: number): Internal.UpgradeSlotChangeResult;
        getFilterSlotCount(): number;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean, arg2: Internal.Player_): Internal.UpgradeSlotChangeResult;
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
        getInventoryColumnsTaken(): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canAddUpgradeTo(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
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
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: number, arg4: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
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
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getName(): net.minecraft.network.chat.Component;
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
        getType(): Internal.UpgradeType<Internal.RestockUpgradeWrapper>;
        getUpgradesInGroupPerStorage(arg0: string): number;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getUpgradesPerStorage(arg0: string): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.IStorageWrapper_, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get upgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>
        get complex(): boolean
        get filterSlotCount(): number
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get inventoryColumnsTaken(): number
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
        get upgradeGroup(): Internal.UpgradeGroup
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get name(): net.minecraft.network.chat.Component
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get type(): Internal.UpgradeType<Internal.RestockUpgradeWrapper>
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
    type RestockUpgradeItem_ = RestockUpgradeItem;
    class BlockSetType extends Internal.Record {
        constructor(arg0: string, arg1: boolean, arg2: SoundType_, arg3: Internal.SoundEvent_, arg4: Internal.SoundEvent_, arg5: Internal.SoundEvent_, arg6: Internal.SoundEvent_, arg7: Internal.SoundEvent_, arg8: Internal.SoundEvent_, arg9: Internal.SoundEvent_, arg10: Internal.SoundEvent_)
        constructor(arg0: string)
        getClass(): typeof any;
        buttonClickOn(): Internal.SoundEvent;
        buttonClickOff(): Internal.SoundEvent;
        toString(): string;
        static values(): Internal.Stream<Internal.BlockSetType>;
        notifyAll(): void;
        soundType(): SoundType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        pressurePlateClickOn(): Internal.SoundEvent;
        name(): string;
        canOpenByHand(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static register(arg0: Internal.BlockSetType_): Internal.BlockSetType;
        doorOpen(): Internal.SoundEvent;
        equals(arg0: any): boolean;
        trapdoorClose(): Internal.SoundEvent;
        doorClose(): Internal.SoundEvent;
        pressurePlateClickOff(): Internal.SoundEvent;
        trapdoorOpen(): Internal.SoundEvent;
        get class(): typeof any
        static readonly STONE: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly POLISHED_BLACKSTONE: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly GOLD: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly CHERRY: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly BAMBOO: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly SPRUCE: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly OAK: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly BIRCH: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly WARPED: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly DARK_OAK: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly JUNGLE: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly CRIMSON: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly MANGROVE: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly ACACIA: (Internal.BlockSetType) & (Internal.BlockSetType);
        static readonly IRON: (Internal.BlockSetType) & (Internal.BlockSetType);
    }
    type BlockSetType_ = BlockSetType;
    class EntityPositionSource$Type implements Internal.PositionSourceType<Internal.EntityPositionSource> {
        constructor()
        getClass(): typeof any;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.EntityPositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.EntityPositionSource_): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.EntityPositionSource_): void;
        toString(): string;
        notifyAll(): void;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.PositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        read(arg0: Internal.FriendlyByteBuf_): Internal.EntityPositionSource;
        static register<S extends Internal.PositionSourceType<T>, T extends Internal.PositionSource>(arg0: string, arg1: S): S;
        hashCode(): number;
        static toNetwork<T extends Internal.PositionSource>(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        codec(): Internal.Codec<Internal.EntityPositionSource>;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        get class(): typeof any
    }
    type EntityPositionSource$Type_ = EntityPositionSource$Type;
    interface Externalizable extends Internal.Serializable {
        abstract writeExternal(arg0: Internal.ObjectOutput_): void;
        abstract readExternal(arg0: Internal.ObjectInput_): void;
    }
    type Externalizable_ = Externalizable;
    class BlockPileConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockStateProvider_)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly stateProvider: Internal.BlockStateProvider;
        static readonly CODEC: Internal.Codec<Internal.BlockPileConfiguration>;
    }
    type BlockPileConfiguration_ = BlockPileConfiguration;
    interface HolderLookup$Provider {
        abstract lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): this;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        asGetterLookup(): Internal.HolderGetter$Provider;
        (arg0: Internal.ResourceKey<Internal.Registry<T>>): Internal.Optional_<Internal.HolderLookup$RegistryLookup<T>>;
    }
    type HolderLookup$Provider_ = HolderLookup$Provider | ((arg0: Internal.ResourceKey<Internal.Registry<T>>)=> Internal.Optional_<Internal.HolderLookup$RegistryLookup<T>>);
    interface CommandSigningContext {
        abstract getArgument(arg0: string): Internal.PlayerChatMessage;
        (arg0: string): Internal.PlayerChatMessage_;
        readonly ANONYMOUS: Internal.CommandSigningContext;
    }
    type CommandSigningContext_ = CommandSigningContext | ((arg0: string)=> Internal.PlayerChatMessage_);
    class SurfaceIndicatorGenerator$IndicatorPlacement extends Internal.Enum<Internal.SurfaceIndicatorGenerator$IndicatorPlacement> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        static values(): Internal.SurfaceIndicatorGenerator$IndicatorPlacement[];
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SurfaceIndicatorGenerator$IndicatorPlacement>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.SurfaceIndicatorGenerator$IndicatorPlacement_): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        "compareTo(com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator$IndicatorPlacement)"(arg0: Internal.SurfaceIndicatorGenerator$IndicatorPlacement_): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.SurfaceIndicatorGenerator$IndicatorPlacement;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static getByName(arg0: string): Internal.SurfaceIndicatorGenerator$IndicatorPlacement;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.SurfaceIndicatorGenerator$IndicatorPlacement;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.SurfaceIndicatorGenerator$IndicatorPlacement
        static readonly ABOVE: (Internal.SurfaceIndicatorGenerator$IndicatorPlacement) & (Internal.SurfaceIndicatorGenerator$IndicatorPlacement);
        static readonly CODEC: Internal.Codec<Internal.SurfaceIndicatorGenerator$IndicatorPlacement>;
        static readonly BELOW: (Internal.SurfaceIndicatorGenerator$IndicatorPlacement) & (Internal.SurfaceIndicatorGenerator$IndicatorPlacement);
        readonly stateTransformer: Internal.Function<Internal.Either<Internal.BlockState, com.gregtechceu.gtceu.api.data.chemical.material.Material>, Internal.BlockState>;
        static readonly SURFACE: (Internal.SurfaceIndicatorGenerator$IndicatorPlacement) & (Internal.SurfaceIndicatorGenerator$IndicatorPlacement);
        readonly resolver: Internal.TriFunction<Internal.WorldGenLevel, Internal.BulkSectionAccess, BlockPos, BlockPos>;
    }
    type SurfaceIndicatorGenerator$IndicatorPlacement_ = "below" | "above" | "surface" | SurfaceIndicatorGenerator$IndicatorPlacement;
    class Screen$NarratableSearchResult {
        constructor(arg0: Internal.NarratableEntry_, arg1: number, arg2: Internal.NarratableEntry$NarrationPriority_)
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
        readonly priority: Internal.NarratableEntry$NarrationPriority;
        readonly entry: Internal.NarratableEntry;
        readonly index: number;
    }
    type Screen$NarratableSearchResult_ = Screen$NarratableSearchResult;
    abstract class IngredientAction extends Internal.IngredientActionFilter {
        constructor()
        getClass(): typeof any;
        static filterOf(o: any): Internal.IngredientActionFilter;
        toString(): string;
        static getRemaining(container: Internal.CraftingContainer_, index: number, ingredientActions: Internal.List_<Internal.IngredientAction>): Internal.ItemStack;
        notifyAll(): void;
        toJson(json: Internal.JsonObject_): void;
        abstract transform(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.CraftingContainer_): Internal.ItemStack;
        static parseList(json: Internal.JsonElement_): Internal.List<Internal.IngredientAction>;
        notify(): void;
        toJson(): Internal.JsonObject;
        static writeList(buf: Internal.FriendlyByteBuf_, list: Internal.List_<Internal.IngredientAction>): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        copyFrom(filter: Internal.IngredientActionFilter_): void;
        checkFilter(index: number, stack: Internal.ItemStack_): boolean;
        wait(): void;
        abstract getType(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static readList(buf: Internal.FriendlyByteBuf_): Internal.List<Internal.IngredientAction>;
        get class(): typeof any
        get type(): string
        static readonly FACTORY_MAP: ({"damage": any, "custom": any, "keep": any, "replace": any, "consume": any}) & (Internal.Map<string, Internal.Function<Internal.JsonObject, Internal.IngredientAction>>);
    }
    type IngredientAction_ = IngredientAction;
    interface IScalableDrawable {
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw(arg0: Internal.GuiGraphics_, arg1: Internal.Rect2i_): void;
        (arg0: Internal.GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type IScalableDrawable_ = ((arg0: Internal.GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number)=> void) | IScalableDrawable;
    abstract class ArmoryCabinetInventoryHandler implements Internal.IItemHandler, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor()
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        find(): number;
        getSlots(): number;
        abstract onChange(): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(arg0: number): Internal.ItemStack;
        asContainer(): net.minecraft.world.Container;
        "getSlotLimit(int)"(arg0: number): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        serializeNBT(): Internal.CompoundTag;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        wait(): void;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get class(): typeof any
        get empty(): boolean
        get slots(): number
        get "slots()"(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        stackList: Internal.List<Internal.ItemStack>;
    }
    type ArmoryCabinetInventoryHandler_ = ArmoryCabinetInventoryHandler;
    class BlockVibraniumFurnace extends Internal.BlockIronFurnaceBase {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
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
        getComparatorInputOverride(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
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
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_, arg1: Internal.List_<number>): number;
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
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
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
        static readonly VIBRANIUM_FURNACE: ("vibranium_furnace") & (string);
    }
    type BlockVibraniumFurnace_ = BlockVibraniumFurnace;
    interface GameEventListenerRegistry$ListenerVisitor {
        abstract visit(arg0: Internal.GameEventListener_, arg1: Vec3d_): void;
        (arg0: Internal.GameEventListener, arg1: Vec3d): void;
    }
    type GameEventListenerRegistry$ListenerVisitor_ = ((arg0: Internal.GameEventListener, arg1: Vec3d)=> void) | GameEventListenerRegistry$ListenerVisitor;
    class ParsingMode extends Internal.Enum<Internal.ParsingMode> {
        getClass(): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.ParsingMode;
        "put(com.electronwill.nightconfig.core.Config,java.util.List,java.lang.Object)"(arg0: Internal.Config_, arg1: Internal.List_<string>, arg2: any): any;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        put(arg0: Internal.Map_<string, any>, arg1: string, arg2: any): any;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ParsingMode>>;
        notifyAll(): void;
        static values(): Internal.ParsingMode[];
        put(arg0: Internal.Config_, arg1: string, arg2: any): any;
        name(): string;
        "put(java.util.Map,java.lang.String,java.lang.Object)"(arg0: Internal.Map_<string, any>, arg1: string, arg2: any): any;
        hashCode(): number;
        compareTo(arg0: Internal.ParsingMode_): number;
        "compareTo(com.electronwill.nightconfig.core.io.ParsingMode)"(arg0: Internal.ParsingMode_): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.ParsingMode;
        wait(arg0: number): void;
        put(arg0: Internal.Config_, arg1: Internal.List_<string>, arg2: any): any;
        "put(com.electronwill.nightconfig.core.Config,java.lang.String,java.lang.Object)"(arg0: Internal.Config_, arg1: string, arg2: any): any;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        prepareParsing(arg0: Internal.Config_): void;
        get class(): typeof any
        get declaringClass(): typeof Internal.ParsingMode
        static readonly REPLACE: (Internal.ParsingMode) & (Internal.ParsingMode);
        static readonly MERGE: (Internal.ParsingMode) & (Internal.ParsingMode);
        static readonly ADD: (Internal.ParsingMode) & (Internal.ParsingMode);
    }
    type ParsingMode_ = "replace" | "merge" | ParsingMode | "add";
    class NoiseRouter extends Internal.Record {
        constructor(arg0: Internal.DensityFunction_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_, arg3: Internal.DensityFunction_, arg4: Internal.DensityFunction_, arg5: Internal.DensityFunction_, arg6: Internal.DensityFunction_, arg7: Internal.DensityFunction_, arg8: Internal.DensityFunction_, arg9: Internal.DensityFunction_, arg10: Internal.DensityFunction_, arg11: Internal.DensityFunction_, arg12: Internal.DensityFunction_, arg13: Internal.DensityFunction_, arg14: Internal.DensityFunction_)
        getClass(): typeof any;
        barrierNoise(): Internal.DensityFunction;
        continents(): Internal.DensityFunction;
        initialDensityWithoutJaggedness(): Internal.DensityFunction;
        notify(): void;
        ridges(): Internal.DensityFunction;
        wait(arg0: number, arg1: number): void;
        lavaNoise(): Internal.DensityFunction;
        temperature(): Internal.DensityFunction;
        veinRidged(): Internal.DensityFunction;
        mapAll(arg0: Internal.DensityFunction$Visitor_): this;
        fluidLevelFloodednessNoise(): Internal.DensityFunction;
        toString(): string;
        finalDensity(): Internal.DensityFunction;
        veinToggle(): Internal.DensityFunction;
        notifyAll(): void;
        veinGap(): Internal.DensityFunction;
        fluidLevelSpreadNoise(): Internal.DensityFunction;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        depth(): Internal.DensityFunction;
        erosion(): Internal.DensityFunction;
        vegetation(): Internal.DensityFunction;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.NoiseRouter>;
    }
    type NoiseRouter_ = NoiseRouter;
    class GTBlocks$2 extends Internal.BlockItem {
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
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
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
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
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
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
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
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
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
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
        get block(): Internal.Block
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
    type GTBlocks$2_ = GTBlocks$2;
    interface BlockEntityRendererProvider <T extends Internal.BlockEntity> {
        abstract create(arg0: Internal.BlockEntityRendererProvider$Context_): Internal.BlockEntityRenderer<T>;
        (arg0: Internal.BlockEntityRendererProvider$Context): Internal.BlockEntityRenderer_<T>;
    }
    type BlockEntityRendererProvider_<T extends Internal.BlockEntity> = ((arg0: Internal.BlockEntityRendererProvider$Context)=> Internal.BlockEntityRenderer_<T>) | BlockEntityRendererProvider<T>;
    interface Int2ByteFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, number> {
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2ByteFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        getOrDefault(arg0: number, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2ByteFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2ByteFunction<T>;
        "getOrDefault(int,byte)"(arg0: number, arg1: number): number;
        "remove(int)"(arg0: number): number;
        abstract get(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        "containsKey(int)"(arg0: number): boolean;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Int2ShortFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Int2LongFunction;
        abstract "get(int)"(arg0: number): number;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2ByteFunction;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2ByteFunction;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2ByteFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Byte)"(arg0: any, arg1: number): number;
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Int2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        "put(int,byte)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Int2CharFunction;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Integer,java.lang.Byte)"(arg0: number, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2ByteFunction<T>;
        apply(arg0: number): number;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2ByteFunction;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        remove(arg0: number): number;
        size(): number;
        clear(): void;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
    }
    type Int2ByteFunction_ = Int2ByteFunction;
    class NbtPathArgument$NbtPath {
        constructor(arg0: string, arg1: any_[], arg2: Internal.Object2IntMap_<any>)
        static isTooDeep(arg0: Internal.Tag_, arg1: number): boolean;
        getClass(): typeof any;
        get(arg0: Internal.Tag_): Internal.List<Internal.Tag>;
        toString(): string;
        notifyAll(): void;
        insert(arg0: number, arg1: Internal.CompoundTag_, arg2: Internal.List_<Internal.Tag>): number;
        notify(): void;
        getOrCreate(arg0: Internal.Tag_, arg1: Internal.Supplier_<Internal.Tag>): Internal.List<Internal.Tag>;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        countMatching(arg0: Internal.Tag_): number;
        wait(): void;
        wait(arg0: number): void;
        remove(arg0: Internal.Tag_): number;
        equals(arg0: any): boolean;
        set(arg0: Internal.Tag_, arg1: Internal.Tag_): number;
        get class(): typeof any
    }
    type NbtPathArgument$NbtPath_ = NbtPathArgument$NbtPath;
    interface Char2LongFunction extends it.unimi.dsi.fastutil.Function<string, number>, Internal.IntToLongFunction {
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2LongFunction;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Char2DoubleFunction;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Char2CharFunction;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Char2ReferenceFunction<T>;
        containsKey(arg0: string): boolean;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Char2ObjectFunction<T>;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Char2FloatFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        "put(char,long)"(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        apply(arg0: string): number;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Char2ShortFunction;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Long)"(arg0: any, arg1: number): number;
        abstract "get(char)"(arg0: string): number;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        "containsKey(char)"(arg0: string): boolean;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Char2IntFunction;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2LongFunction;
        abstract get(arg0: string): number;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2LongFunction;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Char2ByteFunction;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2LongFunction;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2LongFunction<T>;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2LongFunction<T>;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Long)"(arg0: string, arg1: number): number;
        remove(arg0: string): number;
        "getOrDefault(char,long)"(arg0: string, arg1: number): number;
        size(): number;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2LongFunction;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        clear(): void;
        "remove(char)"(arg0: string): number;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
    }
    type Char2LongFunction_ = Char2LongFunction;
    class SpawnEggItem extends Internal.Item {
        constructor(arg0: Internal.EntityType_<Internal.Mob>, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
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
        spawnOffspringFromSpawnEgg(arg0: Internal.Player_, arg1: Internal.Mob_, arg2: Internal.EntityType_<Internal.Mob>, arg3: Internal.ServerLevel_, arg4: Vec3d_, arg5: Internal.ItemStack_): Internal.Optional<Internal.Mob>;
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
        static "byId(int)"(arg0: number): Internal.Item;
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
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        static "byId(net.minecraft.world.entity.EntityType)"(arg0: Internal.EntityType_<any>): Internal.SpawnEggItem;
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
        getColor(arg0: number): number;
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
        getType(arg0: Internal.CompoundTag_): Internal.EntityType<any>;
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
        /**
         * @deprecated
        */
        static byId(arg0: Internal.EntityType_<any>): Internal.SpawnEggItem;
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
        spawnsEntity(arg0: Internal.CompoundTag_, arg1: Internal.EntityType_<any>): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        static eggs(): Internal.Iterable<Internal.SpawnEggItem>;
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
        defaultType: Internal.EntityType<any>;
        static readonly BY_ID: ({[key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem, [key: Internal.EntityType<any>]: Internal.SpawnEggItem}) & (Internal.Map<Internal.EntityType<Internal.Mob>, Internal.SpawnEggItem>);
    }
    type SpawnEggItem_ = SpawnEggItem;
    interface InjectedFluidExtension extends Internal.InjectedRegistryEntryExtension<Internal.Fluid> {
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
    }
    type InjectedFluidExtension_ = InjectedFluidExtension;
    class SlimeBlock extends Internal.HalfTransparentBlock {
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
    type SlimeBlock_ = SlimeBlock;
    class ClientboundSetBorderCenterPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.WorldBorder_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getNewCenterX(): number;
        notifyAll(): void;
        getNewCenterZ(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get newCenterX(): number
        get newCenterZ(): number
        get skippable(): boolean
    }
    type ClientboundSetBorderCenterPacket_ = ClientboundSetBorderCenterPacket;
    class Lazy$Fast <T> implements net.minecraftforge.common.util.Lazy<T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        get(): T;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static concurrentOf<T>(arg0: Internal.Supplier_<T>): net.minecraftforge.common.util.Lazy<T>;
        static of<T>(arg0: Internal.Supplier_<T>): net.minecraftforge.common.util.Lazy<T>;
        get class(): typeof any
    }
    type Lazy$Fast_<T> = Lazy$Fast<T>;
    class AbuseReportRequest$RealmInfo {
        constructor(arg0: string, arg1: number)
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
        slotId: number;
        realmId: string;
    }
    type AbuseReportRequest$RealmInfo_ = AbuseReportRequest$RealmInfo;
    class ChunkEntities <T> {
        constructor(arg0: Internal.ChunkPos_, arg1: Internal.List_<T>)
        getClass(): typeof any;
        getPos(): Internal.ChunkPos;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        isEmpty(): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getEntities(): Internal.Stream<T>;
        get class(): typeof any
        get pos(): Internal.ChunkPos
        get empty(): boolean
        get entities(): Internal.Stream<T>
    }
    type ChunkEntities_<T> = ChunkEntities<T>;
    class LootContext {
        constructor(arg0: Internal.LootParams_, arg1: Internal.RandomSource_, arg2: Internal.LootDataResolver_)
        getClass(): typeof any;
        getParamOrNull<T>(arg0: Internal.LootContextParam_<T>): T;
        getLootingModifier(): number;
        getLevel(): Internal.ServerLevel;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static createVisitedEntry(arg0: Internal.LootItemFunction_): Internal.LootContext$VisitedEntry<Internal.LootItemFunction>;
        hasParam(arg0: Internal.LootContextParam_<any>): boolean;
        popVisitedElement(arg0: Internal.LootContext$VisitedEntry_<any>): void;
        getRandom(): Internal.RandomSource;
        hasVisitedElement(arg0: Internal.LootContext$VisitedEntry_<any>): boolean;
        addDynamicDrops(arg0: ResourceLocation_, arg1: Internal.Consumer_<Internal.ItemStack>): void;
        static "createVisitedEntry(net.minecraft.world.level.storage.loot.LootTable)"(arg0: Internal.LootTable_): Internal.LootContext$VisitedEntry<Internal.LootTable>;
        getResolver(): Internal.LootDataResolver;
        toString(): string;
        static createVisitedEntry(arg0: Internal.LootItemCondition_): Internal.LootContext$VisitedEntry<Internal.LootItemCondition>;
        getParam<T>(arg0: Internal.LootContextParam_<T>): T;
        notifyAll(): void;
        static "createVisitedEntry(net.minecraft.world.level.storage.loot.predicates.LootItemCondition)"(arg0: Internal.LootItemCondition_): Internal.LootContext$VisitedEntry<Internal.LootItemCondition>;
        setQueriedLootTableId(arg0: ResourceLocation_): void;
        getQueriedLootTableId(): ResourceLocation;
        getLuck(): number;
        hashCode(): number;
        static createVisitedEntry(arg0: Internal.LootTable_): Internal.LootContext$VisitedEntry<Internal.LootTable>;
        wait(): void;
        wait(arg0: number): void;
        pushVisitedElement(arg0: Internal.LootContext$VisitedEntry_<any>): boolean;
        equals(arg0: any): boolean;
        static "createVisitedEntry(net.minecraft.world.level.storage.loot.functions.LootItemFunction)"(arg0: Internal.LootItemFunction_): Internal.LootContext$VisitedEntry<Internal.LootItemFunction>;
        get class(): typeof any
        get lootingModifier(): number
        get level(): Internal.ServerLevel
        get random(): Internal.RandomSource
        get resolver(): Internal.LootDataResolver
        set queriedLootTableId(arg0: ResourceLocation_)
        get queriedLootTableId(): ResourceLocation
        get luck(): number
    }
    type LootContext_ = LootContext;
    abstract class AEKeyType {
        constructor(arg0: ResourceLocation_, arg1: typeof Internal.AEKey, arg2: net.minecraft.network.chat.Component_)
        getClass(): typeof any;
        getUnitSymbol(): string;
        supportsFuzzyRangeSearch(): boolean;
        formatAmount(arg0: number, arg1: Internal.AmountFormat_): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static items(): Internal.AEKeyType;
        getAmountPerUnit(): number;
        getId(): ResourceLocation;
        getTagNames(): Internal.Stream<Internal.TagKey<any>>;
        abstract loadKeyFromTag(arg0: Internal.CompoundTag_): Internal.AEKey;
        getAmountPerByte(): number;
        toString(): string;
        static fluids(): Internal.AEKeyType;
        abstract readFromPacket(arg0: Internal.FriendlyByteBuf_): Internal.AEKey;
        notifyAll(): void;
        contains(arg0: Internal.AEKey_): boolean;
        getRawId(): number;
        static fromRawId(arg0: number): Internal.AEKeyType;
        tryCast(arg0: Internal.AEKey_): Internal.AEKey;
        getAmountPerOperation(): number;
        getKeyClass(): typeof Internal.AEKey;
        hashCode(): number;
        wait(): void;
        filter(): Internal.AEKeyFilter;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        get class(): typeof any
        get unitSymbol(): string
        get amountPerUnit(): number
        get id(): ResourceLocation
        get tagNames(): Internal.Stream<Internal.TagKey<any>>
        get amountPerByte(): number
        get rawId(): number
        get amountPerOperation(): number
        get keyClass(): typeof Internal.AEKey
        get description(): net.minecraft.network.chat.Component
    }
    type AEKeyType_ = AEKeyType;
    class ArrowPiercingEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getMinLevel(): number;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type ArrowPiercingEnchantment_ = ArrowPiercingEnchantment;
    class ClientboundPingPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get skippable(): boolean
        get id(): number
    }
    type ClientboundPingPacket_ = ClientboundPingPacket;
    class PlayerEvent$PlayerLoggedOutEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_)
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
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
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
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type PlayerEvent$PlayerLoggedOutEvent_ = PlayerEvent$PlayerLoggedOutEvent;
    class ShaderInstance implements Internal.Shader, Internal.AutoCloseable {
        constructor(arg0: Internal.ResourceProvider_, arg1: ResourceLocation_, arg2: Internal.VertexFormat_)
        constructor(arg0: Internal.ResourceProvider_, arg1: string, arg2: Internal.VertexFormat_)
        getClass(): typeof any;
        markDirty(): void;
        toString(): string;
        static parseBlendNode(arg0: Internal.JsonObject_): Internal.BlendMode;
        attachToProgram(): void;
        getVertexProgram(): Internal.Program;
        notifyAll(): void;
        setSampler(arg0: string, arg1: any): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply(): void;
        getFragmentProgram(): Internal.Program;
        hashCode(): number;
        getUniform(arg0: string): Internal.Uniform;
        getVertexFormat(): Internal.VertexFormat;
        wait(): void;
        clear(): void;
        getName(): string;
        close(): void;
        wait(arg0: number): void;
        safeGetUniform(arg0: string): Internal.AbstractUniform;
        equals(arg0: any): boolean;
        callGetOrCreate(arg0: Internal.ResourceProvider_, arg1: Internal.Program$Type_, arg2: string): Internal.Program;
        getId(): number;
        get class(): typeof any
        get vertexProgram(): Internal.Program
        get fragmentProgram(): Internal.Program
        get vertexFormat(): Internal.VertexFormat
        get name(): string
        get id(): number
        readonly LINE_WIDTH: Internal.Uniform;
        readonly SCREEN_SIZE: Internal.Uniform;
        readonly TEXTURE_MATRIX: Internal.Uniform;
        readonly COLOR_MODULATOR: Internal.Uniform;
        readonly LIGHT1_DIRECTION: Internal.Uniform;
        readonly FOG_COLOR: Internal.Uniform;
        readonly INVERSE_VIEW_ROTATION_MATRIX: Internal.Uniform;
        static readonly SHADER_PATH: ("shaders") & (string);
        readonly GLINT_ALPHA: Internal.Uniform;
        readonly LIGHT0_DIRECTION: Internal.Uniform;
        readonly PROJECTION_MATRIX: Internal.Uniform;
        readonly FOG_START: Internal.Uniform;
        readonly FOG_END: Internal.Uniform;
        readonly CHUNK_OFFSET: Internal.Uniform;
        readonly FOG_SHAPE: Internal.Uniform;
        readonly MODEL_VIEW_MATRIX: Internal.Uniform;
        readonly GAME_TIME: Internal.Uniform;
    }
    type ShaderInstance_ = ShaderInstance;
    interface IntToDoubleFunction {
        abstract applyAsDouble(arg0: number): number;
        (arg0: number): number;
    }
    type IntToDoubleFunction_ = IntToDoubleFunction | ((arg0: number)=> number);
    class SimpleBlockFeature extends Internal.Feature<Internal.SimpleBlockConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.SimpleBlockConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        place(arg0: Internal.SimpleBlockConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.SimpleBlockConfiguration, Internal.Feature<Internal.SimpleBlockConfiguration>>>;
        wait(): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.SimpleBlockConfiguration>): boolean;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type SimpleBlockFeature_ = SimpleBlockFeature;
    class CubeListBuilder {
        constructor()
        getClass(): typeof any;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        static create(): Internal.CubeListBuilder;
        getCubes(): Internal.List<Internal.CubeDefinition>;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Set_<Internal.Direction>): this;
        texOffs(arg0: number, arg1: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        mirror(): this;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.CubeDeformation_, arg8: number, arg9: number): this;
        "addBox(java.lang.String,float,float,float,int,int,int,int,int)"(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.CubeDeformation_): this;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CubeDeformation_): this;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        toString(): string;
        "addBox(float,float,float,float,float,float,java.util.Set)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Set_<Internal.Direction>): this;
        notifyAll(): void;
        "addBox(float,float,float,float,float,float,net.minecraft.client.model.geom.builders.CubeDeformation)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CubeDeformation_): this;
        "addBox(java.lang.String,float,float,float,float,float,float)"(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CubeDeformation_, arg7: number, arg8: number): this;
        hashCode(): number;
        "addBox(float,float,float,float,float,float,net.minecraft.client.model.geom.builders.CubeDeformation,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CubeDeformation_, arg7: number, arg8: number): this;
        wait(): void;
        mirror(arg0: boolean): this;
        wait(arg0: number): void;
        "addBox(float,float,float,float,float,float,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        equals(arg0: any): boolean;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        get class(): typeof any
        get cubes(): Internal.List<Internal.CubeDefinition>
    }
    type CubeListBuilder_ = CubeListBuilder;
    class ClientboundSoundEntityPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Holder_<Internal.SoundEvent>, arg1: Internal.SoundSource_, arg2: Internal.Entity_, arg3: number, arg4: number, arg5: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getSource(): Internal.SoundSource;
        toString(): string;
        getSeed(): number;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getVolume(): number;
        getSound(): Internal.Holder<Internal.SoundEvent>;
        hashCode(): number;
        getPitch(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get source(): Internal.SoundSource
        get seed(): number
        get skippable(): boolean
        get volume(): number
        get sound(): Internal.Holder<Internal.SoundEvent>
        get pitch(): number
        get id(): number
    }
    type ClientboundSoundEntityPacket_ = ClientboundSoundEntityPacket;
    class DeathMessageType extends Internal.Enum<Internal.DeathMessageType> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.DeathMessageType;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.DeathMessageType[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DeathMessageType>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.DeathMessageType;
        "compareTo(net.minecraft.world.damagesource.DeathMessageType)"(arg0: Internal.DeathMessageType_): number;
        compareTo(arg0: Internal.DeathMessageType_): number;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DeathMessageType
        static readonly DEFAULT: (Internal.DeathMessageType) & (Internal.DeathMessageType);
        static readonly INTENTIONAL_GAME_DESIGN: (Internal.DeathMessageType) & (Internal.DeathMessageType);
        static readonly FALL_VARIANTS: (Internal.DeathMessageType) & (Internal.DeathMessageType);
        static readonly CODEC: Internal.Codec<Internal.DeathMessageType>;
    }
    type DeathMessageType_ = "fall_variants" | "intentional_game_design" | "default" | DeathMessageType;
    interface ModelBakeryAccessor {
        abstract invokeGetModel(arg0: ResourceLocation_): Internal.UnbakedModel;
        abstract getTopLevelModels(): Internal.Map<ResourceLocation, Internal.UnbakedModel>;
        get topLevelModels(): Internal.Map<ResourceLocation, Internal.UnbakedModel>
    }
    type ModelBakeryAccessor_ = ModelBakeryAccessor;
    class SpriteLoader$Preparations extends Internal.Record {
        constructor(width: number, height: number, mipLevel: number, missing: Internal.TextureAtlasSprite_, regions: Internal.Map_<ResourceLocation, Internal.TextureAtlasSprite>, readyForUpload: Internal.CompletableFuture_<void>)
        getClass(): typeof any;
        mipLevel(): number;
        missing(): Internal.TextureAtlasSprite;
        toString(): string;
        notifyAll(): void;
        height(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        readyForUpload(): Internal.CompletableFuture<void>;
        waitForUpload(): Internal.CompletableFuture<Internal.SpriteLoader$Preparations>;
        wait(arg0: number): void;
        width(): number;
        regions(): Internal.Map<ResourceLocation, Internal.TextureAtlasSprite>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SpriteLoader$Preparations_ = SpriteLoader$Preparations;
    class GTFluidBuilder$1 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getDescriptionId(): string;
        getRarity(): Internal.Rarity;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getViscosity(): number;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        isAir(): boolean;
        getLightLevel(arg0: Internal.FluidStack_): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidStack_): number;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        canHydrate(arg0: Internal.Entity_): boolean;
        toString(): string;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): net.minecraft.network.chat.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get descriptionId(): string
        get rarity(): Internal.Rarity
        get temperature(): number
        get description(): net.minecraft.network.chat.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type GTFluidBuilder$1_ = GTFluidBuilder$1;
    interface IConfigManager {
        abstract getSettings(): Internal.Set<Internal.Setting<any>>;
        abstract readFromNBT(arg0: Internal.CompoundTag_): boolean;
        hasSetting(arg0: Internal.Setting_<any>): boolean;
        abstract getSetting<T extends Internal.Enum<T>>(arg0: Internal.Setting_<T>): T;
        abstract writeToNBT(arg0: Internal.CompoundTag_): void;
        abstract putSetting<T extends Internal.Enum<T>>(arg0: Internal.Setting_<T>, arg1: T): void;
        abstract registerSetting<T extends Internal.Enum<T>>(arg0: Internal.Setting_<T>, arg1: T): void;
        get settings(): Internal.Set<Internal.Setting<any>>
    }
    type IConfigManager_ = IConfigManager;
    interface IMaterialProperty {
        abstract verifyProperty(arg0: Internal.MaterialProperties_): void;
        (arg0: Internal.MaterialProperties): void;
    }
    type IMaterialProperty_ = IMaterialProperty | ((arg0: Internal.MaterialProperties)=> void);
    interface IScreenInfoProvider {
        getTitleColor(): number;
        getTitleYPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        getTitleXPos(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        get titleColor(): number
    }
    type IScreenInfoProvider_ = IScreenInfoProvider;
    class SpatialPylonCluster implements Internal.IAECluster {
        constructor(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: BlockPos_)
        getClass(): typeof any;
        isValid(): boolean;
        getCurrentAxis(): Internal.SpatialPylonCluster$Axis;
        toString(): string;
        setLevel(): Internal.ServerLevel;
        getBoundsMin(): BlockPos;
        notifyAll(): void;
        destroy(): void;
        updateStatus(arg0: boolean): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getBlockEntities(): Internal.Iterator<Internal.SpatialPylonBlockEntity>;
        size(): number;
        hashCode(): number;
        getBoundsMax(): BlockPos;
        wait(): void;
        setValid(arg0: boolean): void;
        wait(arg0: number): void;
        isDestroyed(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get valid(): boolean
        get currentAxis(): Internal.SpatialPylonCluster$Axis
        get boundsMin(): BlockPos
        get blockEntities(): Internal.Iterator<Internal.SpatialPylonBlockEntity>
        get boundsMax(): BlockPos
        set valid(arg0: boolean)
        get destroyed(): boolean
    }
    type SpatialPylonCluster_ = SpatialPylonCluster;
    interface Decoder$Simple <A> {
        decoder(): Internal.Decoder<A>;
        abstract decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<A>;
        (arg0: Internal.Dynamic<T>): Internal.DataResult_<A>;
    }
    type Decoder$Simple_<A> = Decoder$Simple<A> | ((arg0: Internal.Dynamic<T>)=> Internal.DataResult_<A>);
    class RenderUtil$FluidTextureType extends Internal.Enum<Internal.RenderUtil$FluidTextureType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static values(): Internal.RenderUtil$FluidTextureType[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        map(arg0: Internal.IClientFluidTypeExtensions_, arg1: Internal.FluidStack_): Internal.TextureAtlasSprite;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.RenderUtil$FluidTextureType;
        name(): string;
        map(arg0: Internal.IClientFluidTypeExtensions_): Internal.TextureAtlasSprite;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.RenderUtil$FluidTextureType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "compareTo(com.gregtechceu.gtceu.client.util.RenderUtil$FluidTextureType)"(arg0: Internal.RenderUtil$FluidTextureType_): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.RenderUtil$FluidTextureType_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RenderUtil$FluidTextureType>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.RenderUtil$FluidTextureType
        static readonly STILL: (Internal.RenderUtil$FluidTextureType) & (Internal.RenderUtil$FluidTextureType);
        static readonly FLOWING: (Internal.RenderUtil$FluidTextureType) & (Internal.RenderUtil$FluidTextureType);
        static readonly OVERLAY: (Internal.RenderUtil$FluidTextureType) & (Internal.RenderUtil$FluidTextureType);
    }
    type RenderUtil$FluidTextureType_ = "flowing" | "still" | RenderUtil$FluidTextureType | "overlay";
    class TeleportDestination {
        constructor(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: Internal.Direction_)
        getClass(): typeof any;
        hashCode(): number;
        getLevel(): Internal.ServerLevel;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getLocation(): Vec3d;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getDirection(): Internal.Direction;
        get class(): typeof any
        get level(): Internal.ServerLevel
        get location(): Vec3d
        get direction(): Internal.Direction
    }
    type TeleportDestination_ = TeleportDestination;
    interface IDynamicBakedModel extends Internal.BakedModel {
        abstract isCustomRenderer(): boolean;
        getRenderPasses(arg0: Internal.ItemStack_, arg1: boolean): Internal.List<Internal.BakedModel>;
        getModelData(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ModelData_): Internal.ModelData;
        getRenderTypes(arg0: Internal.BlockState_, arg1: Internal.RandomSource_, arg2: Internal.ModelData_): Internal.ChunkRenderTypeSet;
        getQuads(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.RandomSource_): Internal.List<Internal.BakedQuad>;
        applyTransform(arg0: Internal.ItemDisplayContext_, arg1: Internal.PoseStack_, arg2: boolean): Internal.BakedModel;
        abstract getOverrides(): Internal.ItemOverrides;
        useAmbientOcclusion(arg0: Internal.BlockState_): boolean;
        useAmbientOcclusion(arg0: Internal.BlockState_, arg1: Internal.RenderType_): boolean;
        getRenderTypes(arg0: Internal.ItemStack_, arg1: boolean): Internal.List<Internal.RenderType>;
        abstract getQuads(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.RandomSource_, arg3: Internal.ModelData_, arg4: Internal.RenderType_): Internal.List<Internal.BakedQuad>;
        abstract useAmbientOcclusion(): boolean;
        abstract isGui3d(): boolean;
        abstract usesBlockLight(): boolean;
        /**
         * @deprecated
        */
        abstract getParticleIcon(): Internal.TextureAtlasSprite;
        getParticleIcon(arg0: Internal.ModelData_): Internal.TextureAtlasSprite;
        useAmbientOcclusionWithLightEmission(arg0: Internal.BlockState_, arg1: Internal.RenderType_): boolean;
        /**
         * @deprecated
        */
        getTransforms(): Internal.ItemTransforms;
        get customRenderer(): boolean
        get overrides(): Internal.ItemOverrides
        get gui3d(): boolean
        /**
         * @deprecated
        */
        get particleIcon(): Internal.TextureAtlasSprite
        /**
         * @deprecated
        */
        get transforms(): Internal.ItemTransforms
    }
    type IDynamicBakedModel_ = IDynamicBakedModel;
    class ShapedFluidContainerRecipe$Serializer implements Internal.RecipeSerializer<Internal.ShapedFluidContainerRecipe> {
        constructor()
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapedFluidContainerRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapedFluidContainerRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ShapedFluidContainerRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapedFluidContainerRecipe;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.ShapedFluidContainerRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ShapedFluidContainerRecipe;
        wait(): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,com.gregtechceu.gtceu.api.recipe.ShapedFluidContainerRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ShapedFluidContainerRecipe_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type ShapedFluidContainerRecipe$Serializer_ = ShapedFluidContainerRecipe$Serializer;
    class DebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        getClass(): typeof any;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: number, arg3: number, arg4: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static "renderFloatingText(com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,java.lang.String,double,double,double,int)"(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static "renderFilledBox(com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,net.minecraft.core.BlockPos,net.minecraft.core.BlockPos,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderFloatingText(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static renderFilledBox(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: Internal.AABB_, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static "renderFloatingText(com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,java.lang.String,int,int,int,int)"(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        toString(): string;
        static renderFilledBox(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        switchRenderChunkborder(): boolean;
        notifyAll(): void;
        static renderFilledBox(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: BlockPos_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderFloatingText(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static renderFilledBox(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static getTargetedEntity(arg0: Internal.Entity_, arg1: number): Internal.Optional<Internal.Entity>;
        static renderFloatingText(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number, arg10: boolean): void;
        hashCode(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        static renderFloatingText(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        equals(arg0: any): boolean;
        static "renderFilledBox(com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,net.minecraft.core.BlockPos,float,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: BlockPos_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        get class(): typeof any
        readonly collisionBoxRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly villageSectionsDebugRenderer: Internal.VillageSectionsDebugRenderer;
        readonly worldGenAttemptRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly pathfindingRenderer: Internal.PathfindingRenderer;
        readonly goalSelectorRenderer: Internal.GoalSelectorDebugRenderer;
        readonly heightMapRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly lightDebugRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly gameTestDebugRenderer: Internal.GameTestDebugRenderer;
        readonly neighborsUpdateRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly supportBlockRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly brainDebugRenderer: Internal.BrainDebugRenderer;
        readonly beeDebugRenderer: Internal.BeeDebugRenderer;
        readonly skyLightSectionDebugRenderer: Internal.LightSectionDebugRenderer;
        readonly chunkRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly solidFaceRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly chunkBorderRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
        readonly structureRenderer: Internal.StructureRenderer;
        readonly raidDebugRenderer: Internal.RaidDebugRenderer;
        readonly gameEventListenerRenderer: Internal.GameEventListenerRenderer;
        readonly waterDebugRenderer: Internal.DebugRenderer$SimpleDebugRenderer;
    }
    type DebugRenderer_ = DebugRenderer;
    class StructureSettingsBuilder {
        getClass(): typeof any;
        toString(): string;
        setBiomes(arg0: Internal.HolderSet_<Internal.Biome>): void;
        getDecorationStep(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        static copyOf(arg0: Internal.Structure$StructureSettings_): Internal.StructureSettingsBuilder;
        notify(): void;
        setTerrainAdaptation(arg0: Internal.TerrainAdjustment_): void;
        setDecorationStep(arg0: Internal.GenerationStep$Decoration_): void;
        wait(arg0: number, arg1: number): void;
        getSpawnOverrides(arg0: Internal.MobCategory_): Internal.StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        hashCode(): number;
        getTerrainAdaptation(): Internal.TerrainAdjustment;
        getOrAddSpawnOverrides(arg0: Internal.MobCategory_): Internal.StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        build(): Internal.Structure$StructureSettings;
        wait(): void;
        wait(arg0: number): void;
        getBiomes(): Internal.HolderSet<Internal.Biome>;
        equals(arg0: any): boolean;
        removeSpawnOverrides(arg0: Internal.MobCategory_): void;
        get class(): typeof any
        set biomes(arg0: Internal.HolderSet_<Internal.Biome>)
        get decorationStep(): Internal.GenerationStep$Decoration
        set terrainAdaptation(arg0: Internal.TerrainAdjustment_)
        set decorationStep(arg0: Internal.GenerationStep$Decoration_)
        get terrainAdaptation(): Internal.TerrainAdjustment
        get biomes(): Internal.HolderSet<Internal.Biome>
    }
    type StructureSettingsBuilder_ = StructureSettingsBuilder;
    class FrameTimer {
        constructor()
        scaleSampleTo(arg0: number, arg1: number, arg2: number): number;
        getClass(): typeof any;
        toString(): string;
        getLogStart(): number;
        notifyAll(): void;
        getLogEnd(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLog(): number[];
        getAverageDuration(arg0: number): number;
        hashCode(): number;
        scaleAverageDurationTo(arg0: number, arg1: number): number;
        logFrameDuration(arg0: number): void;
        wait(): void;
        wait(arg0: number): void;
        wrapIndex(arg0: number): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get logStart(): number
        get logEnd(): number
        get log(): number[]
        static readonly LOGGING_LENGTH: (240) & (number);
    }
    type FrameTimer_ = FrameTimer;
    interface Display$GenericInterpolator <T> {
        abstract get(arg0: number): T;
        constant<T>(arg0: T): this;
        (arg0: number): T;
    }
    type Display$GenericInterpolator_<T> = ((arg0: number)=> T) | Display$GenericInterpolator<T>;
    class CronExpression {
        constructor(cronExpression: string)
        getClass(): typeof any;
        getTimeAfter(afterTime: Internal.Date_): Internal.Date;
        toString(): string;
        static validateExpression(cronExpression: string): void;
        getExpressionSummary(): string;
        static isValidExpression(cronExpression: string): boolean;
        getNextInvalidTimeAfter(date: Internal.Date_): Internal.Date;
        getCronExpression(): string;
        notifyAll(): void;
        isSatisfiedBy(date: Internal.Date_): boolean;
        notify(): void;
        getPrevFireTime(targetDate: Internal.Date_): Internal.Date;
        wait(arg0: number, arg1: number): void;
        getNextValidTimeAfter(date: Internal.Date_): Internal.Date;
        hashCode(): number;
        getFinalFireTime(): Internal.Date;
        wait(): void;
        getTimeZone(): Internal.TimeZone;
        setTimeZone(timeZone: Internal.TimeZone_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get expressionSummary(): string
        get cronExpression(): string
        get finalFireTime(): Internal.Date
        get timeZone(): Internal.TimeZone
        set timeZone(timeZone: Internal.TimeZone_)
        static readonly MIN_DATE: (Internal.Date) & (Internal.Date);
        static readonly MAX_YEAR: (2126) & (number);
        static readonly MIN_CAL: (Internal.GregorianCalendar) & (Internal.Calendar);
    }
    type CronExpression_ = CronExpression;
    class IPartitionList$Builder {
        getClass(): typeof any;
        add(arg0: Internal.AEKey_): void;
        toString(): string;
        fuzzyMode(arg0: Internal.FuzzyMode_): void;
        notifyAll(): void;
        build(): Internal.IPartitionList;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        addAll(arg0: Internal.Iterable_<Internal.AEKey>): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type IPartitionList$Builder_ = IPartitionList$Builder;
    interface TeamManager {
        abstract markDirty(): void;
        abstract getTeamForPlayerID(arg0: Internal.UUID_): Internal.Optional<dev.ftb.mods.ftbteams.api.Team>;
        abstract getExtraData(): Internal.CompoundTag;
        abstract getTeams(): Internal.Collection<dev.ftb.mods.ftbteams.api.Team>;
        abstract getTeamByName(arg0: string): Internal.Optional<dev.ftb.mods.ftbteams.api.Team>;
        abstract createPartyTeam(arg0: Internal.ServerPlayer_, arg1: string, arg2: string, arg3: Internal.Color4I_): dev.ftb.mods.ftbteams.api.Team;
        abstract getTeamForPlayer(arg0: Internal.ServerPlayer_): Internal.Optional<dev.ftb.mods.ftbteams.api.Team>;
        abstract arePlayersInSameTeam(arg0: Internal.UUID_, arg1: Internal.UUID_): boolean;
        abstract getId(): Internal.UUID;
        abstract getTeamByID(arg0: Internal.UUID_): Internal.Optional<dev.ftb.mods.ftbteams.api.Team>;
        abstract getPlayerTeamForPlayerID(arg0: Internal.UUID_): Internal.Optional<dev.ftb.mods.ftbteams.api.Team>;
        abstract getServer(): Internal.MinecraftServer;
        abstract getKnownPlayerTeams(): Internal.Map<Internal.UUID, dev.ftb.mods.ftbteams.api.Team>;
        get extraData(): Internal.CompoundTag
        get teams(): Internal.Collection<dev.ftb.mods.ftbteams.api.Team>
        get id(): Internal.UUID
        get server(): Internal.MinecraftServer
        get knownPlayerTeams(): Internal.Map<Internal.UUID, dev.ftb.mods.ftbteams.api.Team>
    }
    type TeamManager_ = TeamManager;
    class ClientboundBundlePacket extends Internal.BundlePacket<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Iterable_<Internal.Packet<Internal.ClientGamePacketListener>>)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        subPackets(): Internal.Iterable<Internal.Packet<Internal.ClientGamePacketListener>>;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundBundlePacket_ = ClientboundBundlePacket;
    class StructureBlock extends Internal.BaseEntityBlock implements Internal.GameMasterBlock {
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
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
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
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        static readonly MODE: Internal.EnumProperty<Internal.StructureMode>;
    }
    type StructureBlock_ = StructureBlock;
    class PushDirection extends Internal.Enum<Internal.PushDirection> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.PushDirection;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        compareTo(arg0: Internal.PushDirection_): number;
        "compareTo(appeng.block.crafting.PushDirection)"(arg0: Internal.PushDirection_): number;
        static values(): Internal.PushDirection[];
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PushDirection>>;
        static fromDirection(arg0: Internal.Direction_): Internal.PushDirection;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.PushDirection;
        getDirection(): Internal.Direction;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.PushDirection
        get direction(): Internal.Direction
        static readonly EAST: (Internal.PushDirection) & (Internal.PushDirection);
        static readonly WEST: (Internal.PushDirection) & (Internal.PushDirection);
        static readonly UP: (Internal.PushDirection) & (Internal.PushDirection);
        static readonly SOUTH: (Internal.PushDirection) & (Internal.PushDirection);
        static readonly ALL: (Internal.PushDirection) & (Internal.PushDirection);
        static readonly NORTH: (Internal.PushDirection) & (Internal.PushDirection);
        static readonly DOWN: (Internal.PushDirection) & (Internal.PushDirection);
    }
    type PushDirection_ = "west" | PushDirection | "east" | "south" | "up" | "down" | "north" | "all";
    class PrimedTnt extends Internal.Entity implements Internal.TraceableEntity, Internal.DynamicLightSource, Internal.PrimedTntAccessor {
        constructor(arg0: Internal.EntityType_<Internal.PrimedTnt>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_)
        setFuse(arg0: number): void;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
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
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
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
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
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
        onInsideBubbleColumn(arg0: boolean): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
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
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
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
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
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
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
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
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
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
        getOwner(): Internal.Entity;
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
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
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
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setSilent(arg0: boolean): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
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
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
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
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPercentFrozen(): number;
        getPickResult(): Internal.ItemStack;
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
        getFuse(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        discard(): void;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
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
        lerpHeadTo(arg0: number, arg1: number): void;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setOwner(arg0: Internal.LivingEntity_): void;
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
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        set fuse(arg0: number)
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
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
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
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
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
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
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
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
        get owner(): Internal.Entity
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
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get inWater(): boolean
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set silent(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get percentFrozen(): number
        get pickResult(): Internal.ItemStack
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get fuse(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get passenger(): boolean
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set owner(arg0: Internal.LivingEntity_)
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
    }
    type PrimedTnt_ = PrimedTnt;
    interface IGridNode {
        abstract getMaxChannels(): number;
        abstract getLevel(): Internal.ServerLevel;
        abstract getConnectedSides(): Internal.Set<Internal.Direction>;
        abstract getVisualRepresentation(): Internal.AEItemKey;
        isActive(): boolean;
        isOnline(): boolean;
        abstract getInWorldConnections(): Internal.Map<Internal.Direction, Internal.IGridConnection>;
        abstract getOwningPlayerId(): number;
        abstract hasGridBooted(): boolean;
        abstract meetsChannelRequirements(): boolean;
        abstract getConnections(): Internal.List<Internal.IGridConnection>;
        abstract getGrid(): Internal.IGrid;
        abstract getService<T extends Internal.IGridNodeService>(arg0: T): T;
        abstract getUsedChannels(): number;
        abstract getOwner(): any;
        abstract hasFlag(arg0: Internal.GridFlags_): boolean;
        abstract getGridColor(): Internal.AEColor;
        abstract getOwningPlayerProfileId(): Internal.UUID;
        abstract fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        abstract beginVisit(arg0: Internal.IGridVisitor_): void;
        abstract getIdlePowerUsage(): number;
        abstract isPowered(): boolean;
        get maxChannels(): number
        get level(): Internal.ServerLevel
        get connectedSides(): Internal.Set<Internal.Direction>
        get visualRepresentation(): Internal.AEItemKey
        get active(): boolean
        get online(): boolean
        get inWorldConnections(): Internal.Map<Internal.Direction, Internal.IGridConnection>
        get owningPlayerId(): number
        get connections(): Internal.List<Internal.IGridConnection>
        get grid(): Internal.IGrid
        get usedChannels(): number
        get owner(): any
        get gridColor(): Internal.AEColor
        get owningPlayerProfileId(): Internal.UUID
        get idlePowerUsage(): number
        get powered(): boolean
    }
    type IGridNode_ = IGridNode;
    class TeamArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.TeamArgument> {
        constructor(this$0: Internal.TeamArgument$Info_)
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        toString(): string;
        type(): Internal.ArgumentTypeInfo<Internal.TeamArgument, any>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "instantiate(net.minecraft.commands.CommandBuildContext)"(commandBuildContext: Internal.CommandBuildContext_): Internal.TeamArgument;
        hashCode(): number;
        instantiate(commandBuildContext: Internal.CommandBuildContext_): Internal.TeamArgument;
        wait(): void;
        wait(arg0: number): void;
        "instantiate(net.minecraft.commands.CommandBuildContext)"(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type TeamArgument$Info$Template_ = TeamArgument$Info$Template;
    class DropperBlock extends Internal.DispenserBlock {
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
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
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
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        wait(): void;
        getMaxHorizontalOffset(): number;
        static getDispensePosition(arg0: Internal.BlockSource_): Internal.Position;
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
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        static registerBehavior(arg0: Internal.ItemLike_, arg1: Internal.DispenseItemBehavior_): void;
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
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
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
    type DropperBlock_ = DropperBlock;
    class Products$P1 <F extends Internal.K1, T1> {
        constructor(arg0: Internal.App_<F, T1>)
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function_<T1, R>): Internal.App<F, R>;
        getClass(): typeof any;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function<T1, R>>): Internal.App<F, R>;
        and<T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.Products$P7_<F, T2, T3, T4, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        notify(): void;
        "and(com.mojang.datafixers.Products$P5)"<T2, T3, T4, T5, T6>(arg0: Internal.Products$P5_<F, T2, T3, T4, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        wait(arg0: number, arg1: number): void;
        t1(): Internal.App<F, T1>;
        and<T2, T3, T4>(arg0: Internal.Products$P3_<F, T2, T3, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        "and(com.mojang.datafixers.Products$P7)"<T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.Products$P7_<F, T2, T3, T4, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        "and(com.mojang.datafixers.Products$P6)"<T2, T3, T4, T5, T6, T7>(arg0: Internal.Products$P6_<F, T2, T3, T4, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        toString(): string;
        notifyAll(): void;
        and<T2, T3, T4, T5, T6, T7>(arg0: Internal.Products$P6_<F, T2, T3, T4, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        "and(com.mojang.datafixers.Products$P4)"<T2, T3, T4, T5>(arg0: Internal.Products$P4_<F, T2, T3, T4, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        "and(com.mojang.datafixers.Products$P2)"<T2, T3>(arg0: Internal.Products$P2_<F, T2, T3>): Internal.Products$P3<F, T1, T2, T3>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function<T1, R>>): Internal.App<F, R>;
        "apply(com.mojang.datafixers.kinds.Applicative,java.util.function.Function)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function_<T1, R>): Internal.App<F, R>;
        and<T2, T3>(arg0: Internal.Products$P2_<F, T2, T3>): Internal.Products$P3<F, T1, T2, T3>;
        hashCode(): number;
        and<T2, T3, T4, T5, T6>(arg0: Internal.Products$P5_<F, T2, T3, T4, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        and<T2>(arg0: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        "and(com.mojang.datafixers.Products$P3)"<T2, T3, T4>(arg0: Internal.Products$P3_<F, T2, T3, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        wait(): void;
        wait(arg0: number): void;
        "and(com.mojang.datafixers.kinds.App)"<T2>(arg0: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        equals(arg0: any): boolean;
        and<T2, T3, T4, T5>(arg0: Internal.Products$P4_<F, T2, T3, T4, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        get class(): typeof any
    }
    type Products$P1_<F extends Internal.K1, T1> = Products$P1<F, T1>;
    class Products$P3 <F extends Internal.K1, T1, T2, T3> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>)
        getClass(): typeof any;
        and<T4, T5>(arg0: Internal.Products$P2_<F, T4, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        "and(com.mojang.datafixers.kinds.App)"<T4>(arg0: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function3)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function3_<T1, T2, T3, R>): Internal.App<F, R>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function3<T1, T2, T3, R>>): Internal.App<F, R>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        and<T4>(arg0: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        t3(): Internal.App<F, T3>;
        t1(): Internal.App<F, T1>;
        "and(com.mojang.datafixers.Products$P4)"<T4, T5, T6, T7>(arg0: Internal.Products$P4_<F, T4, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T4, T5, T6, T7>(arg0: Internal.Products$P4_<F, T4, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T4, T5, T6, T7, T8>(arg0: Internal.Products$P5_<F, T4, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        toString(): string;
        notifyAll(): void;
        "and(com.mojang.datafixers.Products$P3)"<T4, T5, T6>(arg0: Internal.Products$P3_<F, T4, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function3<T1, T2, T3, R>>): Internal.App<F, R>;
        "and(com.mojang.datafixers.Products$P5)"<T4, T5, T6, T7, T8>(arg0: Internal.Products$P5_<F, T4, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        and<T4, T5, T6>(arg0: Internal.Products$P3_<F, T4, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function3_<T1, T2, T3, R>): Internal.App<F, R>;
        "and(com.mojang.datafixers.Products$P2)"<T4, T5>(arg0: Internal.Products$P2_<F, T4, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Products$P3_<F extends Internal.K1, T1, T2, T3> = Products$P3<F, T1, T2, T3>;
    class StatType <T> implements Internal.Iterable<Internal.Stat<T>> {
        constructor(arg0: Internal.Registry_<T>)
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        getRegistry(): Internal.Registry<T>;
        toString(): string;
        spliterator(): Internal.Spliterator<Internal.Stat<T>>;
        notifyAll(): void;
        getTranslationKey(): string;
        get(arg0: T, arg1: Internal.StatFormatter_): Internal.Stat<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        contains(arg0: T): boolean;
        hashCode(): number;
        iterator(): Internal.Iterator<Internal.Stat<T>>;
        wait(): void;
        get(arg0: T): Internal.Stat<T>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        forEach(arg0: Internal.Consumer_<Internal.Stat<T>>): void;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get registry(): Internal.Registry<T>
        get translationKey(): string
    }
    type StatType_<T> = Special.StatType | StatType<T>;
    class Products$P2 <F extends Internal.K1, T1, T2> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>)
        getClass(): typeof any;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.BiFunction<T1, T2, R>>): Internal.App<F, R>;
        "and(com.mojang.datafixers.Products$P2)"<T3, T4>(arg0: Internal.Products$P2_<F, T3, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        and<T3, T4, T5>(arg0: Internal.Products$P3_<F, T3, T4, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        "and(com.mojang.datafixers.kinds.App)"<T3>(arg0: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
        and<T3, T4, T5, T6, T7, T8>(arg0: Internal.Products$P6_<F, T3, T4, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        notify(): void;
        "apply(com.mojang.datafixers.kinds.Applicative,java.util.function.BiFunction)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.BiFunction_<T1, T2, R>): Internal.App<F, R>;
        wait(arg0: number, arg1: number): void;
        t1(): Internal.App<F, T1>;
        "and(com.mojang.datafixers.Products$P6)"<T3, T4, T5, T6, T7, T8>(arg0: Internal.Products$P6_<F, T3, T4, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T3, T4, T5, T6>(arg0: Internal.Products$P4_<F, T3, T4, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        toString(): string;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.BiFunction<T1, T2, R>>): Internal.App<F, R>;
        notifyAll(): void;
        "and(com.mojang.datafixers.Products$P5)"<T3, T4, T5, T6, T7>(arg0: Internal.Products$P5_<F, T3, T4, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T3, T4>(arg0: Internal.Products$P2_<F, T3, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        and<T3, T4, T5, T6, T7>(arg0: Internal.Products$P5_<F, T3, T4, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        wait(): void;
        wait(arg0: number): void;
        "and(com.mojang.datafixers.Products$P3)"<T3, T4, T5>(arg0: Internal.Products$P3_<F, T3, T4, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.BiFunction_<T1, T2, R>): Internal.App<F, R>;
        equals(arg0: any): boolean;
        and<T3>(arg0: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
        "and(com.mojang.datafixers.Products$P4)"<T3, T4, T5, T6>(arg0: Internal.Products$P4_<F, T3, T4, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        get class(): typeof any
    }
    type Products$P2_<F extends Internal.K1, T1, T2> = Products$P2<F, T1, T2>;
    class Input {
        constructor()
        getClass(): typeof any;
        hasForwardImpulse(): boolean;
        getMoveVector(): Internal.Vec2;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        tick(arg0: boolean, arg1: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get moveVector(): Internal.Vec2
        up: boolean;
        forwardImpulse: number;
        down: boolean;
        shiftKeyDown: boolean;
        right: boolean;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
    }
    type Input_ = Input;
    class SuggestionsBuilder {
        constructor(arg0: string, arg1: number)
        constructor(arg0: string, arg1: string, arg2: number)
        getRemainingLowerCase(): string;
        getClass(): typeof any;
        getStart(): number;
        suggest(arg0: string): this;
        getInput(): string;
        "suggest(java.lang.String)"(arg0: string): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        suggest(arg0: number): this;
        "suggest(int)"(arg0: number): this;
        "suggest(java.lang.String,com.mojang.brigadier.Message)"(arg0: string, arg1: com.mojang.brigadier.Message_): this;
        createOffset(arg0: number): this;
        suggest(arg0: string, arg1: com.mojang.brigadier.Message_): this;
        buildFuture(): Internal.CompletableFuture<Internal.Suggestions>;
        toString(): string;
        notifyAll(): void;
        build(): Internal.Suggestions;
        hashCode(): number;
        restart(): this;
        wait(): void;
        suggest(arg0: number, arg1: com.mojang.brigadier.Message_): this;
        wait(arg0: number): void;
        getRemaining(): string;
        equals(arg0: any): boolean;
        "suggest(int,com.mojang.brigadier.Message)"(arg0: number, arg1: com.mojang.brigadier.Message_): this;
        add(arg0: Internal.SuggestionsBuilder_): this;
        get remainingLowerCase(): string
        get class(): typeof any
        get start(): number
        get input(): string
        get remaining(): string
    }
    type SuggestionsBuilder_ = SuggestionsBuilder;
    class Products$P9 <F extends Internal.K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>)
        getClass(): typeof any;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.App<F, R>;
        toString(): string;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.App<F, R>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>): Internal.App<F, R>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function9)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>): Internal.App<F, R>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Products$P9_<F extends Internal.K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> = Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
    class Products$P8 <F extends Internal.K1, T1, T2, T3, T4, T5, T6, T7, T8> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>)
        getClass(): typeof any;
        toString(): string;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>): Internal.App<F, R>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function8)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>): Internal.App<F, R>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.App<F, R>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.App<F, R>;
        t3(): Internal.App<F, T3>;
        t6(): Internal.App<F, T6>;
        t4(): Internal.App<F, T4>;
        t5(): Internal.App<F, T5>;
        t7(): Internal.App<F, T7>;
        t8(): Internal.App<F, T8>;
        t1(): Internal.App<F, T1>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Products$P8_<F extends Internal.K1, T1, T2, T3, T4, T5, T6, T7, T8> = Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
    class IdentityHashMap <K, V> extends Internal.AbstractMap<K, V> implements Internal.Cloneable, Internal.Map<K, V>, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.Map_<K, V>)
        constructor(arg0: number)
        clone(): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        getClass(): typeof any;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        static of<K, V>(): Internal.Map<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        keySet(): Internal.Set<K>;
        putIfAbsent(arg0: K, arg1: V): V;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        toString(): string;
        values(): Internal.Collection<V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        hashCode(): number;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        wait(): void;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        wait(arg0: number): void;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get class(): typeof any
        get empty(): boolean
    }
    type IdentityHashMap_<K, V> = IdentityHashMap<K, V>;
    class Products$P5 <F extends Internal.K1, T1, T2, T3, T4, T5> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>)
        getClass(): typeof any;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.App<F, R>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function5_<T1, T2, T3, T4, T5, R>): Internal.App<F, R>;
        "and(com.mojang.datafixers.Products$P3)"<T6, T7, T8>(arg0: Internal.Products$P3_<F, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T6>(arg0: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        t3(): Internal.App<F, T3>;
        t4(): Internal.App<F, T4>;
        t5(): Internal.App<F, T5>;
        t1(): Internal.App<F, T1>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        "and(com.mojang.datafixers.kinds.App)"<T6>(arg0: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        "and(com.mojang.datafixers.Products$P2)"<T6, T7>(arg0: Internal.Products$P2_<F, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        wait(): void;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function5)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function5_<T1, T2, T3, T4, T5, R>): Internal.App<F, R>;
        and<T6, T7>(arg0: Internal.Products$P2_<F, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        wait(arg0: number): void;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.App<F, R>;
        equals(arg0: any): boolean;
        and<T6, T7, T8>(arg0: Internal.Products$P3_<F, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        get class(): typeof any
    }
    type Products$P5_<F extends Internal.K1, T1, T2, T3, T4, T5> = Products$P5<F, T1, T2, T3, T4, T5>;
    class Products$P4 <F extends Internal.K1, T1, T2, T3, T4> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>)
        getClass(): typeof any;
        "and(com.mojang.datafixers.kinds.App)"<T5>(arg0: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        and<T5>(arg0: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        "and(com.mojang.datafixers.Products$P3)"<T5, T6, T7>(arg0: Internal.Products$P3_<F, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function4_<T1, T2, T3, T4, R>): Internal.App<F, R>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "and(com.mojang.datafixers.Products$P4)"<T5, T6, T7, T8>(arg0: Internal.Products$P4_<F, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function4<T1, T2, T3, T4, R>>): Internal.App<F, R>;
        t3(): Internal.App<F, T3>;
        t1(): Internal.App<F, T1>;
        "and(com.mojang.datafixers.Products$P2)"<T5, T6>(arg0: Internal.Products$P2_<F, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function4)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function4_<T1, T2, T3, T4, R>): Internal.App<F, R>;
        toString(): string;
        notifyAll(): void;
        t4(): Internal.App<F, T4>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function4<T1, T2, T3, T4, R>>): Internal.App<F, R>;
        wait(): void;
        wait(arg0: number): void;
        and<T5, T6, T7>(arg0: Internal.Products$P3_<F, T5, T6, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T5, T6, T7, T8>(arg0: Internal.Products$P4_<F, T5, T6, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        equals(arg0: any): boolean;
        and<T5, T6>(arg0: Internal.Products$P2_<F, T5, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        get class(): typeof any
    }
    type Products$P4_<F extends Internal.K1, T1, T2, T3, T4> = Products$P4<F, T1, T2, T3, T4>;
    class RenderStateShard$ColorLogicStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_)
        getClass(): typeof any;
        clearRenderState(): void;
        hashCode(): number;
        toString(): string;
        setupRenderState(): void;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type RenderStateShard$ColorLogicStateShard_ = RenderStateShard$ColorLogicStateShard;
    class Products$P7 <F extends Internal.K1, T1, T2, T3, T4, T5, T6, T7> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>)
        getClass(): typeof any;
        and<T8>(arg0: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.App<F, R>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function7)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>): Internal.App<F, R>;
        t3(): Internal.App<F, T3>;
        t6(): Internal.App<F, T6>;
        t4(): Internal.App<F, T4>;
        t5(): Internal.App<F, T5>;
        t7(): Internal.App<F, T7>;
        t1(): Internal.App<F, T1>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.App<F, R>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>): Internal.App<F, R>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Products$P7_<F extends Internal.K1, T1, T2, T3, T4, T5, T6, T7> = Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
    class Products$P6 <F extends Internal.K1, T1, T2, T3, T4, T5, T6> {
        constructor(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>)
        getClass(): typeof any;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.kinds.App)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.App<F, R>;
        toString(): string;
        notifyAll(): void;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.App_<F, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.App<F, R>;
        "and(com.mojang.datafixers.kinds.App)"<T7>(arg0: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        t3(): Internal.App<F, T3>;
        t6(): Internal.App<F, T6>;
        t4(): Internal.App<F, T4>;
        t5(): Internal.App<F, T5>;
        t1(): Internal.App<F, T1>;
        t2(): Internal.App<F, T2>;
        hashCode(): number;
        "and(com.mojang.datafixers.Products$P2)"<T7, T8>(arg0: Internal.Products$P2_<F, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        "apply(com.mojang.datafixers.kinds.Applicative,com.mojang.datafixers.util.Function6)"<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>): Internal.App<F, R>;
        apply<R>(arg0: Internal.Applicative_<F, any>, arg1: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>): Internal.App<F, R>;
        wait(): void;
        and<T7, T8>(arg0: Internal.Products$P2_<F, T7, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        wait(arg0: number): void;
        and<T7>(arg0: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type Products$P6_<F extends Internal.K1, T1, T2, T3, T4, T5, T6> = Products$P6<F, T1, T2, T3, T4, T5, T6>;
    class DataPackRegistryEvent$NewRegistry extends Internal.DataPackRegistryEvent {
        constructor()
        dataPackRegistry<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: Internal.Codec_<T>, arg2: Internal.Codec_<T>): void;
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        dataPackRegistry<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: Internal.Codec_<T>): void;
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
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type DataPackRegistryEvent$NewRegistry_ = DataPackRegistryEvent$NewRegistry;
    abstract class AbstractTickableSoundInstance extends Internal.AbstractSoundInstance implements Internal.TickableSoundInstance {
        getClass(): typeof any;
        getSource(): Internal.SoundSource;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        canPlaySound(): boolean;
        getPitch(): number;
        getSound(): Internal.Sound;
        static createUnseededRandom(): Internal.RandomSource;
        getAttenuation(): Internal.SoundInstance$Attenuation;
        isStopped(): boolean;
        getLocation(): ResourceLocation;
        toString(): string;
        resolve(arg0: Internal.SoundManager_): Internal.WeighedSoundEvents;
        canStartSilent(): boolean;
        notifyAll(): void;
        getStream(arg0: Internal.SoundBufferLibrary_, arg1: Internal.Sound_, arg2: boolean): Internal.CompletableFuture<Internal.AudioStream>;
        abstract tick(): void;
        getDelay(): number;
        getX(): number;
        isLooping(): boolean;
        getVolume(): number;
        getY(): number;
        getZ(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        isRelative(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get source(): Internal.SoundSource
        get pitch(): number
        get sound(): Internal.Sound
        get attenuation(): Internal.SoundInstance$Attenuation
        get stopped(): boolean
        get location(): ResourceLocation
        get delay(): number
        get x(): number
        get looping(): boolean
        get volume(): number
        get y(): number
        get z(): number
        get relative(): boolean
    }
    type AbstractTickableSoundInstance_ = AbstractTickableSoundInstance;
    class RegistrateBlockstateProvider extends net.minecraftforge.client.model.generators.BlockStateProvider implements Internal.RegistrateProvider {
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: Internal.PackOutput_, arg2: Internal.ExistingFileHelper_)
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        "horizontalBlock(net.minecraft.world.level.block.Block,java.util.function.Function)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>): void;
        fenceBlockWithRenderTypeAndFast(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        static saveStable(arg0: Internal.CachedOutput_, arg1: Internal.JsonElement_, arg2: Internal.Path_): Internal.CompletableFuture<any>;
        signBlock(arg0: Internal.StandingSignBlock_, arg1: Internal.WallSignBlock_, arg2: ResourceLocation_): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: string): void;
        "axisBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string): void;
        wallBlockWithRenderTypeAndFast(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: string): void;
        axisBlock(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_): void;
        wallBlock(arg0: Internal.WallBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_): void;
        "trapdoorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.TrapDoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,boolean,java.lang.String,java.lang.String)"(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: string, arg5: string): void;
        "trapdoorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.TrapDoorBlock,net.minecraft.resources.ResourceLocation,boolean,java.lang.String,java.lang.String)"(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: string, arg4: string): void;
        directionalBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>): void;
        "axisBlock(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraftforge.client.model.generators.ModelFile,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.RotatedPillarBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_): void;
        simpleBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.ModelFile, Internal.ConfiguredModel[]>): void;
        "paneBlockWithRenderTypeAndFast(net.minecraft.world.level.block.IronBarsBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: string): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_, arg6: ResourceLocation_): void;
        axisBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: string, arg2: string): void;
        "fenceBlockWithRenderType(net.minecraft.world.level.block.FenceBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        "axisBlockWithRenderTypeAndFast(net.minecraft.world.level.block.RotatedPillarBlock,java.lang.String,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: string, arg2: string): void;
        horizontalFaceBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>): void;
        wallBlock(arg0: Internal.WallBlock_, arg1: ResourceLocation_): void;
        stairsBlock(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_): void;
        trapdoorBlockWithRenderType(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: ResourceLocation_): void;
        fenceGateBlockWithRenderType(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        wallBlockWithRenderTypeAndFast(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        getClass(): typeof any;
        paneBlockWithRenderTypeAndFast(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        "paneBlockWithRenderType(net.minecraft.world.level.block.IronBarsBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        "horizontalBlock(net.minecraft.world.level.block.Block,java.util.function.Function,int)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>, arg2: number): void;
        "directionalBlock(net.minecraft.world.level.block.Block,java.util.function.Function)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>): void;
        "trapdoorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.TrapDoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,boolean,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        axisBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string): void;
        getName(): string;
        logBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        "stairsBlock(net.minecraft.world.level.block.StairBlock,net.minecraftforge.client.model.generators.ModelFile,net.minecraftforge.client.model.generators.ModelFile,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.StairBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_): void;
        trapdoorBlock(arg0: Internal.TrapDoorBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_, arg4: boolean): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        logBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: string, arg2: string): void;
        doorBlockWithRenderTypeAndFast(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        slabBlock(arg0: Internal.SlabBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        fenceGateBlock(arg0: Internal.FenceGateBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_, arg4: Internal.ModelFile_): void;
        fenceBlockWithRenderType(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: string): void;
        paneBlockWithRenderType(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        "axisBlockWithRenderTypeAndFast(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        "doorBlockWithRenderType(net.minecraft.world.level.block.DoorBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string): void;
        blockTexture(arg0: Internal.Block_): ResourceLocation;
        wallBlockWithRenderType(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        run(arg0: Internal.CachedOutput_): Internal.CompletableFuture<any>;
        horizontalBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>): void;
        "wallBlockWithRenderTypeAndFast(net.minecraft.world.level.block.WallBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        fenceBlockWithRenderTypeAndFast(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        wait(arg0: number): void;
        "horizontalFaceBlock(net.minecraft.world.level.block.Block,java.util.function.Function)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>): void;
        "simpleBlock(net.minecraft.world.level.block.Block,java.util.function.Function)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.ModelFile, Internal.ConfiguredModel[]>): void;
        "axisBlockWithRenderTypeAndFast(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        paneBlock(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        "fenceBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        fenceGateBlockWithRenderTypeAndFast(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        pressurePlateBlock(arg0: Internal.PressurePlateBlock_, arg1: ResourceLocation_): void;
        wallBlockWithRenderType(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: string): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        "wallBlockWithRenderTypeAndFast(net.minecraft.world.level.block.WallBlock,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        trapdoorBlockWithRenderType(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: ResourceLocation_): void;
        "fenceGateBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceGateBlock,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        fenceGateBlock(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_): void;
        doorBlockWithRenderTypeAndFast(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: string, arg6: string): void;
        paneBlockWithRenderTypeAndFast(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        axisBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        "wallBlockWithRenderType(net.minecraft.world.level.block.WallBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        axisBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        modLoc(arg0: string): ResourceLocation;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: string): void;
        "fenceBlockWithRenderType(net.minecraft.world.level.block.FenceBlock,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: string): void;
        "stairsBlock(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "directionalBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile,int)"(arg0: Internal.Block_, arg1: Internal.ModelFile_, arg2: number): void;
        paneBlockWithRenderType(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        fenceBlockWithRenderType(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        doorBlockWithRenderType(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string): void;
        "doorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.DoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: string): void;
        doorBlockWithRenderType(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string): void;
        "axisBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "fenceBlockWithRenderType(net.minecraft.world.level.block.FenceBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        wait(): void;
        axisBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        "fenceGateBlockWithRenderType(net.minecraft.world.level.block.FenceGateBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        stairsBlock(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "paneBlockWithRenderType(net.minecraft.world.level.block.IronBarsBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string): void;
        directionalBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>, arg2: number): void;
        trapdoorBlockWithRenderType(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: string): void;
        wallBlockWithRenderType(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        directionalBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        "doorBlockWithRenderType(net.minecraft.world.level.block.DoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        directionalBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_, arg2: number): void;
        doorBlockWithRenderTypeAndFast(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: string): void;
        "axisBlockWithRenderTypeAndFast(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        "signBlock(net.minecraft.world.level.block.StandingSignBlock,net.minecraft.world.level.block.WallSignBlock,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StandingSignBlock_, arg1: Internal.WallSignBlock_, arg2: ResourceLocation_): void;
        "doorBlockWithRenderType(net.minecraft.world.level.block.DoorBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "horizontalFaceBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        axisBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        stairsBlock(arg0: Internal.StairBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_): void;
        "axisBlockWithRenderTypeAndFast(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        doorBlockWithRenderTypeAndFast(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        getExistingMultipartBuilder(arg0: Internal.Block_): Internal.Optional<Internal.MultiPartBlockStateBuilder>;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        doorBlockWithRenderType(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        fenceGateBlockWithRenderTypeAndFast(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        buttonBlock(arg0: Internal.ButtonBlock_, arg1: ResourceLocation_): void;
        trapdoorBlockWithRenderType(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: string): void;
        doorBlockWithRenderType(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        trapdoorBlockWithRenderTypeAndFast(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: string, arg5: string): void;
        "paneBlockWithRenderTypeAndFast(net.minecraft.world.level.block.IronBarsBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        "trapdoorBlockWithRenderType(net.minecraft.world.level.block.TrapDoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,boolean,net.minecraft.resources.ResourceLocation)"(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: ResourceLocation_): void;
        simpleBlock(arg0: Internal.Block_): void;
        "fenceGateBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceGateBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        simpleBlockWithItem(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        equals(arg0: any): boolean;
        "simpleBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        fenceGateBlockWithRenderType(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        paneBlockWithRenderTypeAndFast(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: string): void;
        fenceBlockWithRenderTypeAndFast(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        fenceBlock(arg0: Internal.FenceBlock_, arg1: ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string): void;
        "fenceBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        slabBlock(arg0: Internal.SlabBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        axisBlock(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        fourWayBlock(arg0: Internal.CrossCollisionBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_): void;
        "wallBlockWithRenderTypeAndFast(net.minecraft.world.level.block.WallBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        pressurePlateBlock(arg0: Internal.PressurePlateBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_): void;
        stairsBlock(arg0: Internal.StairBlock_, arg1: ResourceLocation_): void;
        trapdoorBlock(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean): void;
        "fenceGateBlockWithRenderType(net.minecraft.world.level.block.FenceGateBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        mcLoc(arg0: string): ResourceLocation;
        "horizontalFaceBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile,int)"(arg0: Internal.Block_, arg1: Internal.ModelFile_, arg2: number): void;
        axisBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        fenceGateBlock(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_): void;
        "simpleBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ConfiguredModel[])"(arg0: Internal.Block_, ...arg1: Internal.ConfiguredModel_[]): void;
        paneBlockWithRenderType(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string): void;
        "wallBlockWithRenderType(net.minecraft.world.level.block.WallBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        paneBlock(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        "fenceBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        "logBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_): void;
        "wallBlockWithRenderType(net.minecraft.world.level.block.WallBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        "paneBlockWithRenderType(net.minecraft.world.level.block.IronBarsBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "paneBlockWithRenderType(net.minecraft.world.level.block.IronBarsBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string): void;
        fenceBlockWithRenderType(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        wallBlockWithRenderType(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        fourWayMultipart(arg0: Internal.MultiPartBlockStateBuilder_, arg1: Internal.ModelFile_): void;
        horizontalBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        axisBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: string): void;
        itemModels(): Internal.ItemModelProvider;
        fenceBlockWithRenderTypeAndFast(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        buttonBlock(arg0: Internal.ButtonBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_): void;
        "doorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.DoorBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        horizontalBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>, arg2: number): void;
        "horizontalFaceBlock(net.minecraft.world.level.block.Block,java.util.function.Function,int)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>, arg2: number): void;
        "doorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.DoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        getMultipartBuilder(arg0: Internal.Block_): Internal.MultiPartBlockStateBuilder;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        wallBlockWithRenderTypeAndFast(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        horizontalFaceBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_, arg2: number): void;
        paneBlockWithRenderTypeAndFast(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        horizontalFaceBlock(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>, arg2: number): void;
        cubeAll(arg0: Internal.Block_): Internal.ModelFile;
        horizontalBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_, arg2: number): void;
        "fenceGateBlockWithRenderType(net.minecraft.world.level.block.FenceGateBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        fenceGateBlockWithRenderTypeAndFast(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: string): void;
        toString(): string;
        simpleBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        notifyAll(): void;
        models(): Internal.BlockModelProvider;
        "trapdoorBlockWithRenderType(net.minecraft.world.level.block.TrapDoorBlock,net.minecraft.resources.ResourceLocation,boolean,net.minecraft.resources.ResourceLocation)"(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: ResourceLocation_): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: string, arg6: string): void;
        "axisBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: string): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        paneBlockWithRenderType(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string): void;
        "signBlock(net.minecraft.world.level.block.StandingSignBlock,net.minecraft.world.level.block.WallSignBlock,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.StandingSignBlock_, arg1: Internal.WallSignBlock_, arg2: Internal.ModelFile_): void;
        trapdoorBlockWithRenderTypeAndFast(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        axisBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        simpleBlockItem(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        trapdoorBlockWithRenderTypeAndFast(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: string, arg4: string): void;
        "stairsBlockWithRenderTypeAndFast(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        doorBlock(arg0: Internal.DoorBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_, arg4: Internal.ModelFile_, arg5: Internal.ModelFile_, arg6: Internal.ModelFile_, arg7: Internal.ModelFile_, arg8: Internal.ModelFile_): void;
        "doorBlockWithRenderType(net.minecraft.world.level.block.DoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string): void;
        "logBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: string): void;
        "fenceGateBlockWithRenderType(net.minecraft.world.level.block.FenceGateBlock,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: string): void;
        fenceBlockWithRenderType(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        "horizontalBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        wallBlockWithRenderTypeAndFast(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        logBlock(arg0: Internal.RotatedPillarBlock_): void;
        simpleBlock(arg0: Internal.Block_, ...arg1: Internal.ConfiguredModel_[]): void;
        notify(): void;
        fenceBlock(arg0: Internal.FenceBlock_, arg1: string, arg2: ResourceLocation_): void;
        wallBlock(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_): void;
        signBlock(arg0: Internal.StandingSignBlock_, arg1: Internal.WallSignBlock_, arg2: Internal.ModelFile_): void;
        "axisBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: string): void;
        axisBlock(arg0: Internal.RotatedPillarBlock_): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: string): void;
        axisBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "trapdoorBlockWithRenderType(net.minecraft.world.level.block.TrapDoorBlock,net.minecraft.resources.ResourceLocation,boolean,java.lang.String)"(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: string): void;
        paneBlock(arg0: Internal.IronBarsBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_, arg4: Internal.ModelFile_, arg5: Internal.ModelFile_): void;
        "axisBlock(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        doorBlock(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        stairsBlock(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        fenceGateBlockWithRenderType(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: string): void;
        "directionalBlock(net.minecraft.world.level.block.Block,java.util.function.Function,int)"(arg0: Internal.Block_, arg1: Internal.Function_<Internal.BlockState, Internal.ModelFile>, arg2: number): void;
        stairsBlockWithRenderType(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        axisBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: string): void;
        "axisBlockWithRenderTypeAndFast(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        slabBlock(arg0: Internal.SlabBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_, arg3: Internal.ModelFile_): void;
        "horizontalBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile,int)"(arg0: Internal.Block_, arg1: Internal.ModelFile_, arg2: number): void;
        "doorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.DoorBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.DoorBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        "fenceBlockWithRenderType(net.minecraft.world.level.block.FenceBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        "axisBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        logBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: string): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        "paneBlockWithRenderTypeAndFast(net.minecraft.world.level.block.IronBarsBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.IronBarsBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        logBlockWithRenderType(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_): void;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string): void;
        "wallBlockWithRenderType(net.minecraft.world.level.block.WallBlock,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.WallBlock_, arg1: ResourceLocation_, arg2: string): void;
        horizontalFaceBlock(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        "paneBlockWithRenderTypeAndFast(net.minecraft.world.level.block.IronBarsBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.IronBarsBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_): void;
        wait(arg0: number, arg1: number): void;
        getExistingVariantBuilder(arg0: Internal.Block_): Internal.Optional<Internal.VariantBlockStateBuilder>;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_, arg5: ResourceLocation_, arg6: ResourceLocation_): void;
        horizontalBlock(arg0: Internal.Block_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "trapdoorBlockWithRenderTypeAndFast(net.minecraft.world.level.block.TrapDoorBlock,net.minecraft.resources.ResourceLocation,boolean,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        doorBlock(arg0: Internal.DoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_): void;
        "trapdoorBlockWithRenderType(net.minecraft.world.level.block.TrapDoorBlock,java.lang.String,net.minecraft.resources.ResourceLocation,boolean,java.lang.String)"(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean, arg4: string): void;
        stairsBlockWithRenderTypeAndFast(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        "wallBlockWithRenderTypeAndFast(net.minecraft.world.level.block.WallBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.WallBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        "fenceGateBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceGateBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        trapdoorBlock(arg0: Internal.TrapDoorBlock_, arg1: string, arg2: ResourceLocation_, arg3: boolean): void;
        getSide(): Internal.LogicalSide;
        "directionalBlock(net.minecraft.world.level.block.Block,net.minecraftforge.client.model.generators.ModelFile)"(arg0: Internal.Block_, arg1: Internal.ModelFile_): void;
        "fenceBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceBlock,net.minecraft.resources.ResourceLocation,java.lang.String,java.lang.String)"(arg0: Internal.FenceBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        axisBlockWithRenderTypeAndFast(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_, arg2: string, arg3: string): void;
        hashCode(): number;
        trapdoorBlockWithRenderTypeAndFast(arg0: Internal.TrapDoorBlock_, arg1: ResourceLocation_, arg2: boolean, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,java.lang.String,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.StairBlock_, arg1: string, arg2: ResourceLocation_, arg3: string): void;
        axisBlock(arg0: Internal.RotatedPillarBlock_, arg1: Internal.ModelFile_, arg2: Internal.ModelFile_): void;
        "stairsBlockWithRenderType(net.minecraft.world.level.block.StairBlock,net.minecraft.resources.ResourceLocation,java.lang.String)"(arg0: Internal.StairBlock_, arg1: ResourceLocation_, arg2: string): void;
        "fenceGateBlockWithRenderTypeAndFast(net.minecraft.world.level.block.FenceGateBlock,java.lang.String,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: ResourceLocation_): void;
        fenceGateBlockWithRenderType(arg0: Internal.FenceGateBlock_, arg1: ResourceLocation_, arg2: ResourceLocation_): void;
        "axisBlockWithRenderType(net.minecraft.world.level.block.RotatedPillarBlock,net.minecraft.resources.ResourceLocation)"(arg0: Internal.RotatedPillarBlock_, arg1: ResourceLocation_): void;
        fenceGateBlockWithRenderTypeAndFast(arg0: Internal.FenceGateBlock_, arg1: string, arg2: ResourceLocation_, arg3: string, arg4: string): void;
        getVariantBuilder(arg0: Internal.Block_): Internal.VariantBlockStateBuilder;
        get class(): typeof any
        get name(): string
        get side(): Internal.LogicalSide
    }
    type RegistrateBlockstateProvider_ = RegistrateBlockstateProvider;
    class TrimMaterial extends Internal.Record {
        constructor(arg0: string, arg1: Internal.Holder_<Internal.Item>, arg2: number, arg3: Internal.Map_<Internal.ArmorMaterials, string>, arg4: net.minecraft.network.chat.Component_)
        getClass(): typeof any;
        toString(): string;
        static create(arg0: string, arg1: Internal.Item_, arg2: number, arg3: net.minecraft.network.chat.Component_, arg4: Internal.Map_<Internal.ArmorMaterials, string>): Internal.TrimMaterial;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        description(): net.minecraft.network.chat.Component;
        ingredient(): Internal.Holder<Internal.Item>;
        assetName(): string;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        itemModelIndex(): number;
        overrideArmorMaterials(): Internal.Map<Internal.ArmorMaterials, string>;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.TrimMaterial>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.TrimMaterial>;
    }
    type TrimMaterial_ = Special.TrimMaterial | TrimMaterial;
    abstract class InventoryFilterItem extends Internal.BaseFilterItem {
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
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
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
        getDisplayItemStacks(filter: Internal.ItemStack_, list: Internal.List_<Internal.ItemStack>): void;
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
        addSlots(filter: Internal.ItemStack_, list: Internal.List_<Internal.InventoryFilterItem$FilterSlot>): void;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getInventorySize(filter: Internal.ItemStack_): number;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(world: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        filterItem(filter: Internal.ItemStack_, item: Internal.Item_): boolean;
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
        addInfo(filter: Internal.ItemStack_, info: Internal.FilterInfo_, expanded: boolean): void;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        static getInventory(stack: Internal.ItemStack_): Internal.ItemInventory;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        resetFilterData(filter: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        abstract filter(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
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
        inventoryTick(stack: Internal.ItemStack_, level: Internal.Level_, entity: Internal.Entity_, i: number, bl: boolean): void;
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
        clearFilterCache(filter: Internal.ItemStack_): void;
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
    type InventoryFilterItem_ = InventoryFilterItem;
    interface ModelBaker extends Internal.IForgeModelBaker {
        abstract getModelTextureGetter(): Internal.Function<Internal.Material, Internal.TextureAtlasSprite>;
        /**
         * @deprecated
        */
        abstract bake(arg0: ResourceLocation_, arg1: Internal.ModelState_): Internal.BakedModel;
        abstract bake(arg0: ResourceLocation_, arg1: Internal.ModelState_, arg2: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>): Internal.BakedModel;
        abstract getModel(arg0: ResourceLocation_): Internal.UnbakedModel;
        get modelTextureGetter(): Internal.Function<Internal.Material, Internal.TextureAtlasSprite>
    }
    type ModelBaker_ = ModelBaker;
    class SoundEvent {
        getClass(): typeof any;
        getLocation(): ResourceLocation;
        toString(): string;
        notifyAll(): void;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static createFixedRangeEvent(arg0: ResourceLocation_, arg1: number): Internal.SoundEvent;
        hashCode(): number;
        getRange(arg0: number): number;
        static readFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.SoundEvent;
        wait(): void;
        wait(arg0: number): void;
        static createVariableRangeEvent(arg0: ResourceLocation_): Internal.SoundEvent;
        equals(arg0: any): boolean;
        get class(): typeof any
        get location(): ResourceLocation
        static readonly DIRECT_CODEC: Internal.Codec<Internal.SoundEvent>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.SoundEvent>>;
    }
    type SoundEvent_ = SoundEvent | Special.SoundEvent;
    interface ChannelOutboundInvoker {
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_, arg2: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract deregister(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract flush(): this;
        abstract write(arg0: any): Internal.ChannelFuture;
        abstract writeAndFlush(arg0: any): Internal.ChannelFuture;
        abstract disconnect(): Internal.ChannelFuture;
        abstract close(): Internal.ChannelFuture;
        abstract write(arg0: any, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract deregister(): Internal.ChannelFuture;
        abstract disconnect(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract "connect(java.net.SocketAddress,io.netty.channel.ChannelPromise)"(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract newFailedFuture(arg0: Internal.Throwable_): Internal.ChannelFuture;
        abstract newSucceededFuture(): Internal.ChannelFuture;
        abstract close(arg0: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract newProgressivePromise(): Internal.ChannelProgressivePromise;
        abstract "connect(java.net.SocketAddress,java.net.SocketAddress)"(arg0: Internal.SocketAddress_, arg1: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract bind(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract writeAndFlush(arg0: any, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract bind(arg0: Internal.SocketAddress_): Internal.ChannelFuture;
        abstract connect(arg0: Internal.SocketAddress_, arg1: Internal.ChannelPromise_): Internal.ChannelFuture;
        abstract read(): this;
        abstract voidPromise(): Internal.ChannelPromise;
        abstract newPromise(): Internal.ChannelPromise;
    }
    type ChannelOutboundInvoker_ = ChannelOutboundInvoker;
    interface ReflectionAccessFilter {
        abstract check(arg0: typeof any): Internal.ReflectionAccessFilter$FilterResult;
        (arg0: typeof any): Internal.ReflectionAccessFilter$FilterResult_;
        readonly BLOCK_ALL_JAVA: Internal.ReflectionAccessFilter;
        readonly BLOCK_ALL_ANDROID: Internal.ReflectionAccessFilter;
        readonly BLOCK_INACCESSIBLE_JAVA: Internal.ReflectionAccessFilter;
        readonly BLOCK_ALL_PLATFORM: Internal.ReflectionAccessFilter;
    }
    type ReflectionAccessFilter_ = ((arg0: typeof any)=> Internal.ReflectionAccessFilter$FilterResult_) | ReflectionAccessFilter;
    class VoidUpgradeItem extends Internal.UpgradeItemBase<Internal.VoidUpgradeWrapper> {
        constructor(arg0: any_, arg1: any_)
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
        getUpgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        checkThisForConflictsWithExistingUpgrades(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: number): Internal.UpgradeSlotChangeResult;
        getFilterSlotCount(): number;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean, arg2: Internal.Player_): Internal.UpgradeSlotChangeResult;
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
        getInventoryColumnsTaken(): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canAddUpgradeTo(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        isVoidAnythingEnabled(): boolean;
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
        getType(): Internal.UpgradeType<Internal.VoidUpgradeWrapper>;
        getId(): string;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean, arg3: number, arg4: Internal.IUpgradeItem_<any>): Internal.UpgradeSlotChangeResult;
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
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getName(): net.minecraft.network.chat.Component;
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
        getUpgradesInGroupPerStorage(arg0: string): number;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getUpgradesPerStorage(arg0: string): number;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.IStorageWrapper_, arg3: boolean): Internal.UpgradeSlotChangeResult;
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
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get upgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>
        get complex(): boolean
        get filterSlotCount(): number
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get inventoryColumnsTaken(): number
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
        get voidAnythingEnabled(): boolean
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get type(): Internal.UpgradeType<Internal.VoidUpgradeWrapper>
        get id(): string
        get upgradeGroup(): Internal.UpgradeGroup
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get name(): net.minecraft.network.chat.Component
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
        static readonly TYPE: Internal.UpgradeType<Internal.VoidUpgradeWrapper>;
    }
    type VoidUpgradeItem_ = VoidUpgradeItem;
}
declare namespace net.p3pp3rf1y.sophisticatedstorage.block {
    class ControllerBlock extends Internal.BlockBase implements Internal.ISneakItemInteractionBlock, Internal.EntityBlock {
        constructor()
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
        trySneakItemInteraction(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockState_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.BlockHitResult_, arg6: Internal.ItemStack_): boolean;
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
    type ControllerBlock_ = ControllerBlock;
}
declare namespace it.unimi.dsi.fastutil.doubles {
    interface DoubleConsumer extends Internal.DoubleConsumer, Internal.Consumer<number> {
        /**
         * @deprecated
        */
        "accept(java.lang.Double)"(arg0: number): void;
        abstract accept(arg0: number): void;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        abstract "accept(double)"(arg0: number): void;
        "andThen(java.util.function.DoubleConsumer)"(arg0: Internal.DoubleConsumer_): Internal.DoubleConsumer;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        andThen(arg0: Internal.DoubleConsumer_): Internal.DoubleConsumer;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        andThen(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): this;
        "andThen(it.unimi.dsi.fastutil.doubles.DoubleConsumer)"(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): this;
        /**
         * @deprecated
        */
        "accept(java.lang.Object)"(arg0: any): void;
    }
    type DoubleConsumer_ = DoubleConsumer;
}
